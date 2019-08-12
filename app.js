// FUNÇÕES - FUNDAMENTOS

function digaOla(nome = 'José', sobrenome = 'Mané') {
  // console.log('Olá');
  // if (typeof nome === 'undefined') { nome = 'José' }
  // if (typeof sobrenome === 'undefined') { sobrenome = 'Mané' }
  return "Olá " + nome + " " + sobrenome;
}

// console.log(digaOla('João', 'Silva'));

// RETORNO DE EXPRESSÕES

function quadrado(numero) {
  return numero * numero;
}

// console.log(quadrado(8));


// MÉTODOS

const area = {
  quadrado: function (lado) {
    return (lado * lado);
  },
  circulo: function (raio) {
    return (3.1415 * this.quadrado(raio));
  }
}

console.log(area.circulo(1));