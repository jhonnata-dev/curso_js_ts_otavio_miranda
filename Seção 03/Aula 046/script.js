/* OBJETO DATE */

// captura a data e hora atual
// (dia da semana, mês, ano, hora)
const dataAtual = new Date();
console.log(dataAtual.toString());

// parâmetros - ano, mês, dia, hora, minuto, , segundo, milisegundo
// caso algum parâmetro de horario não seja passado será zerado
const data = new Date(2019, 3);
console.log(data.toString());

console.log('================================================');

// passando a data em formato "dataString"
const dataString = new Date('2019-04-20 20:20:59');
console.log(dataString.toString());

// Obtendo o número do dia
console.log('Dia', dataString.getDate());

// Obtendo o mês
console.log('Mês', dataString.getMonth()); // Mês começa do zero

// Obtendo o ano
console.log('Ano', dataString.getFullYear());

// Obtendo a hora
console.log('Hora', dataString.getHours());

// Obtendo os minutos
console.log('Minutos', dataString.getMinutes());

// Obtendo os segundos
console.log('Segundos', dataString.getSeconds());

// Obtendo os milisegundos
console.log('Milisegundos', dataString.getMilliseconds());

// Obtendo o dia da semana
console.log('Dia da semana', dataString.getDay()); // 0 - Domingo, 6 - Sabádo


/*==============================================*/

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const dataFunc = new Date();
const dataBrasil = formataData(dataFunc)
console.log(dataBrasil);