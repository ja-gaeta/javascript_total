// Objetos - literais

const motoca = {
  marca: "Yamaha",
  modelo: "MT-07",
  ano: 2018,
  revendas: ["Yamais", "Indiana", "Feltrin"],
  motor: {
    tipo: "DOHC, 4 tempos, 8 válvulas, Refrigeração líquida",
    cilindros: 2,
    cilindrada: 689,
    potenciaMax: "74,8cv (9.000rpm)"
  },
  getPreco: function() {
    return "R$ 32.290,00";
  },
  getAno: function() {
    return this.ano;
  }
};

let obj;

obj = motoca;

// Acessar um valor específico
obj = motoca.marca;
obj = motoca["marca"];
obj = motoca.modelo;
obj = motoca.ano;
obj = motoca.revendas;
obj = motoca.motor;
obj = motoca.getPreco();
obj = motoca.getAno();

// console.log(obj);

const motocas = [
  { marca: "Yamaha", modelo: "MT-07" },
  { marca: "Honda", modelo: "CBR-1000RR" },
  { marca: "Harley-Davidson", modelo: "IRON-883" }
];

for (let i = 0; i < motocas.length; i++) {
  console.log(motocas[i].marca);
}
