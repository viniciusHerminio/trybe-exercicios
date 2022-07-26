/*Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.*/
let maiorIndex = 0;

function maiorValor(array) {
    maiorIndex = (Math.max(...array))
    for (const key in array) {
        if (maiorIndex === array[key]) {
            return (key)
            break;
            
        }
        
    }
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));