/* 15. Faça um programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno. Dicas:

Três lados formam um triangulo quando a soma de quaisquer dos dois lados é maior que o terceiro.
Triângulo Equilátero: três lados iguais;
Triângulo Isósceles: quaisquer dois lados iguais;
Triângulo Escaleno: três lados diferentes;*/

let l1 = 5
let l2 = 3
let l3 = 3

let a = l1 + l2
let b = l2 + l3
let c = l3 + l1

if(a > l3 &&  b > l1 && c > l1) {
  if(li == l2 && l2 == l3 ){
    console.log('O triângulo é Equilátero')
    
  } else  if(li != l2 && l2 !== l3 && l1 != l3) {
    console.log('O triângulo é Escaleno')

  } else {
    console.log('O triângulo é Isósceles')

  }
}
