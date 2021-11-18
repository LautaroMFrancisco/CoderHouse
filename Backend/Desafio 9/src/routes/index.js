const express = require("express");
const productsRoute = require("../routes/product");
const chatRoute = require("../routes/chat");
const normalizrRoute = require("../routes/normalizr");

const router = express.Router();

router.use("/", productsRoute);
router.use("/", chatRoute);
router.use("/", normalizrRoute);

module.exports = router;
