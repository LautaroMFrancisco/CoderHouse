const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const mongodb = {
  cnxStr: process.env.CONNECTION,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    serverSelectionTimeoutMS: 5000,
  },
  _id: {},
};

module.exports = mongodb;
