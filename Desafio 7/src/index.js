const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
const { Server } = require("socket.io");
const io = new Server(server);
// const knex = require("./src/db"); // KNEX MYSQL
// const knex = require("./src/knex"); // KNEX SQL LITE 3

const arr = [
  {
    title: "Kings avatar",
    price: 199,
    thumbnail: "https://wall.alphacoders.com/big.php?i=846978&lang=Spanish",
    id: 2,
  },
  {
    title: "Sword Art Online",
    price: 400,
    thumbnail: "https://wall.alphacoders.com/big.php?i=753494&lang=Spanish",
    id: 1,
  },
  {
    title: "Tsuki ga Michibiku Isekai Douchuu",
    price: 700,
    thumbnail: "https://i.imgur.com/OA0TMDk.png",
    id: 3,
  },
];

const msn = [];

app.use(express.static(__dirname + "../public"));

server.listen(8080, () => {
  console.log(`Server is running on port: ${PORT}`);
});

app.use(express.json());

io.on("connection", (socket) => {
  console.log("User has joined successfully.");

  socket.emit("msg_back", msn);

  socket.emit("data_ready", arr);

  socket.on("data_client", (data) => {
    msn.push(data);
    io.sockets.emit("msg_back", msn);
    /*   knex
       .from("logs")
       .select("*")
       .del()
       .then(() => {
         console.log("updated");
       })
       .catch((err) => {
         console.log(err);
       });

     knex("logs")
       .insert(msn)
       .then(() => {
         console.log("Msn from chat added successfully!").catch((err) => {
           console.log(err);
         });
       }); */
  });

  socket.on("data_array", (data) => {
    arr.push(data);
    /*   knex
       .from("prods")
       .select("*")
       .del()
       .then(() => {
         console.log("updated");
       })
       .catch((err) => {
         console.log(err);
       });
     arr.map((item) => {
     knex("prods")
       .insert(arr)
       .then(() => {
         console.log("Products from table added successfully!").catch((err) => {
           console.log(err);
         });
       }); */

    io.sockets.emit("data_ready", arr);
  });
});
//Routes
app.get("/", (req, res) => {
  res.sendFile("index.html");
});
