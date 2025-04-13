/* FOR OF - ESTRUTURA DE REPETIÇÃO */

// For clássico - Geralmente usado com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

const nomes = ['Jhonnata', 'Miranda', 'Henrique'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('####');

for (i in nomes) {
    console.log(nomes[i]);
}

console.log('####');

for (let valor of nomes) {
    console.log(valor);
}

console.log('####');

nomes.forEach(function(elemento, indice, array) {
    console.log(elemento, indice, array);
});