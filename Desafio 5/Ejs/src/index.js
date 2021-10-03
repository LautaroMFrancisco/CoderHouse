const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const addprodsRoutes = require("./routes/addproduct");
const productsRoutes = require("./routes/product");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, "../public"))); 

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/products", addprodsRoutes.router);
app.use("/products", productsRoutes.router);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
