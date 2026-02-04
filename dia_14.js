/*
Data: 03.02.2026
Nível: intermediário
Nome: Ellielton

14 – Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:  

Média de aproveitamento        Conceito 

Entre 9.0 e 10.0  A
Entre 7.5 e 9.0   B
Entre 6.0 e 7.5     C
Entre 4.0 e 6.0     D
Entre 4.0 e 0       E  

O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C “REPROVADO” se o conceito for D ou E.*/

let nota1
let nota2
let media
let conceito
let mensagem

media = (nota1 + nota2) /2

if(media > 0 && media <= 4) {
  mensagem = 'Reprovado'
  conceito = 'E'
  
} else if (media > 4 && media <= 6) {
  mensagem = 'Reprovado'
    conceito = 'D'
    
} else if (media > 6 && media <= 7.5) {
  mensagem = 'Aprovado'
    conceito = 'C'
    
} else if (media > 7.5 && media <= 9.0) {
  mensagem = 'Aprovado'
    conceito = 'B'
    
} else {
    mensagem = 'Aprovado'
  conceito = 'A'
}

console.log(nota1, '\n', nota2, '\n', media, '\n', mensagem, '\n', conceito, '\n',)
