const mongoose = require("mongoose");
const Product = require("../../src/schemes/productSchema");
const { v4: uuid4 } = require("uuid");
const db = require("../config/index");

const product = db.collection("products");

mongoose.connect(
  "mongodb+srv://coders:codersPassword@backend.ahjxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

class products {
  async createProduct(products, database) {
    if (database === "mongoDB") {
      await Product.create(products);
      return `Product successfully Created`;
    } else {
      let doc = product.doc(`${uuid4}`);
      await doc.create({
        name: products.name,
        description: products.description,
        thumbnail: products.thumbnail,
        price: products.price,
        stock: products.stock,
      });
      return `Product successfully created`;
    }
  }

  async getAllProduct(database) {
    if (database === "mongoDB") {
      return Product.find({});
    } else {
      const prod = (await product.get()).docs;
      return prod.map((prods) => {
        return {
          name: prods.data().name, //Look at prods as an object and find its name
          description: prods.data().description,
          thumbnail: prods.data().thumbnail,
          price: prods.data().price,
          stock: prods.data().stock,
        };
      });
    }
  }

  async updateProduct(products, id, database) {
    if (database === "mongoDB") {
      const data = await Product.findById(id);
      if (!data) {
        return `Product ${id} not found`;
      }
      Object.assign(product, data);
      await data.save();
      return `Product ${id} Successfully Updated`;
    } else {
      await product.doc(id).update(products);
      if (!product.doc(id)) `Product ${id} not found`;
      return `Product ${id} Successfully Updated`;
    }
  }

  async deleteProduct(id, database) {
    if (database === "mongoDB") {
      const productMongo = await Product.findById(id);
      if (!productMongo) {
        return `Product ${id} not found`;
      }
      await productMongo.remove();
      return `Product ${id} Deleted Successfully`;
    } else {
      const prodFire = await product.doc(id).delete();
      if (!prodFire) `Product ${id} not found`;
    }
  }
}

module.exports = products;
