const mongoose = require("mongoose");
const Cart = require("../../src/schemes/cartSchema");
const db = require("../config/index");
const { uuidV4 } = require("uuid");

mongoose.connect(
  "mongodb+srv://coders:codersPassword@backend.ahjxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const carts = db.collection("carts");

class cartClass {
  async createCart(database) {
    if (database === "mongoDB") {
      await Cart.create({ timestamp: +Date.now(), products: "" });
      return `Cart Successfully created`;
    } else {
      let doc = carts.doc(`${uuidV4()}`);
      await doc.create({
        timestamp: +Date.now(),
        products: "",
      });
      return `Cart Successfully created`;
    }
  }
  async deleteCart(id, database) {
    if (database === "mongoDB") {
      const cart = await Cart.findById(id);
      if (!cart) return `Cart Not Found`;
      await cart.update({ products: "" });
      await cart.save();
      return `Cart with ${id} Successfully Deleted`;
    } else {
      const cartFire = await carts.doc(id).update({ products: "" });
      if (!cartFire) `Cart Not Found`;
      return `Cart with ${id} Successfully Deleted`;
    }
  }

  async cartByID(id, database) {
    if (database === "mongoDB") {
      const cart = await Cart.findById(id);
      if (!cart) `Cart Not Found`;
      return cart.products;
    } else {
      const cartFire = carts.doc(id);
      const item = (await cartFire.get()).data();
      if (!item) `Cart Not Found`;
      return item.products;
    }
  }

  async cartAddProduct(id, product, database) {
    if (database === "mongoDB") {
      const cart = await Cart.findById(id);
      if (!cart) return `Cart Not Found`;
      await cart.update({ products: product.products });
      await cart.save();
      return `The Product with ${id} was added successfully`;
    } else {
      await carts.doc(id).update(product);
    }
  }
}

module.exports = cartClass;
