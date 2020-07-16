// O construtor de objetos --> constructor
// =======================================

function Moto(marca, modelo, ano) {
  // this.marca = "Triumph";
  // this.modelo = "Tiger 800 XRX";
  // this.ano = 2018;
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;

  let encapsulado = true;
  this.moto = function () {
    if (encapsulado) {
      return this.marca + " " + this.modelo + " " + this.ano;
    } else {
      return this.modelo;
    }
  };
}

// console.log(this);

// const minhaMoto = new Moto();
// console.log(minhaMoto.modelo);
// minhaMoto.modelo = "Tiger 800 XRXL";
// console.log(minhaMoto.modelo);

// const outraMoto = new Moto();
// console.log(outraMoto.modelo);

const minhaMoto = new Moto("Triumph", "Tiger 800 XRXL", 2018);
console.log(minhaMoto.modelo);
console.log(minhaMoto.encapsulado);
console.log(minhaMoto.moto());

const outraMoto = new Moto("BMW", "R 1250 GS Adventure", 2020);
console.log(outraMoto.modelo);
console.log(outraMoto.moto());
