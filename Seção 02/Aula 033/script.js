/*
Tipos primitivos (imutáveis) - string, number, boolean, undefined,
null, (bigint, symbol)

Tipos por referência (mutável) - array, object, function - Passados por referência
*/

//tipos primitivos 
const var1 = 12345;
const var2 = var1;
// "var2" faz uma cópia do valor que está dentro de "var1", então se "var1"
// for modificado não afetará o valor dentro de "var2"

//
const a = {
	nome: 'Luiz',
	sobrenome: 'Otávio'
};

const b = a; // "b" faz uma referência ao valor do objeto "a"
             // se "a" for alterado "b" também será, pois os dois apontam
             // pro mesmo valor na memória
             
a.nome = 'João';
console.log(b); // { nome: 'João', sobrenome: 'Otávio' }

// caso queira copiar o valor do objeto ao invés de fazer referência pode ser feito isso
const c = {...a};