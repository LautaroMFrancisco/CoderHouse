const socket = io();

socket.on("products_back", (dataProds) => {
  renderProds(dataProds);
  console.log(renderProds);
});

const renderProds = (dataProds) => {
  document.querySelector("#prods").innerHTML = dataProds
    .map((x) => {
      return `
        <article class="card product-item" >
           <header class="card__header">
               <h1 class="product-item">${x.title}</h1>
           </header>
           <div class="card__image">
               <img src= "${x.thumbnail}" alt="Product">
           </div>
           <div class="card__content">
               <h2 class="product__price">${x.price}</h2>
           </div>
        </article>
        `;
    })
    .join(" ");
};
