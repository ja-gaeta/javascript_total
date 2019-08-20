// DECLARAÇÃO "FOR"

// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }

// DECLARAÇÃO "WHILE"

// i = 11;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 10)

// CONTINUE & BREAK

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }

//   if (i === 7) {
//     break;
//   }
//   console.log(i);
// }

// FOR IN...

// const moto = {
//   fabricante: 'Honda',
//   modelo: 'SH-150i'
// }

// for (let i in moto) {
//   // console.log(i);
//   // console.log(moto[i]);
//   console.log(`${i}: ${moto[i]}`);
// }

// FOR OF...

const umArray = ['Honda', 'Yamaha', 'Triumph'];

for (let i of umArray) {
  console.log(i);
}