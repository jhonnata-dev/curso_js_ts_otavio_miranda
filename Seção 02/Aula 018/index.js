// Var vs Let primeira diferença

// é possivel redeclarar uma variável com Var
var nome = 'Jhon';
var nome = 'dev';
console.log(nome);

// ao criar uma variável dessa maneira, está sendo criada uma
// variável global NÃO FAÇA ISSO
nome = 'jhonnata'

// não é possivel redeclarar uma variável com Var
let nome2 = 'Jhon';
let nome2 = 'Dev';