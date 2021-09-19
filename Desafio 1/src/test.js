const Container = require("./class");

const producto = new Container("productos");

const Producto1 = {
  title: "Shigatsu Wa Kimi no Uso",
  price: 999,
  thumbnail: "https://i.imgur.com/FAnuUjz.png",
  id: "",
};
const Producto2 = {
  title: "Kaicho wa Maid Sama",
  price: 2000,
  thumbnail: "https://i.imgur.com/B4tO58N.png",
  id: "",
};

// Todos las métodos funcionando

/*
producto.save(Producto1);
producto.getById(4);
producto.getAll();
producto.deleteById(1);
producto.deleteAll();
*/
