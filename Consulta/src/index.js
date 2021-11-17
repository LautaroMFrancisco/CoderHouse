const express = require("express");
const app = express();
const routes = require("./routes/index");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.urlencoded({ extended: false }));

//View Engine

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// HTTP Server

const http = require("http");
const server = http.createServer(app);

// Port

const port = process.env.PORT || 8080;

// Start Server

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Routes
app.use("/api", routes);

// Socket IO Server

const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  const arrayProds = fs.readFileSync(__dirname + "/products.txt", "utf-8");
  const prods = JSON.parse(arrayProds);
  socket.emit("products_back", prods);
});
