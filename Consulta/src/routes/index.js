const express = require("express");
const productsRoute = require("../routes/product");
const chatRoute = require("../routes/chat");

const router = express.Router();

router.use("/", productsRoute);
router.use("/", chatRoute);

module.exports = router;
