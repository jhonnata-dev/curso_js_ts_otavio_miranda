/* FOR IN - ESTRUTURA DE REPETIÇÃO */

const frutas = ['Pêra', 'Maçã', 'Uva'];

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Jhon',
    sobrenome: 'Dev',
    idade: 29
};

// maneiras de acessar um campo do objeto
    // console.log(pessoa.nome);
    // console.log(pessoa['nome']);

    // acessando os valores a partir do nome da chave
for (let chave in pessoa) {
    console.log(pessoa[chave])
}