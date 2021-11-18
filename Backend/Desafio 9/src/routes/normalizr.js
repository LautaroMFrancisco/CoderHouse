const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/normalizr", (req, res) => {
  res.sendFile(path.join(__dirname, "../utils/normalized.txt"));
});

module.exports = router;
