// Introdução de Funções em JavaScript

// criando uma função
function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

// chamando a função e fazendo uma variável receber o valor
// que a função retorna
const variavel = saudacao('Luiz');
console.log(variavel);

console.log('');

// criando uma função, caso não seja enviado os valores para ambos
// os parâmetros da função, um valor padrão será atribuido
function soma(x=1, y=1) {
    const resultado = x + y;
    return resultado;
}

// chamando a função
console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(1));

console.log('');

// criando uma função anônima( uma função anônima é uma funcão
// que é guardada dentro de uma variável )
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

console.log('');

// criando uma arrow function
const raiz2 = (n) => n ** 0.5;

console.log(raiz2(30));
console.log(raiz2(40));
console.log(raiz2(50));