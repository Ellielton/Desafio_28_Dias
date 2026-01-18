/*
Data: 17.01.2026
Nível: Intermediário
Nome: Ellielton

9- Faça um programa que pergunte em que turno você estuda. Peça para digitar M - Matutino, V - Vespertino, N - Noturno. Imprima a mensagem "Bom dia!", "Boa tarde!", "Boa noite!" ou "VAlor inválido.", conforme o caso.

*/
let turno = "N".toLocaleLowerCase();

if (turno === "m") {
    console.log("Bom dia!");
} else if (turno === "v") {
    console.log("Boa tarde!");

} else if (turno === "n") {
    console.log("Boa noite!");

} else {
    console.log("Valor inválido.");

}
