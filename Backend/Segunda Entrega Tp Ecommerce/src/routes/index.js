const express = require("express");
const productsRoute = require("../routes/productsRoute");
const cartRoute = require("../routes/cartRoute");

const router = express.Router();

router.use("/products", productsRoute);
router.use("/cart", cartRoute);

module.exports = router;
