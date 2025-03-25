function meuEscopo () {
                 // selecionando a classe form
    const form = document.querySelector('.form');

    form.onsubmit = function (evento) {
        // o "preventDefault" é usado para impedir o comportamento padrão de um evento
        // que nesse caso seria o envio do formulário, dessa maneira
        // não será enviado o formulário
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado');
    };

    function recebeEventoForm (evento) {
        evento.preventDefault();
        console.log()
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();