// Nome: Ellielton
// Data: 08.jAN.2026 
// Nivel: Fácil


//1- Faça um programa que leia três numeros, verifique (usando if e else) e mostre o maior e o menor deles.

//Manipule esses valores para testar o algoritmo aqui.
let numeroA = 4;
let numeroB = 8;
let numeroC = 2;
let maior;
let menor;

if (numeroA === numeroB || numeroA === numeroC || numeroB === numeroC) {
    console.log(`pelo menos dois numeros informados são iguais, tente novamente.`);
} else {
    if (numeroA > numeroB && numeroA > numeroC) {
        maior = numeroA;

        if (numeroB > numeroC) {
            menor = numeroC;
        } else {
            menor = numeroB;
        }

    } else if (numeroB > numeroA && numeroB > numeroC) {
        maior = numeroB;

        if (numeroA > numeroC) {
            menor = numeroC;
        } else {
            menor = numeroA;
        }

    } else if (numeroC > numeroB && numeroC > numeroA) {
        maior = numeroC;

        if (numeroA > numeroB) {
            menor = numeroB;
        } else {
            menor = numeroA;
        }
    }
    console.log(`maior: ${maior} \n menor: ${menor}`);
}

