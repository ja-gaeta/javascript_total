// Javascript Total - aula 25

// Último exemplo da aula 24 - versão melhorada

// document.getElementById("limparBtn").addEventListener("click", onClick);

// function onClick(e) {
//   const classes = e.target.classList;
//   classes.replace("btn-danger", "btn-primary");
//   console.log(classes);
// }

// Eventos da Interface "MouseEvent"

const limparBtn = document.getElementById("limparBtn");

// mousedown
// limparBtn.addEventListener("mousedown", executaEvento);

// mouseup
// limparBtn.addEventListener("mouseup", executaEvento);

// mouseenter
// limparBtn.addEventListener("mouseenter", executaEvento);

// mouseleave
// limparBtn.addEventListener("mouseleave", executaEvento);

const tarefaInput = document.getElementById("tarefaInput");

// select
tarefaInput.addEventListener("select", executaEvento);

// Manipulador de Eventos
function executaEvento(e) {
  console.log(`Tipo do Evento: ${e.type}`);
}
