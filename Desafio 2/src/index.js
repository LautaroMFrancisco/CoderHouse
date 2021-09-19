const express = require("express");
const PORT = 8080;
const app = express();
const path = require("path");
const Container = require("./productos.js");
const producto = new Container("productos");

const server = app.listen(PORT, () => {
  console.log(`Server listeningPORT ${PORT}`);
});

app.get("/productos", (req, res, next) => {
  producto.getAll(req, res);
});

app.get("/productoRandom", (req, res) => {
  producto.getRandomProduct(req, res);
});
