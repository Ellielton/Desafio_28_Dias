/* Data: 24.01.2026
Nível: Difícil
Nome: Ellielton 

    12- Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do salário bruto, mas não é descontado (é a empresa que deposita.)

O salário líquido corresponde ao salário bruto menos os descontos O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

a. Desconto do IR;
b. Salário Bruto ate R$900,00 (inclusive) – Isento;
c. Salário Bruto de R$ 1500, 00 (inclusive) – desconto de 5%;
d. Salario bruto até R$ 2500,00 (Inclusive) – desconto de 10%;
e. Salário bruto acima de 2500 – Desconto de 20%.
Imprima na tela as informações, dispostas conforme o exemplo abaixo, no exemplo valor da hora é 5 e a quantidade de horas é 220.  

Salário bruto (5 * 220)           : R$   1100,00

( – ) IR (5%)                     : R$     55,00

( – ) INSS ( 10% )                 : R$     110,00

FGTS ( 11%)                       : R$     121,00

Total de descontos                 : R$     165,00

Salário Líquido                   : R$     935,00 
*/

let ir;
let descontoIr;
let descontoInss;
let descontoSindicato;
let despositoFgts;
let totalDescontos;
let salarioLiquido;
let inss = "10%"
let fgts = "11%"
let sindicato = "3%";
let qtdHoras = 176;
let vlrHora = 15;
//Autere os valores das duas variáveris acima para testar o algomritmo;
let salarioBruto = qtdHoras * vlrHora;

if (salarioBruto <= 900.00) {
    console.log("Isento de IR");

} else if (salarioBruto > 900.00 && salarioBruto <= 1500.00) {
    ir = "5%";
    descontoIr = salarioBruto * 0.05;
    descontoInss = salarioBruto * 0.10;
    descontoSindicato = salarioBruto * 0.03;
    despositoFgts = salarioBruto * 0.11;
    totalDescontos = descontoIr + descontoInss + descontoSindicato;
    salarioLiquido = salarioBruto - totalDescontos;

} else if (salarioBruto > 1500.00 && salarioBruto <= 2500.00) {
    ir = "10%";
    inss = "10%";
    fgts = "11%";
    descontoIr = salarioBruto * 0.10;
    descontoInss = salarioBruto * 0.10;
    descontoSindicato = salarioBruto * 0.03;
    despositoFgts = salarioBruto * 0.11;
    totalDescontos = descontoIr + descontoInss + descontoSindicato;
    salarioLiquido = salarioBruto - totalDescontos;

} else {
    ir = "20%";
    inss = "10%";
    fgts = "11%";
    descontoIr = salarioBruto * 0.20;
    descontoInss = salarioBruto * 0.10;
    descontoSindicato = salarioBruto * 0.03;
    despositoFgts = salarioBruto * 0.11;
    totalDescontos = descontoIr + descontoInss + descontoSindicato;
    salarioLiquido = salarioBruto - totalDescontos;

}

console.log(`salario bruto: ${salarioBruto.toFixed(2)}, desconto ir(${ir}): R$${descontoIr.toFixed(2)}, desconto de INSS (${inss}): R$${descontoInss.toFixed(2)}, desconto Sindicato(${sindicato}): R$${descontoSindicato.toFixed(2)}, deposito de FGTS (${fgts}): R$${despositoFgts.toFixed(2)}, Total de descontado: R$${totalDescontos.toFixed(2)}, salário Líquido: R$${salarioLiquido.toFixed(2)}`);
