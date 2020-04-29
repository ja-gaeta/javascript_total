// Javascript Total - aula 22

// Criação de Elementos
const li = document.createElement("li");

// Adição de classe ao elemento
li.className = "item-lista";

// Adição de id ao elemento
li.id = "novo-item";

// Adição de atributo ao elemento
li.setAttribute("title", "Novo Item");

// Criação de um nó de texto
const texto = document.createTextNode("Passear com o cachorro");

// Adição do nó de texto ao elemento li
li.appendChild(texto);

// Criação de um elemento âncora
const link = document.createElement("a");

// Adição de classe ao elemento link
link.className = "check-item";

// Adição da propriedade href ao link
link.href = "#";

// Adição do html para o ícone
link.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i>";

// Adição do elemento link ao elemento li
li.appendChild(link);

// Adição do nó li ao nó ul
document.querySelector("ul.lista").appendChild(li);

console.log(li);
