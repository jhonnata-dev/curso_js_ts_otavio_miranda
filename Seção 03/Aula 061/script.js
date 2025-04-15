/*
Escreva uma função chamada ePaisagem que recebe dois argumentos, largura
e altura de uma imagem (number).
retorne true se a imgaem estiver no modo paisagem.
*/

const ePaisagem = (largura, altura) => largura > altura ? true : false;
console.log(ePaisagem(90, 50))