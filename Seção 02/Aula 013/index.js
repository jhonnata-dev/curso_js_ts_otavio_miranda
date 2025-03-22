// Criando variável nome
let nome = 'João';

// Chamando variável nome
console.log(nome, 'Nasceu em 1984'); // João Nasceu em 1984
console.log('Em 2000', nome, 'conheceu Maria'); // Em 2000 João conheceu Maria
console.log(nome, 'casou-se com Maria em 2012'); // joão casou-se com Maria em 2012
console.log('Maria teve 1 filho com', nome ,'em 2015');
																						// 'Maria teve 1 filho com João em 2015
console.log('o filho de', nome, 'se chama Eduardo');
                                            // o filho de João se chama Eduardo

// ============================================================================

// declarando variável
let nome;

console.log(nome); // undefined

nome = 'Qualquer valor';

console.log(nome); // Qualquer valor

nome = 'João';

console.log(nome); // João

// ============================================================================

// EXEMPLOS 
let if;
let console;

// ============================================================================

// Exemplo não recomendado
let n;
let nc;
let c;

// Exemplo recomendado
let nomeCliente = 'João';

// Não pode COMEÇAR o nome de uma variável com um número, no meio ou no
// final do nome é permitido
let 1nome; // gera um erro

// Não pode usar espaços ou traços
let nome-cliente;

let nome cliente;

// para isso é recomendado o uso do camelCase
let nomeCompleto = 'Jhonnata';

// variaveis no JavaScrpit são Case-Sensitive
// no caso, letras maiúsculsa e minúsculas fazem diferença
let nomeCliente = 'Jhonnata';
let nomecliente = 'dev';

console.log(nomeCliente); // Jhonnata
console.log(nomecliente); // dev

// não pode redleclarar variáveis com let
let nomeCliente = 'Jhonnata';
let nomeCliente = 'dev';

// no lugar de redlecarar a variável, altere o valor dentro dela dessa maneira
let nomeCliente = 'Jhonnata';
console.log(nomeCliente); // Jhonnata

nomeCliente     = 'dev';
console.log(nomeCliente); // dev