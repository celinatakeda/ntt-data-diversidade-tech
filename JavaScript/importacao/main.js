/* Importando */

/*const funcoes = require('./funcoes-auxiliares'); */
const {gets, print} = require('./funcoes-auxiliares');

//print(gets());

/*
console.log(funcoes);
console.log(funcoes.gets())
*/
/* destruction exemplo */
/*
const pessoa = {
  nome: 'vitor';
};

const {nome} = pessoa;
const nome = pessoa.nome;
*/

/* exercício */
/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um número de  1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98
 */

/*
const numerosSorteados = [];

for(let i = 0; i < 5; i++) {
  const numeroSorteado = gets();
  numerosSorteados.push(numeroSorteado)
}

let maiorValor = 0;

for(let i = 0; i < numerosSorteados.length; i++) {
  const numeroSorteado = numerosSorteados[i];
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}
*/

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for(let i = 0; i < quantidadeDeAlunos; i++) { 
  const numeroSorteado = gets();  
  if (numeroSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numeroSorteado;
  }
}

print( maiorValorEncontrado);