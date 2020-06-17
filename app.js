// Javascript Total - aula 27
// ==========================

// Exemplo da aula passada (aula 26)
// ---------------------------------

// const marcaTarefa = document.querySelector(".lista");

// marcaTarefa.addEventListener("click", riscaItem);

// function riscaItem(e) {
//   if (e.target.parentElement.classList.contains("check-item")) {
//     console.log("item riscado do mapa");
//     e.target.parentElement.parentElement.classList.toggle("done");
//   }
// }

// localStorage e sessionStorage
// -----------------------------

// localStorage.setItem("tarefa", "Passar no supermercado");
// sessionStorage.setItem("tarefa", "Pagar boleto");

// localStorage.clear();
// sessionStorage.clear();
// sessionStorage.removeItem("tarefa");

// localStorage.setItem("tarefa", "Comprar remédios na farmácia");

// console.log(localStorage.getItem("tarefa"));
// console.log(sessionStorage.getItem("tarefa"));

// Banco de Dados simples, usando o localStorage
// ---------------------------------------------

function setData(item, valor) {
  let databaseString = localStorage.getItem("tarefas-db");
  let databaseObject = databaseString ? JSON.parse(databaseString) : {};
  databaseObject[item] = valor;
  localStorage.setItem("tarefas-db", JSON.stringify(databaseObject));
  return valor;
}

function getData(item) {
  let databaseString = localStorage.getItem("tarefas-db");
  let databaseObject = databaseString
    ? JSON.parse(localStorage.getItem("tarefas-db"))
    : {};
  return databaseObject[item];
}

setData("appState", {
  tarefas: [
    { tarefa: "Passar no supermercado", feito: false },
    { tarefa: "Comprar remédios na farmácia", feito: true },
    { tarefa: "Pagar boletoo", feito: false },
  ],
});

console.log(getData("appState"));
