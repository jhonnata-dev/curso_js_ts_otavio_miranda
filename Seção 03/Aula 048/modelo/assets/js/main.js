// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemana (dia) {
//     let diaSemana;

//     switch (dia) {
//         case 0:
//             diaSemana = 'Domingo';
//             return diaSemana;
        
//         case 1:
//             diaSemana = 'Segunda-feira';
//             return diaSemana;
        
//         case 2:
//             diaSemana = 'Terça-feira';
//             return diaSemana;
        
//         case 3:
//             diaSemana = 'Quarta-feira';
//             return diaSemana;
        
//         case 4:
//             diaSemana = 'Quinta-feira';
//             return diaSemana;
        
//         case 5:
//             diaSemana = 'Sexta-feira';
//             return diaSemana;
        
//         case 6:
//             diaSemana = 'Sabádo';
//             return diaSemana;
//     }
// }

// function getMes (mes) {
//     let mesAno;

//     switch (mes) {
//         case 0:
//             mesAno = 'Janeiro';
//             return mesAno;
        
//         case 1:
//             mesAno = 'Fevereiro'
//             return mesAno;

//         case 2:
//             mesAno = 'Março';
//             return mesAno;

//         case 3:
//             mesAno = 'Abril';
//             return mesAno;

//         case 4:
//             mesAno = 'Maio';
//             return mesAno;

//         case 5:
//             mesAno = 'Junho';
//             return mesAno;

//         case 6:
//             mesAno = 'Julho';
//             return mesAno;

//         case 7:
//             mesAno = 'Agosto';
//             return mesAno;

//         case 8:
//             mesAno = 'Setembro';
//             return mesAno;

//         case 9:
//             mesAno = 'Outubro';
//             return mesAno;

//         case 10:
//             mesAno = 'Novembro';
//             return mesAno;

//         case 11:
//             mesAno = 'Dezembro';
//             return mesAno;
//     }
// }

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function criaDate (data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemana(diaSemana);
//     const nomeMes = getMes(numeroMes);

//     return (`${nomeDia}, ${data.getDate()} de ${nomeMes} ` + 
//             `de ${data.getFullYear()} ` +
//             `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);
// }

// h1.innerHTML = criaDate(data);


const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);