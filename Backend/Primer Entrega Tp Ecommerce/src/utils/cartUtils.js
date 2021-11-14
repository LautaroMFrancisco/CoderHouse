// noinspection JSValidateTypes
const fs = require("fs");

//Create The Cart and Gives The ID

const createCart = async (res) => {
  const cart = await fs.promises.readFile(__dirname + "/../cart.txt");
  const newCart = JSON.parse(cart);
  let ID = 0;
  if (newCart !== undefined) {
    newCart.forEach((item) => {
      if (item.id >= ID) {
        ID = item.id;
      }
    });
    ID++;
  }
  const obj = {
    id: ID,
    timestamp: new Date().toLocaleString(),
    products: [],
  };
  newCart.push(obj);
  await fs.promises.writeFile(
    __dirname + "/../cart.txt",
    JSON.stringify(newCart, null, 2) + "\n",
    null,
    2
  );
  res.send(`The Cart with ID ${ID} was successfully created`);
};

//Delete The cart by ID

const deleteCartByID = async (req, res) => {
  const getCart = await fs.promises.readFile(
    __dirname + "/../cart.txt",
    "utf-8"
  );
  const getCartsObj = JSON.parse(getCart);
  const index = getCartsObj.findIndex(
    (element) => element.id === parseInt(req.params.id)
  );
  if (index === -1) return res.send({ error: "Cart not found" });
  getCartsObj.splice(index, 1);
  await fs.promises.writeFile(
    __dirname + "/../cart.txt",
    JSON.stringify(getCartsObj, null, 2) + "\n",
    null,
    2
  );
  res.send(`The Cart with ID ${req.params.id} was deleted successfully.`);
};

//Get All Products From The Cart

const getAllProducts = async (req, res) => {
  const cartProds = await fs.promises.readFile(
    __dirname + "/../cart.txt",
    "utf-8"
  );
  const cartObj = JSON.parse(cartProds);
  const cart = cartObj.filter(
    (cartID) => cartID.id === parseInt(req.params.id)
  );
  if (Object.keys(cart).length === 0) res.send({ error: "Cart not found" });
  res.type("json").send(JSON.stringify(cart, null, 2) + "\n");
};

//Add A Product By Product ID

const addProdByID = async (req, res) => {
  const cartProds = await fs.promises.readFile(
    __dirname + "/../cart.txt",
    "utf-8"
  );
  const cartObj = JSON.parse(cartProds);

  const prodsArray = cartObj.find((item) => {
    return item.id === parseInt(req.params.id);
  });

  const prodFile = await fs.promises.readFile(
    __dirname + "/../products.txt",
    "utf-8"
  );

  const prodsObj = JSON.parse(prodFile);

  const prod = prodsObj.find((item) => {
    return item.id === parseInt(req.params.prods);
  });

  if (prod === undefined) return res.send({ error: "Product not found" });

  prodsArray.products.push(prod);

  await fs.promises.writeFile(
    __dirname + "/../cart.txt",
    JSON.stringify(cartObj, null, 2) + "\n",
    null,
    2
  );
  res.send(`The product with id ${req.params.prods} was added successfully`);
};

//Delete A Product By Product ID

const deleteProdByID = async (req, res) => {
  const cartProds = await fs.promises.readFile(
    __dirname + "/../cart.txt",
    "utf-8"
  );
  const cartObj = JSON.parse(cartProds);

  const prodsArray = cartObj.find((item) => {
    return item.id === parseInt(req.params.id);
  });

  if (prodsArray === undefined) return res.send({ error: "Product not found" });

  const index = prodsArray.products.findIndex(
    (element) => element.id === parseInt(req.params.prods)
  );

  if (index === -1) return res.send({ error: "Product not found" });

  prodsArray.products.splice(index, 1);
  await fs.promises.writeFile(
    __dirname + "/../cart.txt",
    JSON.stringify(cartObj, null, 2) + "\n",
    null,
    2
  );
  res.send(`The product with id ${req.params.prods} was deleted successfully`);
};

module.exports = {
  createCart,
  deleteCartByID,
  getAllProducts,
  addProdByID,
  deleteProdByID,
};
