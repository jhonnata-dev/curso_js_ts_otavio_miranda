const form = document.querySelector('#formulario');
const arrayListaFrutas = [];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputNomeFruta = event.target.querySelector('#nome-fruta');
    const inputQtd = event.target.querySelector('#qtd-fruta');
    const inputValor = event.target.querySelector('#valor-fruta');

    if ((inputNomeFruta.value.trim() === '') || (inputQtd.value.trim() === '') || (inputValor.value.trim() === '')) {
        const msgErro = document.querySelector('.error p')
        const div = document.querySelector('.error');
        const p = criaP();

        p.innerHTML = 'Preencha todos os campos corretamente!';
        div.appendChild(p);

        if (msgErro) {
            msgErro.remove();
        }
    } else {
        const nomeFruta = inputNomeFruta.value;
        const qtd = Number(inputQtd.value);
        const valor = Number(inputValor.value);
    
        if ((!Number.isFinite(qtd)) || (!Number.isFinite(valor))) {
            const msgErro = document.querySelector('.error p')
            const div = document.querySelector('.error');
            const p = criaP();
    
            if (msgErro) {
                msgErro.remove();
            }

            if (!div.querySelector('p')) {
                p.innerHTML = 'Digite valores válidos!';
                div.appendChild(p);
            }
        } else {
            criaObjeto(nomeFruta, qtd, valor);
        }
    }
})

function criaObjeto (nome, qtd, valor) {
    const msgErro = document.querySelector('.error p')
    if (msgErro) {
        msgErro.remove();
    }

    const dadosFruta = {
        nome: nome,
        qtd: qtd,
        valor: valor
    }

    const itemExiste = arrayListaFrutas.some(item => item.nome === nome && item.qtd === qtd && item.valor === valor)

    if (!itemExiste) {
        arrayListaFrutas.push(dadosFruta);
        adicionaItem(dadosFruta);
    } else {
        const div = document.querySelector('.error');
        const p = criaP();

        p.innerHTML = 'Este item já existe!';
        div.appendChild(p);
    }
}

function adicionaItem (item) {
    const section = document.querySelector('.secao-dados-frutas');
    const div = criaDiv();
    const pNome = criaP();
    const pQtd = criaP();
    const pValor = criaP();
    const pTotal = criaP();
    const total = item.valor * item.qtd;

    div.classList.add('container-informacao-compras')
    section.appendChild(div);

    pNome.textContent = `Nome: ${item.nome}`;
    div.appendChild(pNome)

    pQtd.textContent = `Quantidade: ${item.qtd}`;
    div.appendChild(pQtd);

    pValor.textContent = `Valor: ${item.valor}`;
    div.appendChild(pValor);

    pTotal.textContent = `Valor total da compra: ${total}`;
    div.appendChild(pTotal);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function criaDiv () {
    const div = document.createElement('div')
    return div;
}