const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const section = document.querySelector('.container');
const div = document.createElement('div');
section.appendChild(div);

for (let i = 0; i < elementos.length; i++) {
    const tag = criaTag(elementos[i].tag);
    div.appendChild(tag);
    tag.innerHTML += elementos[i].texto;
}

function criaTag (tag) {
    const elemento = document.createElement(tag);
    return elemento;
}