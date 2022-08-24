let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0;


for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] % 2 === 0) {
        numerosImpares = numerosImpares
    } else {
        numerosImpares = numerosImpares + 1;
    }
    
}
if (numerosImpares > 0) {
    console.log(numerosImpares);
} else {
    console.log('nenhum valor ímpar encontrado');
}
