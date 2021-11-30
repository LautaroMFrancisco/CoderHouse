const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const path = require("path");
const mongoose = require("mongoose");
const User = require("../src/schema/user");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ------------- Views ------------- */

app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

/* ------------- Mongo DB ------------- */

mongoose.connect(
  "mongodb+srv://coders:codersPassword@backend.ahjxu.mongodb.net/test"
);

const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://coders:codersPassword@backend.ahjxu.mongodb.net/test",
      mongoOptions: advancedOptions,
    }),
    secret: "Can you Keep My Secret",
    cookie: {
      maxAge: 6000, // 1 Minute
    },
    resave: true,
    saveUninitialized: true,
  })
);

/* ------------- Connect to Port ------------- */
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

/* ------------- Routes ------------- */

app.post("/login", async (req, res) => {
  try {
    const toFind = req.body.username;
    const user = await User.find({ user: toFind }); //User Coder
    const nuevoName = JSON.stringify(user).split(",")[1].slice(8, 13);
    if (nuevoName !== "coder") {
      res.send("User not found");
      return;
    }
    res.redirect("/");
  } catch (err) {
    res.send("User not found");
  }
});

app.get("/login", (req, res) => {
  res.render("login", { pageTitle: "Login" });
});

app.get("/", (req, res) => {
  res.render("index", { pageTitle: "Welcome" });
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) res.send("Gracias Vuelva Pronto");
    else res.send({ status: "Logout ERROR", body: err });
  });
});


