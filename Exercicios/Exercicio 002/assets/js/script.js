const form = document.querySelector('#form-cadastro');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputNome = event.target.querySelector('#nome');
    const inputSobrenome = event.target.querySelector('#sobrenome');
    const inputEmail = event.target.querySelector('#email')

    const nome = inputNome.value;
    const sobrenome = inputSobrenome.value;
    const email = inputEmail.value;

    criaObjeto(nome, sobrenome, email);
})

function criaObjeto(nome, sobrenome, email) {
    const usuario = {
        nome: nome,
        sobrenome: sobrenome,
        email: email
    };

    adicionaUsuario(usuario);
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