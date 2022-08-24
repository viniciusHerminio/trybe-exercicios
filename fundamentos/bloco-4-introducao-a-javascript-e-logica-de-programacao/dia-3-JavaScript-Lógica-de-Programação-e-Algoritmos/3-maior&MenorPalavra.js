/*Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.*/

let array = ['java', 'javascript', 'python', 'html', 'css'];

let numeroDeLetras = [];
for (let index = 0; index < array.length; index+=1) {
    numeroDeLetras.push(array[index].length);   
}

let maiorIndex = Math.max(...numeroDeLetras)
let menorIndex = Math.min(...numeroDeLetras)

for (let index2 = 0; index2 < array.length; index2+=1) {
    if (maiorIndex === numeroDeLetras[index2]) {
        maiorIndex = index2
    }   
}
for (let index3 = 0; index3 < array.length; index3+=1) {
    if (menorIndex === numeroDeLetras[index3]) {
        menorIndex = index3
    }   
}

console.log(array[maiorIndex]);
console.log(array[menorIndex]);