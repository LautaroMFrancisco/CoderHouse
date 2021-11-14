// noinspection JSValidateTypes

const express = require("express");
const { Router } = express;
const router = new Router();

const {
  createCart,
  deleteCartByID,
  getAllProducts,
  addProdByID,
  deleteProdByID,
} = require("../utils/cartUtils");

router.post("/", (req, res) => {
  (async () => {
    try {
      await createCart(res);
    } catch (e) {
      console.error(e);
    }
  })();
});

router.delete("/:id", (req, res) => {
  (async () => {
    try {
      await deleteCartByID(req, res);
    } catch (e) {
      console.error(e);
    }
  })();
});

router.get("/:id/products", (req, res) => {
  (async () => {
    try {
      await getAllProducts(req, res);
    } catch (e) {
      console.error(e);
    }
  })();
});

router.post("/:id/products/:prods", (req, res) => {
  (async () => {
    try {
      await addProdByID(req, res);
    } catch (e) {
      console.error(e);
    }
  })();
});

router.delete("/:id/products/:prods", (req, res) => {
  (async () => {
    try {
      await deleteProdByID(req, res);
    } catch (e) {
      console.error(e);
    }
  })();
});

module.exports = router;
