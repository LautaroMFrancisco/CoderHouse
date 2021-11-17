const { normalize, schema } = require("normalizr");
const util = require("util");

const print = (object) => {
  console.log(util.inspect(object, false, 12, true));
};

//Entity de Author que pone como id al mail
const authorSchema = new schema.Entity("author", {
  idAttribute: "mail",
});

// Entity de Mensajes basado en la id de author (mail)

const messageSchema = new schema.Entity("message", {
  message: authorSchema,
});

const chat = new schema.Entity("chat", {
  chat: messageSchema,
  author: [authorSchema],
});

const normalizeChat = (data) => {
  const jsonData = JSON.parse(data);
  return normalize(jsonData, chat);
};

module.exports = {
  normalizeChat,
  print,
};
