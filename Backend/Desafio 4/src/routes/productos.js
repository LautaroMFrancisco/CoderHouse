const express = require("express");
const { Router } = express;
const router = new Router();

const arr = [
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

router.get("/", (req, res) => {
  res.type("json").send(JSON.stringify(arr, null, 2) + "\n");
});

router.get("/:id", (req, res) => {
  const producto = arr.filter(
    (productID) => productID.id === parseInt(req.params.id)
  );
  if (Object.keys(producto).length === 0) {
    res.send({ error: "Producto No Encontrado" });
  }
  res.type("json").send(JSON.stringify(producto, null, 2) + "\n");
});

router.post("/", (req, res) => {
  let ID = 0;
  if (arr !== undefined) {
    arr.forEach((item) => {
      if (item.id >= ID) {
        ID = item.id;
      }
    });
    ID++;
  }
  const obj = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
    id: ID,
  };
  arr.push(obj);
  res.send(`El Producto Fue Agregado Correctamente con el ID: ${ID}`);
});

router.put("/:id", (req, res) => {
  const producto = arr.findIndex(
    (element) => element.id === parseInt(req.params.id)
  );
  arr[producto].title = req.body.title;
  arr[producto].price = req.body.price;
  arr[producto].thumbnail = req.body.thumbnail;
  res.send(`El Producto Con ID ${req.params.id} Fue Actualizado Correctamente`);
});

router.delete("/:id", (req, res) => {
  const index = arr.findIndex(
    (element) => element.id === parseInt(req.params.id)
  );
  arr.splice(index, 1);
  res.send(`El Producto de ID: ${req.params.id} Fue Borrado Exitosamente`);
});

module.exports = router;
