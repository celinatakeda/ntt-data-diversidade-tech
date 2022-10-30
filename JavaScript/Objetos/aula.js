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