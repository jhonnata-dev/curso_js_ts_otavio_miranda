/* Break e Continue */

// Continue - Faz o laço de repetição retornar ao topo / pula para a próxima iteração do laço
// Break - Sai do laço de repetição

// O Break e Continue são usados em estruturas de repetição

const numeros  = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        break;
    }
    
    console.log(numero);
}