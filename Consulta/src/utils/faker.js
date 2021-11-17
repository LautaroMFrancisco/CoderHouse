const faker = require("faker");
const fs = require("fs");

const productFaker = async () => {
  let products = [];
  for (let i = 0; i < 5; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      thumbnail: faker.image.animals(),
    });
  }
  await fs.promises.writeFile(
    "../products.txt",
    JSON.stringify(products, null, 2)
  );
};

module.exports = productFaker;
