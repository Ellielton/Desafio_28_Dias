/*
Data: 09.08.2026
Nível: Fácil
Nome: Ellielton

    2-Fáca um programa que que verifica (usando if e else) se uma letra digitada é "F" ou "M". Conforme a letra escrever Feminino - "F", Masculino - "M" ou sexo inválido.
 */

const letra = "m";
const letrinha = letra.toUpperCase();

if (letrinha === "F" || letrinha === "M") {
    if (letrinha === "M") {
        console.log("Masculino");
    } else {
        console.log("Feminino");
        console.log("erro")
    }
}else {
    console.log("Sexo inválido");
}


//Encontrei esse caso de bugg 