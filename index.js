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
    <p class="card-text">${products.description}</p>
    <button  class="btn btn-primary">Add to Cart</button>
     <button  class="btn btn-primary"> Remove Item</button>
  </div>
</div>

  `;
  document.querySelector("#main").append(card);
}

function clickOnProduct() {}

function initializeData() {
  fetchProducts();
}
initializeData();
