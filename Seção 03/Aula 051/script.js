const pessoa = {
  nome: 'Jhon',
  sobrenome: 'Dev',
  idade: '29',
  endereco: {
    // rua: 'Av Brasil',
    numero: 320
  }  
};

// Atribuição via desestruturação
const { nome='valor padrão caso não exista',
        sobrenome, endereco: {rua: r = 12345, numero} }
        = pessoa;

console.log(nome, sobrenome, r, numero);

// TAMBÉM É POSSIVEL USAR O REST COM OBJETOS