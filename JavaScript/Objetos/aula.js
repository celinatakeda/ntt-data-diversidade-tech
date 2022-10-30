/* Objetos */

const pessoa = {
  nome: 'Vitor J Guerra',
  idade: 25,

  descrever: function() {
    console.log(`Meu nome é ${this.nome} e minha idade é: ${this.idade}`);
  }
};
/*
vitor.altura = 1.69;

delete vitor.nome;

console.log(vitor);
*/

pessoa.descrever();

pessoa.nome = 'Renan';
pessoa.idade = 30;

pessoa.descrever();

pessoa.descrever = function() {
  console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();

const atributo = 'idade';
console.log(pessoa['atributo']);
console.log(pessoa['nome']);

/* Classes */
/*
class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é: ${this.idade}`);
  }
};
*/
/*
const vitor = new Pessoa();
vitor.nome = 'Vitor';
vitor.idade = 25;

const renan = new Pessoa();
vitor.nome = 'Renan';
vitor.idade = 30;


console.log(vitor);
console.log(renan);

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

vitor.descrever();
renan.descrever();

console.log(vitor);
*/
/* */
/*
function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

compararPessoas(vitor, renan);
*/
/* Praticando */
/*
1 - Crie uma classe para representar carros.
Os carros possuem  uma marca, uma cor e um gasto médio de combustível por kilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustivel nos de o valor gasto em reais para realizar este percurso.
 */

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;    
  }

  calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
  }  
}

const uno = new Carro('Fiat', 'Prata', 1/12);
console.log(uno);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));

/* exercicíco 2 */
/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso, e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
 */

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome,peso,altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura)
  }

  classificarImc() {
    const imc = this.calcularIMC();
    if(imc < 18.5) {
      return('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
      return('Peso normal');
    } else if (imc >= 25 && imc < 30) {
      return('Acima do peso');
    } else if (imc >= 30 && imc < 40) {
      return('Obeso');
    } else {
     return('Obesidade Grave');
    }
  }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose);
console.log('IMC = ' + jose.calcularIMC().toFixed(2));
console.log(jose.classificarImc());
