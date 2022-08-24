/*4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.*/

let numerosPrimos = [2,3];
for (let index = 4; index < 51; index+=1) {
let numeroDeDivisores = 0;
    for (let index2 = 1; index2 <= index; index2+=1) {  
    if (index % index2 === 0) {
    numeroDeDivisores+= 1;
    }  
    }
    if (numeroDeDivisores === 2) {
    numerosPrimos.push(index);
    }
}
let maiorNumeroPrimo = Math.max(...numerosPrimos)
console.log(maiorNumeroPrimo);