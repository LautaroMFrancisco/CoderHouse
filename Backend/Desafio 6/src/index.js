const express = require("express");
const app = express();
const chatRoute = require("./routes/chat");
const formRoute = require("./routes/form");
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

app.use("/", chatRoute);
app.use("/", formRoute);

// Socket IO Server

const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  const arrayMsg = fs.readFileSync(__dirname + "/message.txt", "utf-8");
  const msn = JSON.parse(arrayMsg);

  socket.emit("message_back", msn);

  socket.on("data_client", (data) => {
    async function writeFile() {
      const msgrecived = await fs.promises.readFile(__dirname + "/message.txt");
      const obj = JSON.parse(msgrecived);
      obj.push(data);
      await fs.promises.writeFile(
        __dirname + "/message.txt",
        JSON.stringify(obj, null, 2)
      );
      const newarrayMsg = await fs.promises.readFile(
        __dirname + "/message.txt"
      );
      const newmsn = JSON.parse(newarrayMsg);
      io.sockets.emit("message_back", newmsn);
    }

    (async () => {
      try {
        await writeFile();
      } catch (err) {
        console.error(err);
      }
    })();
  });

  const arrayProds = fs.readFileSync(__dirname + "/productos.txt", "utf-8");
  const prods = JSON.parse(arrayProds);

  socket.emit("products_back", prods);

  socket.on("data_prods", (dataprods) => {
    async function writeProds() {
      const prodsrecived = await fs.promises.readFile(
        __dirname + "/productos.txt"
      );
      const obj = JSON.parse(prodsrecived);
      obj.push(dataprods);
      await fs.promises.writeFile(
        __dirname + "/productos.txt",
        JSON.stringify(obj, null, 2)
      );
      const newarrayProds = await fs.promises.readFile(
        __dirname + "/productos.txt"
      );
      const newProds = JSON.parse(newarrayProds);
      io.sockets.emit("products_back", newProds);
    }

    (async () => {
      try {
        await writeProds();
      } catch (err) {
        console.error(err);
      }
    })();
  });
});
