// PADRÃO DE NÚMEROS QUE O JAVASCRIPT USA: IEEE 745-2008

// Um pouco mais sobre numbers em JavaScript

let num1 = 10;  //number
let num2 = 2.5293431; //number

// transformando "num1" em string
// somente nessa operação
console.log(num1.toString() + num2); // 102.5

// a partir daqui "num1" é uma string
// num1 = num1.toString();

// pegando o valor binário de "num1"
console.log(num1.toString(2)); // 1010

// arredonda as casas decimais
console.log(num2.toFixed(2)); // 2.53

// verifica se é um número inteiro
console.log(Number.isInteger(num1)); // true


let temp = 20 * 'teste';

// Verifica se o valor é um NaN(Not a Number)
console.log(Number.isNaN(temp)); // true



// Resolvendo problema de imprecisão de números
let num3 = 0.7;
let num4 = 0.1;

num3 += num4;
console.log(num3); // Resultado: 0.7999999999999999

// pode ser usado o "Number" ou o "parseFloat"
num3 = Number(num3.toFixed(2));
console.log(num3.toFixed(2)); // 0.80