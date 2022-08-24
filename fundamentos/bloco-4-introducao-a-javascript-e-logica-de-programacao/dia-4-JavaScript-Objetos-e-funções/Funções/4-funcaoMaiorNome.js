/*Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.*/



let numeroDeLetras = [];
function maiorNome(array) {
    
    for (let index = 0; index < array.length; index+=1) {
        numeroDeLetras.push(array[index].length);   
    }

    let maiorIndex = Math.max(...numeroDeLetras)

    for (let index2 = 0; index2 < array.length; index2+=1) {
        if (maiorIndex === numeroDeLetras[index2]) {
            maiorIndex = index2
        }   
    }
    return(array[maiorIndex])
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));