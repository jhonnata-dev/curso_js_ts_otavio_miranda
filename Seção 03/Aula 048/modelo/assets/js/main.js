const h1 = document.querySelector('.container h1');
const data = new Date();

const diaSemana = getDiaSemana(data.getDay());
const diaMes = data.getDate();
const mes = getMes(data.getMonth());
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();

function getDiaSemana (dia) {
    let diaSemana;

    switch (dia) {
        case 0:
            diaSemana = 'Domingo';
            return diaSemana;
        
        case 1:
            diaSemana = 'Segunda-feira';
            return diaSemana;
        
        case 2:
            diaSemana = 'Terça-feira';
            return diaSemana;
        
        case 3:
            diaSemana = 'Quarta-feira';
            return diaSemana;
        
        case 4:
            diaSemana = 'Quinta-feira';
            return diaSemana;
        
        case 5:
            diaSemana = 'Sexta-feira';
            return diaSemana;
        
        case 6:
            diaSemana = 'Sabádo';
            return diaSemana;
    }
}

function getMes (mes) {
    let mesAno;

    switch (mes) {
        case 0:
            mesAno = 'Janeiro';
            return mesAno;
        
        case 1:
            mesAno = 'Fevereiro'
            return mesAno;

        case 2:
            mesAno = 'Março';
            return mesAno;

        case 3:
            mesAno = 'Abril';
            return mesAno;

        case 4:
            mesAno = 'Maio';
            return mesAno;

        case 5:
            mesAno = 'Junho';
            return mesAno;

        case 6:
            mesAno = 'Julho';
            return mesAno;

        case 7:
            mesAno = 'Agosto';
            return mesAno;

        case 8:
            mesAno = 'Setembro';
            return mesAno;

        case 9:
            mesAno = 'Outubro';
            return mesAno;

        case 10:
            mesAno = 'Novembro';
            return mesAno;

        case 11:
            mesAno = 'Dezembro';
            return mesAno;

    }
}


h1.textContent = `${diaSemana}, ${diaMes} de ${mes} de ${ano} ${hora}:${min}`;