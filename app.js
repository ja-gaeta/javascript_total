// Javascript Total - Lista de Tarefas
// ===================================

// Seletores
// ---------

const form = document.getElementById("tarefa-form");
const inputTarefa = document.getElementById("tarefaInput");
const listaTarefas = document.querySelector(".lista");
const limparBtn = document.getElementById("limparBtn");

// console.log(form);

// Event Listeners
// ---------------

loadEventListeners();

function loadEventListeners() {
  // Evento de adicionar tarefas
  form.addEventListener("submit", adicionarTarefa);
  // Carregar lista ao carregar o DOM
  document.addEventListener("DOMContentLoaded", carregarTarefas);
  // Evento de limpar lista de tarefas
  limparBtn.addEventListener("click", limparLista);
  // Evento de riscar ou retirar risco de tarefa
  listaTarefas.addEventListener("click", riscarTarefa);
}

// Adicionar tarefa
// ----------------

function adicionarTarefa(e) {
  if (inputTarefa.value === "") {
    alert("Adicione uma tarefa");
  }
  // Ativa botão para limpar tarefas
  if (limparBtn.hasAttribute("disabled")) {
    limparBtn.removeAttribute("disabled");
  }
  // Criação de um elemento li
  const li = document.createElement("li");
  li.className = "tarefa";
  // Criação do nó de texto e adição ao elemento li
  li.appendChild(document.createTextNode(inputTarefa.value));
  // Criação do elemento link (tag a) para o ícone
  const link = document.createElement("a");
  link.className = "check-tarefa";
  // Adição do html do ícone
  link.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i>";
  // Adição do link ao elemento li
  li.appendChild(link);
  // Adição do li ao elemento ul
  listaTarefas.appendChild(li);
  // Armazena no LocalStorage
  armazenaTarefa({ tarefa: inputTarefa.value, feito: false });
  // Limpa a caixa de input da entrada
  inputTarefa.value = "";

  e.preventDefault();
}

// Armazena tarefa
// ---------------

function armazenaTarefa(tarefa) {
  let tarefas;
  if (localStorage.getItem("tarefas") === null) {
    tarefas = [];
  } else {
    tarefas = JSON.parse(localStorage.getItem("tarefas"));
  }
  tarefas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Carregar tarefas do Local Storage
// ---------------------------------

function carregarTarefas() {
  let tarefas;
  if (localStorage.getItem("tarefas") === null) {
    tarefas = [];
  } else {
    tarefas = JSON.parse(localStorage.getItem("tarefas"));
  }

  tarefas.forEach(function (tarefa) {
    // Criação de um elemento li
    const li = document.createElement("li");
    li.className = "tarefa";
    // Criação do nó de texto e adição ao elemento li
    li.appendChild(document.createTextNode(tarefa.tarefa));
    if (tarefa.feito) {
      li.classList.add("done");
    }
    // Criação do elemento link (tag a) para o ícone
    const link = document.createElement("a");
    link.className = "check-tarefa";
    // Adição do html do ícone
    link.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i>";
    // Adição do link ao elemento li
    li.appendChild(link);
    // Adição do li ao elemento ul
    listaTarefas.appendChild(li);
  });
  // Ativa botão para limpar lista
  if (limparBtn.hasAttribute("disabled")) {
    limparBtn.removeAttribute("disabled");
  }
}

// Limpar lista de tarefas
// -----------------------

function limparLista() {
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
  let atributo = document.createAttribute("disabled");
  limparBtn.setAttributeNode(atributo);
  localStorage.clear();
}

// Riscar tarefa completada (ou retirar o risco)
// ---------------------------------------------

function riscarTarefa(e) {
  if (e.target.parentElement.classList.contains("check-tarefa")) {
    e.target.parentElement.parentElement.classList.toggle("done");
  }
  atualizaLocalStorage(e.target.parentElement.parentElement);
}

// Atualiza LocalStorage
// ---------------------

function atualizaLocalStorage(item) {
  let tarefas;
  if (localStorage.getItem("tarefas") === null) {
    tarefas = [];
  } else {
    tarefas = JSON.parse(localStorage.getItem("tarefas"));
  }

  tarefas.forEach(function (tarefa) {
    if (item.textContent === tarefa.tarefa) {
      item.classList.contains("done")
        ? (tarefa.feito = true)
        : (tarefa.feito = false);
    }
  });
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
