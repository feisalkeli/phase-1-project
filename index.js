function fetchProducts() {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => data.forEach((product) => appendData(product)));
}

function appendData(products) {
  let card = document.createElement("div");
  card.className = "data";
  card.innerHTML = `
 
  <div class="card" style="width: 18rem;" id="content">
  <img src=${products.thumbnail} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products.title}</h5>
    <p class="card-text">${products.description}</p>
    <button id="info-button" class="btn btn-primary">Display Info</button>
     <button id="remove-item" class="btn btn-primary"> Remove Item</button>

  </div>
</div>

  `;
  ///Selecting the remove-item button info button
  card.querySelector("#remove-item").addEventListener("click", (e) => {
    card.innerHTML = "";
    deleteCards(products.id);
  });
  // Selecting and showing the details of a card
  card.querySelector("#info-button").addEventListener("click", (e) => {
    console.log(e);
  });

  //Add products card to the DOM
  document.querySelector("#main").append(card);
}
///Delete data in the Dom and also json
function deleteCards(id) {
  fetch(`http://localhost:3000/products/${id}`, {
    method: `DELETE`,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function initializeData() {
  window.addEventListener("DOMContentLoaded", fetchProducts);
}
initializeData();
