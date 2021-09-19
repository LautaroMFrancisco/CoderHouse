const fs = require("fs");
const { json } = require("express");

module.exports = class Container {
  constructor(products) {
    this.products = products;
  }

  getRandomProduct(req, res) {
    fs.readFile("./productos.txt", "utf-8", (err, data) => {
      if (err)
        throw "There was a Problem while trying to read the file. Try Again Later";
      else {
        const obj = JSON.parse(data);
        const random_index = Math.floor(Math.random() * obj.length + 1);
        const producto = obj.filter(
          (productID) => productID.id === random_index
        );
        res.type("json").send(JSON.stringify(producto, null, 2) + "\n");
      }
    });
  }

  getAll(req, res) {
    fs.readFile("./productos.txt", "utf-8", (err, data) => {
      if (err)
        throw "There was a Problem while trying to read the file. Try Again Later";
      else {
        res.type("json").send(JSON.stringify(JSON.parse(data), null, 2) + "\n");
      }
    });
  }
};
