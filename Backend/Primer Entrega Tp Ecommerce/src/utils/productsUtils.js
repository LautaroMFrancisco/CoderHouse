const fs = require("fs");
const async = require("async");

//Get All Products
const getProds = async (req, res) => {
  const prods = await fs.promises.readFile(
    __dirname + "/../products.txt",
    "utf-8"
  );
  res.type("json").send(prods, null, 2);
};

//Add Products To The File
const addProds = async (req, res) => {
  const oldProds = await fs.promises.readFile(__dirname + "/../products.txt");
  const newProdsObject = JSON.parse(oldProds);
  let ID = 0;
  if (newProdsObject !== undefined) {
    newProdsObject.forEach((item) => {
      if (item.id >= ID) {
        ID = item.id;
      }
    });
    ID++;
  }
  const obj = {
    id: ID,
    timestamp: new Date().toLocaleString(),
    name: req.body.name,
    description: req.body.description,
    code: req.body.code,
    image: req.body.image,
    price: req.body.price,
    stock: req.body.stock,
  };
  newProdsObject.push(obj);
  await fs.promises.writeFile(
    __dirname + "/../products.txt",
    JSON.stringify(newProdsObject, null, 2) + "\n",
    null,
    2
  );
  res.send(`The product was added successfully with the following ID: ${ID}`);
};

//Get Products By Product ID
const getProdsID = async (req, res) => {
  const getProds = await fs.promises.readFile(
    __dirname + "/../products.txt",
    "utf-8"
  );
  const getProdsObj = JSON.parse(getProds);
  const prod = getProdsObj.filter(
    (productID) => productID.id === parseInt(req.params.id)
  );
  if (Object.keys(prod).length === 0) {
    res.send({ error: "Product ID not found" });
  }
  res.type("json").send(JSON.stringify(prod, null, 2) + "\n");
};

//Update Products By Product ID
const updateProductsByID = async (req, res) => {
  const getProds = await fs.promises.readFile(
    __dirname + "/../products.txt",
    "utf-8"
  );
  const getProdsObj = JSON.parse(getProds);
  const prod = getProdsObj.findIndex(
    (element) => element.id === parseInt(req.params.id)
  );
  getProdsObj[prod].name = req.body.name;
  getProdsObj[prod].description = req.body.description;
  getProdsObj[prod].code = req.body.code;
  getProdsObj[prod].image = req.body.image;
  getProdsObj[prod].price = req.body.price;
  getProdsObj[prod].stock = req.body.stock;
  await fs.promises.writeFile(
    __dirname + "/../products.txt",
    JSON.stringify(getProdsObj, null, 2) + "\n",
    null,
    2
  );
  res.send(`The product with ID: ${req.params.id} was successfully updated.`);
};

//Delete Products By Product ID
const deleteProductByID = async (req, res) => {
  const getProds = await fs.promises.readFile(
    __dirname + "/../products.txt",
    "utf-8"
  );
  const getProdsObj = JSON.parse(getProds);
  const index = getProdsObj.findIndex(
    (element) => element.id === parseInt(req.params.id)
  );
  getProdsObj.splice(index, 1);
  await fs.promises.writeFile(
    __dirname + "/../products.txt",
    JSON.stringify(getProdsObj, null, 2) + "\n",
    null,
    2
  );
  res.send(`The Product with ID ${req.params.id} has been deleted.`);
};

module.exports = {
  getProds,
  addProds,
  getProdsID,
  updateProductsByID,
  deleteProductByID,
};
