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
  //Socket for Products

  const arrayProds = fs.readFileSync(
    __dirname + "/utils/products.txt",
    "utf-8"
  );
  const prods = JSON.parse(arrayProds);
  socket.emit("products_back", prods);

  //Socket for Chat

  const arrayMsg = fs.readFileSync(__dirname + "/utils/messages.txt", "utf-8");
  const msn = JSON.parse(arrayMsg);

  socket.emit("messages_back", msn);

  socket.on("data_authors", (data) => {
    async function writeFile() {
      const msgReceived = await fs.promises.readFile(
        __dirname + "/utils/messages.txt"
      );
      const obj = JSON.parse(msgReceived);
      obj.push(data);
      await fs.promises.writeFile(
        __dirname + "/utils/messages.txt",
        JSON.stringify(obj, null, 2)
      );
      const newarrayMsg = await fs.promises.readFile(
        __dirname + "/utils/messages.txt"
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
});

const { normalizeChat, print } = require("./utils/normalizr.js");

const norm = async () => {
  const data = fs.readFileSync(__dirname + "/utils/messages.txt", "utf-8");
  const chat = normalizeChat(data);
  console.log(chat);
  print(chat);
  return chat;
};

(async () => {
  try {
    await norm();
  } catch (err) {
    console.error(err);
  }
})();
