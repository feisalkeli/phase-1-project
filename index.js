function fetchData() {
  fetch("http://localhost:3000/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
fetchData();
