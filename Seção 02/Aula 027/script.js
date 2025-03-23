let num1 = 9.54578;

// arredonda o valor para baixo
let num2 = Math.floor(num1); // 9
console.log(num2);

// arredonda o valor para cima
num2 = Math.ceil(num1); // 10
console.log(num2);

// arredonda para o valor mais próximo
num2 = Math.round(num1); // 10
console.log(num2);

// retorna o maior número
console.log(Math.max(1, 2, 3, 4, 5, -10, -50,
                     1500, 9, 8, 7, 6));   // 1500
                     
// retorna o menor número
console.log(Math.min(1, 2, 3, 4, 5, -10, -50,
                     1500, 9, 8, 7, 6));   // -50

// gera um número aleátorio entre 0 e 1
// (o 1 nunca é incluido)
console.log(Math.random());

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

// pega o valor de PI
console.log(Math.PI); // 3.141592653589793

// pegando a raiz quadrada de um número
let num4 = 9;
console.log(num4 ** (1/2)); // 3

// ou
console.log(num4 ** 0.5); // 3

// NÃO DIVIDA UM NÚMERO POR ZERO
console.log(100 / 0); // Infinity