/* TRATANDO E LANÇANDO ERROS (TRY, CATCH, THROW) */

// try -> Tenta executar o código
try {
    console.log(naoExisto);
} catch(err) { // vai executar caso oconteça algum erro
    console.log('naoExist não existe.');
    console.log(err); // exibe o erro
}

// Lançando meus próprios erros
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números.'); // lançando o erro que aparecerá
    }                                          // caso os númeroos sejam diferentes de number  

    return x + y;
}

try {
    console.log(soma(2));
    console.log(soma('1', 2));
} catch(err) {
    console.log(err); //  bão é recomendado exibir o erro da raiz pro usuario
    console.log('Alguma coisa mais amigavel para o usuário');
}