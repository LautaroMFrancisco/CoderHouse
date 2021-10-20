// noinspection JSValidateTypes

const express = require("express");
const { Router } = express;
const router = new Router();
const {
  getProds,
  addProds,
  getProdsID,
  updateProductsByID,
  deleteProductByID,
} = require("../utils/productsUtils");
const isAdmin = true;

// Get all Prods From the File
router.get("/", (req, res) => {
  (async () => {
    try {
      await getProds(req, res);
    } catch (e) {
      console.error(e);
    }
  })();
});

// Add Prods to the file
router.post("/", (req, res) => {
  if (isAdmin === true) {
    (async () => {
      try {
        await addProds(req, res);
      } catch (e) {
        console.error(e);
      }
    })();
  } else res.send(`{error: Need to be an admin to see this page.}`);
});

// Get Prods by Id
router.get("/:id", (req, res) => {
  (async () => {
    try {
      await getProdsID(req, res);
    } catch (e) {
      console.error(e);
    }
  })();
});

// Update Prods By Id
router.put("/:id", (req, res) => {
  (async () => {
    try {
      await updateProductsByID(req, res);
    } catch (e) {
      console.error(e);
    }
  })();
});

// Delete Prods By Id
router.delete("/:id", (req, res) => {
  (async () => {
    try {
      await deleteProductByID(req, res);
    } catch (e) {
      console.error(e);
    }
  })();
});

module.exports = router;
