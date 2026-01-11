/*
Data: 11.01.2026
Nível: Fácil
Nome: Ellielton

    4-Faça um programa que verifique (usando if e else) se uma letra digitada é vogal ou consoante.
*/
const letra = "E".toLocaleLowerCase();

if(letra !== "a" && letra !== "e" && letra !== "i" && letra !== "o" && letra !== "u") {
    console.log("Consoante");
}else{
    console.log("Vogal");
}
