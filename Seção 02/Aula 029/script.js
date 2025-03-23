// Arrays (Básico)

// Criando um array
const alunos = ['Luiz', 'Maria', 'João'];

//acessando o array completo
console.log(alunos)

// Acessando um elemento do aarray
console.log(alunos[0])

// alterando valor do elemento do array
alunos[0] = 'Eduardo';
console.log(alunos);

// adicionando um novo campo no array (não é uma boa maneira)
alunos[3] = 'Luiza';
console.log(alunos)

// pegando tamanho do array
console.log(alunos.length);

// adicionando novos elementos no FINAL da array com a função push
alunos.push('Carlos');
alunos.push('Pedro');
console.log(alunos);

// adicionando novos elementos no COMEÇO da array com a função unshift
alunos.unshift('Brenda');
alunos.unshift('Fábio');
console.log(alunos);

// removendo elementos do final da array com a função pop e
// salvando em uma variável
const removidoFinal = alunos.pop();
console.log(removidoFinal);

// removendo elementos do começo da array com a função shift e
// salvando em uma variável
const removidoComeco = alunos.shift();
console.log(removidoComeco);

console.log(alunos);

console.log('');

// fatiando a array com a função slice
console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -1));

console.log('');

// deletando um elemento especifico(o índice não será apagado
// apenas ficará vazio)
delete alunos[1];
console.log(alunos);

console.log('');

// descobrindo se a array é uma instância de array(se é um array)
console.log(alunos instanceof Array);