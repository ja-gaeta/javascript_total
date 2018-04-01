// Variáveis em JavaScript

var primeiraVariavel = 1;

/* Tipos de Dados:

Null - Explicitamente definida como nenhum valor
Undefined - Indeterminado
Boolean - true ou false (verdadeiro ou falso)
String - Coleção imutável com zero ou mais caracteres Unicode
Number - Pode ser usado em operações matemáticas
Object - Coleção ordenada de pares contendo nome/valor
*/

// Números
var borboleta = 13;
var pi = 3.14;
var infinito = Infinity;
var nanNaniNana = NaN;

// console.log(borboleta);
// console.log(pi);
// console.log(infinito);
// console.log(nanNaniNana);

// console.log(typeof(borboleta));
// console.log(typeof(pi));
// console.log(typeof(infinito));
// console.log(typeof(nanNaniNana));

// Strings
var blaBlaBla = 'bla';
var vazia = '';
var numeroString = '1';
var aspasDuplas = "Aspas Duplas";

// console.log(blaBlaBla);
// console.log(vazia);
// console.log(numeroString);
// console.log(aspasDuplas);

// console.log(typeof(blaBlaBla));
// console.log(typeof(vazia));
// console.log(typeof(numeroString));
// console.log(typeof(aspasDuplas));

// Booleans

var verdadeiro = true;
var falso = false;

// console.log(verdadeiro);
// console.log(falso);
// console.log(typeof(verdadeiro));
// console.log(typeof(falso));

// Undefined

var declaradaUndefined = undefined;
var nascidaIndefinida;

// console.log(declaradaUndefined);
// console.log(nascidaIndefinida);
// console.log(typeof(declaradaUndefined));
// console.log(typeof(nascidaIndefinida));

// Objects
var umObjeto = { 
  nome: "Mesa",
  tamanho: 'grande'
};
var objetoVoador = { borboleta: 13 };
var hoje = new Date();

// console.log(umObjeto.tamanho);
// console.log(objetoVoador);
// console.log(hoje);
// console.log(typeof(umObjeto));
// console.log(typeof(objetoVoador));
// console.log(typeof(hoje));

var primeiraVariavel;
// console.log(primeiraVariavel);

// HOISTING

numero = 2;
var numero;

console.log(numero);

var x = y, y = 'A';
console.log(x + y);

var a = 0, b = 0;