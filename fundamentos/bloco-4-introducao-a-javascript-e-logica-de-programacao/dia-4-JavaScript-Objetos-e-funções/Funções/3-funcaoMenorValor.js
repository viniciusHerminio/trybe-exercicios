/*Crie uma função que receba um array de inteiros e retorne o índice do menor valor.*/

let menorIndex = 0;

function menorValor(array) {
    menorIndex = (Math.min(...array))
    for (const key in array) {
        if (menorIndex === array[key]) {
            return (key)
            break;
            
        }
        
    }
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));