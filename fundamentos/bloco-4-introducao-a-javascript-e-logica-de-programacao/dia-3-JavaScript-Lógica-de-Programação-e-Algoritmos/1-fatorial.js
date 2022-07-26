/*Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.*/

numero = 10;
let lista = [];
fatorial = 1;

for (let index = 1; index <= numero; index+=1) {
    lista.push(index);
}

console.log(lista);

for (let index2 = 0; index2 < lista.length; index2+=1) {
    fatorial = fatorial * lista[index2];
    
}

console.log(fatorial);