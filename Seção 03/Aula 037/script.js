/*
OPERADORES DE COMPARAÇÃO

>   | Maior que
>=  | Maior que ou igual
<   | Menor que
<=  | Menor que ou igual
==  | Igualdade (checa somente valor) - não é recomendado usar esse
=== | Igualdade estrita (checa valor e tipo)
!=  | Diferente (checa somente valor) - não é recomendado usar esse
!== | Diferente estrito (checa valor e tipo)
*/

const comp = 10 > 5;
console.log(comp);

const comp2 = 10 >= 10;
console.log(comp2);


const num1 = 10;
const num2 = 11;

const comp3 = num1 < num2;
console.log(comp3);

const comp4 = 12 <= 11;
console.log(comp4);

const comp5 = 10 == '10';
console.log(comp5);

const comp6 = 10 === '10';
console.log(comp6);

const comp7 = 10 != '10';
console.log(comp7);

const comp8 = 10 !== '10';
console.log(comp8);
