// IF...ELSE

// MAIOR OU MENOR
// --------------

let n = 6;

// if (n < 5) {
//   console.log("MAIOR");
// } else {
//   console.log("MENOR");
// }

// MAIOR/IGUAL OU MENOR/IGUAL
// --------------------------

// if (n <= 6) {
//   console.log("MAIOR OU IGUAL");
// } else {
//   console.log("MENOR");
// }

// IF...ELSE IF...ELSE
// -------------------

// const sabor = "azedo";

// if (sabor === "doce") {
//   console.log("O sabor é doce");
// } else if (sabor === "amargo") {
//   console.log("O sabor é amargo");
// } else {
//   console.log("O sabor não é doce nem amargo");
// }

// OPERADORES LÓGICOS
// ------------------

const nome = "Manoel";
const idade = 12;

// AND (&&)
// --------

// if (idade > 0 && idade < 12) {
//   console.log(`${nome} é uma criança.`);
// } else if (idade >= 13 && idade < 19) {
//   console.log(`${nome} já é um adolescente.`);
// } else {
//   console.log(`${nome} está maduro.`);
// }

// OR (||)
// -------

// if ((idade < 18 && idade >= 16) || idade >= 70) {
//   console.log("VOTO FACULTATIVO");
// } else if (idade >= 18 && idade < 70) {
//   console.log("VOTO OBRIGATÓRIO");
// } else if (idade < 16) {
//   console.log("NÃO PODE VOTAR");
// }

// OPERADOR TERNÁRIO
// -----------------

n = 6;

console.log(n === 6 ? "ACERTOU" : "ERROU");

if (n === 6) {
  console.log("ACERTOU");
} else {
  console.log("ERROU");
}
