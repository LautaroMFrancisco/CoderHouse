const express = require("express");
const app = express();
const routes = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", routes);

//Turn on Server
const PORT = 8080 || process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
server.on("error", (error) =>
  console.log(`Error while turning on server ${error}`)
);
