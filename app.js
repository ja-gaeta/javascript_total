// Object.prototype
// ================

function Moto(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;

  // this.moto = function () {
  //   return this.marca + " " + this.modelo + " " + this.ano;
  // };
}

// Retorna info completa
Moto.prototype.moto = function () {
  return this.marca + " " + this.modelo + " " + this.ano;
};

// Retorna apenas o modelo
Moto.prototype.getModelo = function () {
  return this.modelo;
};

// Ajusta uma propriedade
Moto.prototype.setModelo = function (novoModelo) {
  this.modelo = novoModelo;
};

const minhaMoto = new Moto("Triumph", "Tiger 800 XRXL", 2018);
console.log(minhaMoto);
console.log(minhaMoto.moto());
console.log(minhaMoto.getModelo());
minhaMoto.setModelo("Bonneville T120");
console.log(minhaMoto.getModelo());
console.log(minhaMoto.hasOwnProperty("marca"));
console.log(minhaMoto.hasOwnProperty("valor"));
console.log(minhaMoto.hasOwnProperty("getModelo"));
