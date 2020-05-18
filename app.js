// Javascript Total - aula 24

// Eventos - addEventListener
// --------------------------

// document.getElementById("limparBtn").addEventListener("click", function () {
//   console.log("Salve galera!");
// });

document.getElementById("limparBtn").addEventListener("click", onClick);

function onClick(e) {
  e.target.classList.value = "text-uppercase btn btn-primary btn-sm btn-block";
  console.log(e.target.classList[2]);
}
