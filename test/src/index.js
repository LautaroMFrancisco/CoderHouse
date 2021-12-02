const express = require("express");
const path = require("path");
const User = require("./schema/users");
const mongoose = require("mongoose");
const mongocfg = require("../src/db");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

mongoose.connect(mongocfg.cnxStr);

const app = express();
app.use(express.json());

/* ------------- Passport ------------- */

app.use(
  session({
    secret: "Secreto",
    resave: true,
    saveUninitialized: true,
  })
);

passport.use(
  "local-login",
  new LocalStrategy(async (username, password, done) => {
    try {
      const isOnDb = await User.findOne({ username });

      if (isOnDb.username === username && isOnDb.password === password) {
        done(null, isOnDb);
      }
    } catch (err) {
      console.log("Usuario No Registrado");
    }
  })
);

/* ------------- Serialize ------------- */
passport.serializeUser((user, done) => {
  done(null, user._id);
});
/* ------------- Deserialize ------------- */
passport.deserializeUser(async (id, done) => {
  const isOnDb = await User.find({ id });
  done(null, isOnDb);
});

app.use(passport.initialize());
app.use(passport.session());
/* ------------- Views ------------- */

app.use(bodyParser.urlencoded({ extended: false }));
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
    console.log(isOnDb);
    if (isOnDb) {
      res.send("The user already exists");
    } else {
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
    username: req.user.pop().username, //ACA MUESTRA EL ULTIMO USUARIO REGISTRADO ???
  });
  console.log(req.user.pop().username); // ACA RECIVE EL USUARIO CORRECTO
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});
