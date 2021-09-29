const express = require("express");
const app = express();
const productosRoute = require("./routes/productos");

app.use(express.json());

app.use("/api/productos", productosRoute);

app.listen(8080, () => {
  console.log("Server Running on port 8080");
});
