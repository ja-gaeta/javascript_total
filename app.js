// Javascript Total - aula 26
// ==========================

// Acessando campos de entrada e o método preventDefault
// -----------------------------------------------------

// const form = document.querySelector("form");
// const tarefaInput = document.getElementById("tarefaInput");

// form.addEventListener("submit", executaEvento);

// Manipulador de eventos
// ----------------------
// function executaEvento(e) {
//   console.log(`Tipo do Evento: ${e.type}`);
//   console.log(tarefaInput.value);
//   tarefaInput.value = "";

//   e.preventDefault();
// }

// **************************************************************

// PROPAGAÇÃO DE EVENTOS
// Bubbling (borbulhamento)
// ------------------------

// document.querySelector(".check-item").addEventListener("click", function (e) {
//   console.log("check-item");
//   e.stopPropagation();
// });

// document.querySelector(".item-lista").addEventListener("click", function () {
//   console.log("item-lista");
// });

// document.querySelector(".lista").addEventListener("click", function () {
//   console.log("lista");
// });

// Delegation (delegação)
// ----------------------

// const marcaTarefa = document.querySelector(".check-item");
const marcaTarefa = document.querySelector(".lista");

marcaTarefa.addEventListener("click", riscaItem);

function riscaItem(e) {
  if (e.target.parentElement.classList.contains("check-item")) {
    console.log("item riscado do mapa");
    e.target.parentElement.parentElement.classList.toggle("done");
  }
}
