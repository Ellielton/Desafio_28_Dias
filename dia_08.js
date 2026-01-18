/*
Data: 17.01.2026
Nível: Fácil
Nome: Ellielton

8- Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sendo que a condição é sempre o mais barato.

*/

let preco1 = 10; 
let preco2 = 3;
let preco3 = 6;
let barato;

if (preco1 <= 0 && preco2 <= 0 && preco3 <= 0) {
        console.log("informe valores acima de zero!");
    
}else{

    if(preco1 < preco2 && preco1 < preco3) {
    barato = preco1;

}else if(preco2 < preco1 && preco2 < preco3) {
    barato = preco2;
    
}else if(preco3 < preco1 && preco3 < preco2) {
    barato = preco3;

}
console.log(barato);

}
