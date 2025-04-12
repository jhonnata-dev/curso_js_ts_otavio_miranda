const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

// MINHA SOLUÇÃO
/*
const container = document.querySelector('.container');
const div = document.createElement('div');
container.appendChild(div);

for (let i = 0; i < elementos.length; i++) {
    const tag = criaTag(elementos[i].tag);
    div.appendChild(tag);
    tag.innerHTML += elementos[i].texto;
}

function criaTag (tag) {
    const elemento = document.createElement(tag);
    return elemento;
} */


// SOLUÇÃO DO PROFESSOR
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    const tagCriada = document.createElement(tag);
    const textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);