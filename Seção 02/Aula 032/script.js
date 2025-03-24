// Objetos (Básico)

// criando um objeto(literal)
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

// acessando campos do objeto
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

console.log('');

// criando um objeto dentro de uma função
function criaPessoa (nome, sobrenome, idade) {
    return {
        // quando o parâmetro da função tem o mesmo nome do
        // parâmetro do objeto não é necessario colocar por ex:
        // nome: nome;
        nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

// instânciando valores ao objeto
const pessoa1 = criaPessoa('Jhonnata', 'Dev', 23);
const pessoa2 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Castro', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

console.log(pessoa1.nome, pessoa2.nome);

console.log('');

// metódos em objetos

// criando objeto
const pessoaM = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    // criando metódo
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando "A minha idade atual é ${this.idade}"`);
    },

    // criando outro metódo
    incrementaIdade() {
        this.idade++;
    }
};

// chamando metódo
pessoaM.fala(); // idade 25

pessoaM.incrementaIdade();
pessoaM.fala(); // idade 26

pessoaM.incrementaIdade();
pessoaM.fala(); // idade 27