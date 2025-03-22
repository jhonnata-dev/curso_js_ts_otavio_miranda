/*

Operadores aritméticos

    Precedencia dos operaores:
        ()
        ** Potenciação
        *  Multiplicação

        /  Divisão
        %  Resto da divisão
        
        +  Adição / Concatenação 
        -  Subtração

*/

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 ** num2);
console.log((num1 + num2) * num3);

// =================================
console.log('=================================');

//Operador de incremento
let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5

++contador // 6

console.log('Inc1', contador++); // 6

console.log('Inc2', ++contador); // 8

//Operador de decremento
contador--; // 7
contador--; // 6

--contador; // 5

console.log('Dec', contador); // 5

// =================================
console.log('=================================');

// Outra maneira de fazer incremento (É POSSIVEL FAZER ISSO COM QUALQUER OPERADOR))
const passo = 2;
let contador1 = 0;

contador1 += passo;
console.log(contador1); // 2

contador1 *= passo;
console.log(contador1); // 4

contador1 **= passo;
console.log(contador1); // 16

contador1 /= passo;
console.log(contador1); // 8

// =================================
console.log('=================================');

// NaN = Not a Number
const num4 = 10;
const num5 = 'Luiz';
console.log(num4 * num5); // Vai gerar um erro NaN

// =================================
console.log('=================================');

// Convertendo string em número
const num6 = 10;
const num7 = parseInt('5'); // converte em inteiro
const num8 = parseFloat('5.2'); // converte em flutuante
console.log(num6 + num7); // 15
console.log(num6 + num8); // 15.2
console.log(typeof num6); // number
console.log(typeof num8); // number

// com o uso do "Number" o próprio JavaScript descobre o tipo do número
const num9 = Number('5.2');
const num10 = Number('5');

console.log(num9 + num10);

const num11 = Number('Jhon');
console.log(num11); // Gera erro NaN