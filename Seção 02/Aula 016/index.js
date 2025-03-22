/*
Jonata Damasco tem 30 anos, pesa 84kg
tem 1.9 de altura e seu IMC é de 25.925925925924
Jonata Damasco nasceu em 1980
*/

const nome = 'Jonata';
const sobrenome = 'Damasco';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2025 - idade;

console.log(nome + ' ' + sobrenome, 'tem', idade, 'anos, pesa',
            peso + 'kg,', 'tem', alturaEmM, 'de altura e seu IMC é de',
            indiceMassaCorporal, nome, sobrenome, 'nasceu em', anoNascimento + '.'
        );

// USANDO TEMPLATE STRING
console.log('====================================');

console.log(`            ${nome} ${sobrenome} tem ${idade} anos, pesa
            ${peso}kg, tem ${alturaEmM} de altura e seu IMC é de
            ${indiceMassaCorporal}, ${nome} ${sobrenome} nasceu em ${anoNascimento}`
        );