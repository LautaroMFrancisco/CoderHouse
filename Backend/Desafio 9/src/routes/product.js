const express = require("express");
const { Router } = express;
const router = new Router();
const productFaker = require("../utils/faker");

router.get("/product-test", (req, res) => {
  (async () => {
    try {
      await productFaker();
    } catch (e) {
      console.error(e);
    }
  })();
  res.render("product", { pageTitle: "Product Test" });
});
module.exports = router;
