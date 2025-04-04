const form = document.querySelector('#form-cadastro');
const usuariosCadastrados = [];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputNome = event.target.querySelector('#nome');
    const inputSobrenome = event.target.querySelector('#sobrenome');
    const inputEmail = event.target.querySelector('#email')

    const nome = inputNome.value;
    const sobrenome = inputSobrenome.value;
    const email = inputEmail.value;

    if ((nome === '') || (sobrenome === '') || (email === '')) {
        exibeMsgErro('Preencha todos os campos');
    } else {
        criaObjeto(nome, sobrenome, email);
    }
})

function criaObjeto(nome, sobrenome, email) {
    const usuario = {
        nome: nome,
        sobrenome: sobrenome,
        email: email
    };

    const usuarioExiste = usuariosCadastrados.some(usuario => usuario.nome === nome);

    if (!usuarioExiste) {
        usuariosCadastrados.push(usuario);
        adicionaUsuario(usuario);
    } else {
        exibeMsgErro('Este usuario já está cadastrado!');
    }
}

function exibeMsgErro(msg) {
    const div = document.querySelector('.error');
    const p = criaP();
    p.classList.add('mensagem-erro');

    div.innerHTML = '';
    p.innerHTML = msg;
    div.appendChild(p);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function criaBr() {
    const br = document.createElement('br');
    return br;
}

function adicionaUsuario(usuario) {
    const div = document.querySelector('.container-usuarios');

    const pNome = criaP();
    const pSobrenome = criaP();
    const pEmail = criaP();
    const br = criaBr();

    pNome.innerHTML = usuario.nome;
    div.appendChild(pNome);

    pSobrenome.innerHTML = usuario.sobrenome;
    div.appendChild(pSobrenome);

    pEmail.innerHTML = usuario.email;
    div.appendChild(pEmail);

    div.appendChild(br);
}