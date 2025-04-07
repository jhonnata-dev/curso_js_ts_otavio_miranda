// Switch/Case

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;

console.log(diaSemana);

// Usando o switch/case
switch(diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;

    case 1:
        diaSemanaTexto = 'Segunda';
        break;

    case 2:
        diaSemanaTexto = 'Terça';
        break;
    
    case 3:
        diaSemanaTexto = 'Quarta';
        break;

    case 4:
        diaSemanaTexto = 'Quinta';
        break;

    case 5:
        diaSemanaTexto = 'Sexta';
        break;

    case 6:
        diaSemanaTexto = 'Sabádo';
        break;

    default:
        diaSemanaTexto = '';
}

// Colocando o Switch/Case dentro de uma função
function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch(diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
    
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
    
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
    
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
    
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
    
        case 6:
            diaSemanaTexto = 'Sabádo';
            return diaSemanaTexto;
    
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
    
}

console.log(getDiaSemanaTexto(diaSemana));