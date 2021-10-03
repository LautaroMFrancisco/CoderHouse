const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const addproductRoutes = require("./routes/addproduct");
const productsRoutes = require("./routes/product");
const path = require("path");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.engine(
  "hbs",
  expressHbs({
    extname: "hbs",
    defaultLayout: "",
    layoutsDir: "",
  })
);

app.set("view engine", "hbs");

app.use("/products", addproductRoutes.router);
app.use("/products", productsRoutes.router);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
