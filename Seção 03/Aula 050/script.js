/* ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (ARRAYS) */

//               0  1  2  3  4  5  6  7  8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const um = numeros[0];
// console.log(um);

// ... -> rest pode ser usado no sentido de pegar o resto de alguma coisa
// ... -> spread pode ser usado no sentido de espalhar alguma coisa

// const [um, dois, tres, ...resto] = numeros;

// pulando valores
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, sete);

// Lista dentro de lista
//                     0          1          2
//                  0  1  2    0  1  2    0  1  2
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(numeros2[1][2]);

const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]);