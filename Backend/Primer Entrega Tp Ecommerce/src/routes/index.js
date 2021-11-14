const express = require("express");
const productsRoute = require("./products");
const cartRoute = require("./cart");

const router = express.Router();

router.use("/products", productsRoute);
router.use("/cart", cartRoute);

module.exports = router;
