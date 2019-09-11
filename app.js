// Seletores de Elemento Único

// document.getElementById()

console.log(document.getElementById("titulo-tarefas"));

// Acessar partes do elemento

console.log(document.getElementById("titulo-tarefas").id);
console.log(document.getElementById("titulo-tarefas").className);

// Mudar o Estilo

document.getElementById("titulo-tarefas").style.background = "black";
document.getElementById("titulo-tarefas").style.color = "white";
document.getElementById("titulo-tarefas").style.padding = "10px";
// document.getElementById("titulo-tarefas").style.display = "none";

// Mudar o Conteúdo

document.getElementById("titulo-tarefas").textContent = "Relação de Tarefas";
document.getElementById("titulo-tarefas").innerText = "Minhas Tarefas";
document.getElementById("titulo-tarefas").innerHTML =
  '<span style="color: red">Tarefas</span>';
