function meuEscopo () {
                 // selecionando a classe form
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        // o "preventDefault" é usado para impedir o comportamento padrão de um evento
        // que nesse caso seria o envio do formulário, dessa maneira
        // não será enviado o formulário
        evento.preventDefault();

        // seleciona a classe "nome" que está dentro da classe "form"
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // fazendo o "push" diretamente ao criar o objeto
        pessoas.push ({
            nome: nome.value, // o .value trás o valor digitado
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
        
        console.log(nome.value, sobrenome.value, peso.value, altura.value)
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();