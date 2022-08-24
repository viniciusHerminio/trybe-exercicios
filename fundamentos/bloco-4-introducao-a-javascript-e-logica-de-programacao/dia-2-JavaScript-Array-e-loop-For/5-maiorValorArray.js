let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index+=1) {
    maiorNumero = 0;
    for (let index2 = 0; index2 < numbers.length; index2+=1) {
        if (numbers[index] >= numbers[index2])

        maiorNumero = maiorNumero + 1;
        
    }
 if (maiorNumero === 10) {
    console.log(numbers[index]);
    break;
 }   
}
