const express = require("express");
const router = express.Router();
const Cart = require("../containers/cart");

const database = "mongoDB"; //Change to swap between databases

router.post("/", async (req, res) => {
  const cart = new Cart();
  const data = await cart.createCart(database);
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  const cart = new Cart();
  const data = await cart.deleteCart(req.params.id, database);
  res.send(data);
});

router.get("/:id/products", async (req, res) => {
  const cart = new Cart();
  const data = await cart.cartByID(req.params.id, database);
  res.send(data);
});

router.post("/:id/products", async (req, res) => {
  const cart = new Cart();
  const data = await cart.cartAddProduct(req.params.id, req.body, database);
  res.send(data);
});

module.exports = router;
