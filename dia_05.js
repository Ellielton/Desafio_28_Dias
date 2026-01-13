/*
Data: 12.01.2026
Nível: Fácil
Nome: Ellielton

    5-Faça um programa para leitura de duas notas parciais de um aluno.
    * mensagem "Aprovado", se a média for maior igual a sete;
    * mensagem "Aprovado com distinção", se a média for igual a dez;
    * mensagem "Reprovado", se a média for menor que sete;
*/
let nota1 = 5;
let nota2 = 8;

let media = (nota1 + nota2) /2;

if(media >= 10) {
    console.log("Sua média é:", media, "Aprovado com distinção!" );

}else if(media >= 7) {
    console.log("Sua média é:", media, "Aprovado.");
    
}else{
    console.log("Sua média é:", media, "Reprovado!");

}
