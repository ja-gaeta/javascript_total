// document.getElementsByClassName()

// const itens = document.getElementsByClassName("item-lista");
// console.log(itens);
// console.log(itens[2]);
// itens[0].style.color = "red";
// itens[2].textContent = "Ir ao banco";

// const listaItens = document
//   .querySelector("ul")
//   .getElementsByClassName("item-lista");
// console.log(listaItens);

// document.getElementsByTagName()

let liTags = document.getElementsByTagName("li");
// console.log(liTags);
// console.log(liTags[2]);
// liTags[0].style.color = "red";
// liTags[2].textContent = "Ir ao banco";

// Conversão de HTML Collection em Array

// liTags = Array.from(liTags);
// liTags.reverse();
// console.log(liTags);

// liTags.forEach(function(liTags, index) {
//   console.log(liTags.className);
//   liTags.textContent = `Item: ${index}`;
// });

// document.querySelectorAll

// const itens = document.querySelectorAll("ul.lista li.item-lista");
// console.log(itens);

// Não precisa converter, pois é uma NODE LIST
// itens.forEach(function(item, index) {
//   item.textContent = `Novo Item: ${index}`;
// });

// Formatando linhas de uma lista, tabela, etc...

const liImpar = document.querySelectorAll("li:nth-child(odd)");
const liPar = document.querySelectorAll("li:nth-child(even)");

liImpar.forEach(function(li, index) {
  li.style.background = "#556";
});

liPar.forEach(function(li, index) {
  li.style.background = "#fff";
  li.style.color = "#000";
});
