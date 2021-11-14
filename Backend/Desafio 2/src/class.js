const fs = require("fs");

module.exports = class Container {
  constructor(products) {
    this.products = products;
  }

  save(Producto) {
    fs.readFile("./productos.txt", "utf-8", (err, data) => {
      if (err)
        throw "There was a Problem while trying to read the file. Try Again Later";
      else {
        const obj = JSON.parse(data);
        let ID = 0;
        if (obj !== undefined) {
          obj.forEach((item) => {
            if (item.id >= ID) {
              ID = item.id;
            }
          });
          ID++;
        }
        Producto.id = ID;
        obj.push(Producto);
        fs.writeFile("./productos.txt", JSON.stringify(obj, null, 2), (err) => {
          if (err)
            throw "There was a Problem while trying to write the file. Try Again Later";
          else {
            console.log(`Se Agrego el Producto con el id: ${ID}`);
          }
        });
      }
    });
  }

  getById(id) {
    fs.readFile("./productos.txt", "utf-8", (err, data) => {
      if (err)
        throw "There was a Problem while trying to read the file. Try Again Later";
      else {
        const obj = JSON.parse(data);
        const producto = obj.filter((productID) => productID.id === id);
        console.log(producto);
      }
    });
  }

  getAll() {
    fs.readFile("./productos.txt", "utf-8", (err, data) => {
      if (err)
        throw "There was a Problem while trying to read the file. Try Again Later";
      else {
        const obj = JSON.parse(data);
        console.log(obj);
      }
    });
  }

  deleteById(id) {
    fs.readFile("./productos.txt", "utf-8", (err, data) => {
      if (err)
        throw "There was a Problem while trying to Read the file. Try Again Later";
      else {
        const obj = JSON.parse(data);
        const producto = obj.filter((productID) => productID.id !== id);
        const productoFiltrado = obj.filter((productID) => productID.id === id);
        fs.writeFile(
          "./productos.txt",
          JSON.stringify(producto, null, 2),
          (err) => {
            if (err)
              throw "There was a Problem while trying to write the file. Try Again Later";
            else {
              fs.readFile("./productos.txt", "utf-8", (err) => {
                if (err)
                  throw "There was a Problem while trying to write the file. Try Again Later";
                else {
                  console.log(
                    `Se Borro el Producto \n${JSON.stringify(
                      productoFiltrado,
                      null,
                      2
                    )}`
                  );
                }
              });
            }
          }
        );
      }
    });
  }

  deleteAll() {
    fs.unlink("./productos.txt", (err) => {
      if (err)
        throw "There was a Problem while trying to Delete the file. Try Again Later";
      else {
        fs.writeFile("./productos.txt", "[]", "utf-8", (err) => {
          if (err)
            throw "There was a Problem while trying to write the file. Try Again Later";
          else {
            console.log("Your File Was Deleted");
          }
        });
      }
    });
  }
};
