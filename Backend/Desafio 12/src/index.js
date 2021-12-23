const express = require("express");
const path = require("path");
const User = require("./schema/users");
const mongoose = require("mongoose");
const mongocfg = require("../src/db");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const parseArgs = require("minimist");
const { fork } = require("child_process");

mongoose.connect(mongocfg.cnxStr);

const app = express();
app.use(express.json());

/* ------------- Passport ------------- */

app.use(
  session({
    secret: "Can You Keep My Secret?",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  "local-login",
  new LocalStrategy(async (username, password, done) => {
    try {
      const isOnDb = await User.findOne({ username });
      const validPassword = await bcrypt.compare(password, isOnDb.password);

      if (isOnDb.username === username && validPassword) {
        done(null, isOnDb);
      }
    } catch (err) {
      console.log("User / Password Not Found");
    }
  })
);

/* ------------- Serialize ------------- */
passport.serializeUser((user, done) => {
  done(null, user._id);
});
/* ------------- Deserialize ------------- */
passport.deserializeUser(async (_id, done) => {
  try {
    const isOnDb = await User.find({ _id });
    done(null, isOnDb);
  } catch (e) {
    console.log(e);
  }
});

/* ------------- Views ------------- */

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

/* ------------- Connect to Port ------------- */
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

/* ------------- Routes ------------- */

app.get("/register", (req, res) => {
  res.render("register", { pageTitle: "Register" });
});

app.post("/register", async (req, res) => {
  try {
    if (req.body.username === "" || req.body.password === "") {
      res.send("Missing username or password");
    }
    // Check if it exist
    const isOnDb = await User.findOne({
      username: req.body.username.toString(),
    });
    if (isOnDb) {
      res.send("The user already exists");
    } else {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
      await User.create({
        username: req.body.username,
        password: req.body.password,
      });
      res.send("You have been successfully registered");
    }
  } catch (err) {
    console.log("Couldn't create user", err);
  }
});

app.get("/login", (req, res) => {
  res.render("login", { pageTitle: "Register" });
});

app.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/index",
    failureRedirect: "/login",
  })
);

app.get("/index", (req, res) => {
  res.render("index", {
    pageTitle: "Home",
    username: req.user.pop().username,
  });
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

app.get("/info", (req, res) => {
  res.send(`<p>Project Location </p>
            ${process.cwd()}
           <p>Process ID </p> 
           ${process.pid}
           <p>Node Version</p> 
           ${process.version}
           <p>Operating System</p>
           ${process.platform}
           <p>Reserved Memory </p> 
           ${process.memoryUsage().rss}
           <p>Node Ejecutation Path
           ${process.execPath}
           <h3> Console</h3>`);
});

app.get("/api/randoms", (req, res) => {
  let number = 100000000;
  let data = fork(__dirname + "/utils/index");
  if (req.query.num) number = Number(req.query.num);
  data.send(number);
  data.on("message", (total) => {
    res.send(total);
  });
});
