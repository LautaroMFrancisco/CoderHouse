const express = require("express");
const router = express.Router();

const products = [
  {
    title: "Kirigiri",
    price: 1000,
    thumbnail: "https://i.imgur.com/1WxF6Z5.png",
    id: 1,
  },
  {
    title: "May",
    price: 750,
    thumbnail: "https://i.imgur.com/GNBLOWc.png",
    id: 2,
  },
  {
    title: "Makise",
    price: 500,
    thumbnail: "https://i.imgur.com/FC47XaU.png",
    id: 3,
  },
];

router.get("/add-product", (req, res) => {
  res.render("add-product", {
    pageTitle: "Agregar Producto",
    path: "/productos/add-product",
  });
});

router.post("/add-product", (req, res) => {
  products.push({
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  });
  res.redirect("/products/");
});

exports.router = router;
exports.products = products;
