const express = require("express");
const router = express.Router();
const Product = require("../containers/products");

const database = "mongoDB"; //Change to swap between databases

router.post("/", async (req, res) => {
  const product = new Product();
  const data = await product.createProduct(req.body, database);
  res.send(data);
});

router.get("/", async (req, res) => {
  const product = new Product();
  const data = await product.getAllProduct(database);
  res.json(data);
});

router.put("/:id", async (req, res) => {
  const product = new Product();
  const data = await product.updateProduct(req.params.id, req.body, database);
  res.send(data);
});

router.delete("/:id", async (req, res) => {
  const product = new Product();
  const data = await product.deleteProduct(req.params.id, database);
  res.send(data);
});

module.exports = router;
