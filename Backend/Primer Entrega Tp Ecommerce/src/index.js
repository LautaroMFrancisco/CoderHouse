const express = require("express");
const app = express();
const routes = require("./routes/index");

app.use(express.json());

// Port
const port = process.env.PORT || 8080;

// Start Server
app.listen(port, () => {
  console.log("Server Running on port 8080");
});

// Routes
app.use("/api", routes);
