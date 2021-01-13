// Construtor
// ----------

function Veiculo(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

// Retorna informação completa do veículo
// --------------------------------------

Veiculo.prototype.info = function () {
  return `
    Marca: ${this.marca}
    Modelo: ${this.modelo}
    Ano: ${this.ano}
  `;
};

// Instanciação dos objetos
// ------------------------

const minhaMoto = new Veiculo('Triumph', 'Tiger 800 XRXL', 2018);
const outraMoto = new Veiculo('BMW', 'R 1250 GS Adventure', 2020);

console.log(minhaMoto.info());
console.log(outraMoto.info());

// Construtor para Motos
// ---------------------

function Moto(marca, modelo, ano, abs) {
  Veiculo.call(this, marca, modelo, ano);
   this.abs = abs;
}

// Herança dos métodos do protótipo Veiculo
// ----------------------------------------

Moto.prototype = Object.create(Veiculo.prototype);

// Forçar Moto.prototype retornar Moto()
// -------------------------------------

Moto.prototype.constructor = Moto;

// Instanciação de uma moto
// ------------------------

const moto1 = new Moto('BMW', 'R 1200 GS', '2016', 'sim');

console.log(moto1);

// Retorna informações para Moto
// -----------------------------

Moto.prototype.info = function() {
  return `
    Marca: ${this.marca}
    Modelo: ${this.modelo}
    Ano: ${this.ano}
    ABS: ${this.abs}
  `
}

console.log(moto1.info());