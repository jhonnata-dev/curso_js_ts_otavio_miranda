const form = document.querySelector('#formulario');
const arrayTarefas = [];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputTarefa = event.target.querySelector('#tarefa');
    const tarefa = inputTarefa.value;

    if (tarefa === '') {
        return alert('Digite uma tarefa!');
    }

    validaTarefa(tarefa);
})

function validaTarefa(tarefa) {
    if (arrayTarefas.includes(tarefa)) {
        return alert('Essa tarefa já existe')
    }

    arrayTarefas.push(tarefa);
    adicionarTarefa(tarefa);
}

function criaLi () {
    const li = document.createElement('li');
    return li;
}

function adicionarTarefa (msg) {
    const listaTarefas = document.querySelector('#lista-tarefas');
    const li = criaLi();

    li.innerHTML = msg;
    li.classList.add('tarefa-adicionada');
    listaTarefas.appendChild(li);
}