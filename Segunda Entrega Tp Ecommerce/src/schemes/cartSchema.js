const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  timestamp: {
    type: Number,
    required: true,
  },
  products: {
    type: String,
    required: true,
  },
});

module.exports = model("Cart", cartSchema);
