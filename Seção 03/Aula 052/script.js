/* FOR CLÁSSICO - ESTRUTURA DE REPETIÇÃO */

/* 
//número inicial; condição; incrementador
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

console.log('------------------------------')

for (let ii = -100; ii <= 100; ii += 10) {
    console.log(`Linha ${ii}`);
}

console.log('------------------------------')

// for invertido
for (let iii = 500; iii >= 400; iii -= 10) {
    console.log(`Linha ${iii}`);
}

// desscobrindo se o número é par ou impar
for (let iiii = 0; iiii <= 10; iiii += 1) {
    const par = iiii % 2 === 0 ? 'par' : 'impar';
    console.log(iiii, par)
} */


// PERCORRENDO UM ARRAY
const frutas = ['Maçã', 'Pêra', 'Uva', 'Abacaxi', 'Melancia', 'Manga'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i])
}