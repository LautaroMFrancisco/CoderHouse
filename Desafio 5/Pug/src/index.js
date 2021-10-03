const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const app = express();

const addproductRoutes = require("./routes/addproduct");
const productsRoutes = require("./routes/product");
const path = require("path");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "views");

app.use("/products", addproductRoutes.router);
app.use("/products", productsRoutes.router);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
