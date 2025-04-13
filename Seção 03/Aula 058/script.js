/* While e Do While - Estrutura de repetição */

// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// console.log('Segue a vida...');

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);

// WHILE - Checa a condição depois executa o código

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand);
}

console.log('######')

// DO WHILE - Executa o código depois checa a condição

do {
    rand = random(min, max)
    console.log(rand);
} while(rand !== 10);