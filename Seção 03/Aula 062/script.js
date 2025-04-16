/*
    Escreva uma função que recebe um número e retorne o seguinte:
    Número é divisivel por 3 = Fizz
    Número é divisivel por 5 = Buzz
    Número é divisivel por 3 e 5 = FizzBuzz
    Número NÃO é divisivel por 3 e 5 = Retorna o próprio número
    Checar se o número é realmente um número = Retorna o próprio número
    Use a função com números de 0 a 100
*/

function verificaNumero (num) {
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
}

for (i = 0; i <= 100; i++) {
    console.log(i, verificaNumero(i));
}