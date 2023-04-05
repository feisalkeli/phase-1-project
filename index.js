function fetchProducts() {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => data.forEach((product) => appendData(product)));
}

function appendData(products) {
  let card = document.createElement("div");
  card.className = "data  ";
  card.innerHTML = `
 <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  <div class="card hidden" style="width: 18rem;" id="content">
  <img src=${products.thumbnail} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products.title}</h5>
    <p class="card-text">${products.description}</p>
    <button id="info-button" class="btn btn-primary">Display Info</button>
     <button id="remove-item" class="btn btn-primary"> Remove Item</button>
</div>
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
    document.getElementById("displayinfo").innerHTML = ` 
  <div class="card-preview" style="width: 18rem;" id="content">
  <img src=${products.thumbnail} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products.title}</h5>
    <p class="card-text">${products.description}</p>
     <p id="stock"class="card-text"> In Stock ${products.stock}</p>

    <button id="edit-button" class="btn btn-primary">Edit</button>
     <button id="remove" class="btn btn-primary">Go back</button>
  </div>
</div>


    `;
    //Selecting the go back button
    document.querySelector("#remove").addEventListener("click", () => {
      //Removing the div from the Dom
      const div = document.querySelector(".card-preview");
      div.remove();
    });
    ///Selecting the edit button
    document.querySelector("#edit-button").addEventListener("click", () => {
      const stock = document.getElementById("stock");
      // Edit Stock Number
      stock.innerText = ` In Stock ${products.stock--}`;
      editCards(products);
    });
  });
  ///Form query Selectors

  const input = document.querySelector("#form-value");
  // const submitButton = document.querySelector("#submit-button");
  // console.log(submitButton);

  input.addEventListener("submit", submitData);

  //Add products card to the DOM
  document.querySelector("#main").append(card);
}

//Function Submit data
function submitData(e) {
  e.preventDefault();

  let data = {
    product: e.target.product.value,
    image: e.target.image_url.value,
    description: e.target.description.value,
  };
  addProduct(data);
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
///Edit Data

function editCards(product) {
  fetch(`http://localhost:3000/products/${product.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
//Function add Product or make POST
function addProduct(product) {
  fetch(`http://localhost:3000/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
function initializeData() {
  window.addEventListener("DOMContentLoaded", fetchProducts);
}
initializeData();
