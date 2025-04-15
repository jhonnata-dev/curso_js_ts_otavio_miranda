function retornaMaior (pNumero, sNumero) {
    if (pNumero === sNumero) {
        return 'Os números são iguais'
    }
    
    maior = pNumero > sNumero ? pNumero : sNumero;
    return maior;
}

// quando a arrow function tem uma só linha não precisa das chaves {}
const max = (x, y) => x > y ? x : y;

console.log(max(20, 10))
console.log(retornaMaior(1, 5));