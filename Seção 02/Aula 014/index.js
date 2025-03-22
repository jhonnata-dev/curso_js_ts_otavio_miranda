// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não pode modificar o valor de uma constante
// A constante precisa ser criada e inicializada

// Declarando uma constante
const nome = 'João';
console.log(nome);

// Uma constante não pode ter se valor modificado
const nome = 'jhonnata';
nome       = 'dev'; // gera um erro

// É possivel pegar o valor de uma variável ou uma constante
// e atribuir a outra variável ou outra constante
const primeiroNumero = 5;
const segundoNumero  = 10;

const resultado = primeiroNumero * segundoNumero; // 50

const reultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado); // 100

let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado); // 150

resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado); // 155

// String = Text | Number = Número
const primeiroNumero = '5';
const segundoNumero  = 10;

console.log(typeof(primeiroNumero)); // string
console.log(typeof(segundoNumero)); // number

console.log(primeiroNumero + segundoNumero) // 510