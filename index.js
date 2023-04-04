const main = document.querySelector("#main");

function fetchProducts() {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => data.forEach((product) => appendData(product)));
}

function appendData(products) {
  let card = document.createElement("div");
  card.className = "data";
  card.innerHTML = `
 
  <div class="card" style="width: 18rem;">
  <img src=${products.thumbnail} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products.title}</h5>
    <h5 class="card-title">${products.brand}</h5>
    <p class="card-text">${products.description}</p>
    <h5 class="card-title">${products.price}</h5>
    <a onClick="clickOnProduct(e)" class="btn btn-primary">Buy Product</a>
  </div>
</div>

  `;
  document.querySelector("#main").append(card);
}

function clickOnProduct(e) {
  main.classList.remove("hidden");
  let div = document.createElement("div");
  div.innerHTML = `
  <p>Hello</p>

  
  `;
  document.querySelector("#main").append();
}

function initializeData() {
  fetchProducts();
}
initializeData();
