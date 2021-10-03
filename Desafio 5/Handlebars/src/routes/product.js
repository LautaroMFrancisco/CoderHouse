const express = require("express");
const productData = require("./addproduct");

const router = express.Router();

router.get("/", (req, res) => {
  const products = productData.products;
  res.render("products", {
    prods: products,
    pageTitle: "Productos",
    path: "/",
    hasProducts: products.length > 0,
  });
});

exports.router = router;
