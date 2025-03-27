/*
Operadores lógicos
&& -> AND -> E - Todas as expressões tem que ser True
|| -> OR -> OU - Pelo menos uma das expressão tem que ser verdadeiro
! -> NOT -> NÃO
*/

const expressssãoAnd = true && true && true;
console.log(expressssãoAnd);

const expressaoOr =  false || false || true || false;
console.log(expressaoOr);

const expressaoNot = !true;
console.log(expressaoNot);

// Exemplo de uso
const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar);
