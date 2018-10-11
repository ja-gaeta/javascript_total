// Uso de "Array.includes" para teste de critérios múltiplos

// function teste(fruta) {
//   if (fruta === "maçã" || fruta === "morango" || fruta === "amora") {
//     console.log("Vermelha");
//   } else {
//     console.log("Desconhecida");
//   }
// }

function teste(fruta) {
  const frutasVermelhas = ["maçã", "morango", "amora", "uva"];

  if (frutasVermelhas.includes(fruta)) {
    console.log("Vermelha");
  } else {
    console.log("Desconhecida");
  }
}

// teste("maçã");
// teste("morango");
// teste("pera");
// teste("amora");
// teste("uva");

// SWITCH...CASE
// =============

const cor = "azul";

// switch (cor) {
//   case "verde":
//     console.log("A cor é verde.");
//     break;
//   case "amarelo":
//     console.log("A cor é amarelo.");
//     break;
//   default:
//     console.log("A cor  não é nem verde, nem amarelo.");
// }

// Exemplo prático do uso de "switch"
// ----------------------------------

let dia;

switch (new Date().getDay()) {
  case 0:
    dia = "domingo";
    break;
  case 1:
    dia = "segunda-feira";
    break;
  case 2:
    dia = "terça-feira";
    break;
  case 3:
    dia = "quarta-feira";
    break;
  case 4:
    dia = "quinta-feira";
    break;
  case 5:
    dia = "sexta-feira";
    break;
  case 6:
    dia = "sábado";
    break;
}

console.log(`Hoje é ${dia}.`);
