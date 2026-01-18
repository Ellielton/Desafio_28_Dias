/*
Data: 17.01.2026
Nível: Intermediário
Nome: Ellielton

9- Faça um programa que leia três números e mostre-os em ordem decrescente.

*/
let numeroA = 5;
let numeroB = 6;
let numeroC = 9;


if (numeroA <= 0 && numeroB <= 0 && numeroC <= 0) {
    console.log("Valor informfa é inválido!");

}else if(numeroA > numeroB && numeroA > numeroC){

    if(numeroB > numeroC){
        console.log("Ordem decrescente: ", numeroA, numeroB, numeroC);
    }else{
        console.log("Ordem decrescente: ", numeroA, numeroC, numeroB);
    }

}else if(numeroB > numeroA && numeroB > numeroC){
    if(numeroA > numeroC){
        console.log("Ordem decrescente: ", numeroB, numeroA, numeroC);
    }else{
        console.log("Ordem decrescente: ", numeroB, numeroC, numeroA);
    }
}else if(numeroC > numeroB && numeroC > numeroA){
    if(numeroA > numeroB){
        console.log("Ordem decrescente: ", numeroC, numeroA, numeroB);
    }else{
        console.log("Ordem decrescente: ", numeroC, numeroB, numeroA);
    }
}else{
    console.log("Ordem decrescente: ", numeroA, numeroB, numeroC);
    
}
