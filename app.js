// Javascript Total - aula 23

// Remoção, Adição e Alternação da classe do elemento
// --------------------------------------------------

// const segundoLi = document.querySelector("li:nth-child(2)");
// console.log(segundoLi);
// segundoLi.classList.remove("done");
// segundoLi.classList.add("done");
// segundoLi.classList.toggle("done");
const elemento = document.querySelectorAll("li");
elemento[2].classList.toggle("done");

// Remoção de um elemento
// ----------------------

// const elemento = document.querySelectorAll("li");
// elemento[2].remove();
// elemento[1].remove();
