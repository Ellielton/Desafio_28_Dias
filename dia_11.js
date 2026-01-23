/*
Data: 22.01.2026
Nível: Difícil
Nome: Ellielton

11- As organizações CSM resolveram da um aumento de salário aos colaboradores e lhe contrataram pra desenvolver o programa que calculará os reajustes.

    a) Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual;

    b)Salários até 280,00 (incluindo), aumento de 20%;
    c)Salários entre 280,00 e 700,00, aumento de 15%;
    d)Salários entre 700,00 e 1500,00, aumento de 10%;
    e)Salários de 1500,00 em diante , aumento de 5%;

    Após o aumento ser realizado , informe na tela:
    a)Salário antes do reajuste;
    b)O percentual de aumento aplicado;
    c)O valor do aumento;
    d)O novo salário, após o aumento.
*/
let salario = 200.00;
let porcentual;
let valorAumento;
let salarioAtual;
if (salario <= 280.00) {
    porcentual = 0.20;
    valorAumento = salario * porcentual;
    salarioAtual = salario + valorAumento;

} else if (salario > 280.00 && salario <= 700.00) {
    porcentual = 0.15;
    valorAumento = salario * porcentual;
    salarioAtual = salario + valorAumento;

}else if (salario > 700.00 && salario <= 1500.00) {
    porcentual = 0.10;
    valorAumento = salario * porcentual;
    salarioAtual = salario + valorAumento;

}else{
    porcentual = 0.05;
    valorAumento = salario * porcentual;
    salarioAtual = salario + valorAumento;
}
console.log(`O seu salário é: R$${salario.toFixed(2)} e teve um precentual de aumenteo de: ${porcentual.toFixed(2)}%, você terá um aumento de ${valorAumento.toFixed(2)} reais e seu salário atual é: R$${salarioAtual.toFixed(2)}`);