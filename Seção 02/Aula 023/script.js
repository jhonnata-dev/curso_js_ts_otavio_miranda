// minha solução
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
const varTemp = varA;

varA = varB;
varB = varC;
varC = varTemp;

console.log(varA, varB, varC);

console.log('============================');
// solução do professor
varA = 'A';
varB = 'B';
varC = 'C';

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
