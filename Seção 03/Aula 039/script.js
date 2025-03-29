// AVALIAÇÃO DE CURTO CIRCUITO

/*

&& -> false && truue -> false "O valor mesmo"
|| -> true || false  -> vai retornar "O valor verdadeiro"

===========================================================

Qualquer coisa diferente dos exemplos abaixo avalia em true:

FALSY
false
0
''
""
``
null / undefined
NaN

*/
                 // 0 é falso
console.log('Luiz' && 0 && 'Maria'); // 0
    // Quando a execução do código chegar no valor falso
    // a execução vai parar e retornar o valor falso

console.log('Luiz' && 'Maria'); // Maria
// caso não tenha valor falso na expressão
// o valor retornado é o último avaliado

function falaOi() {
    return 'oi';
}

            // NaN = Valor falso
let vaiExecutar = NaN;

console.log(vaiExecutar && falaOi());

// retorna a primeira expressão verdadeira encontrada
console.log(0 || false || null || 'Jhon' || true); // Jhon
// se todas as expressões forem falsas será retornada a última

const corUsuario = null;
const corPadrao = corUsuario || 'Vermelho';

console.log(corPadrao);