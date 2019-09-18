// Seletores de Elemento Único

// document.getElementById()

// console.log(document.getElementById("titulo-tarefas"));

// Acessar partes do elemento

// console.log(document.getElementById("titulo-tarefas").id);
// console.log(document.getElementById("titulo-tarefas").className);

// Mudar o Estilo
// const tituloTarefas = document.getElementById("titulo-tarefas");

// tituloTarefas.style.background = "black";
// tituloTarefas.style.color = "white";
// tituloTarefas.style.padding = "10px";
// tituloTarefas.style.display = "none";

// Mudar o Conteúdo

// tituloTarefas.textContent = "Relação de Tarefas";
// tituloTarefas.innerText = "Minhas Tarefas";
// tituloTarefas.innerHTML = '<span style="color: red">Tarefas</span>';

// document.querySelector

console.log(document.querySelector("#titulo-tarefas"));
console.log(document.querySelector(".limpar"));
console.log(document.querySelector("li"));

document.querySelector("li").style.color = "red";
document.querySelector("li:last-child").style.color = "green";
document.querySelector("li:nth-child(2)").style.textDecoration = "none";
document.querySelector("li:nth-child(odd)").style.background = "#ccc"; // primeiro impar encontrado
document.querySelector("li:nth-child(even)").style.background = "#bbb"; // primeiro par encontrado
