/*Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.*/


let oddsAndEvens = [13, 3, 4, 10, 7, 2];

    oddsAndEvens.sort((a, b) => a - b);

    console.log(`Os números ${oddsAndEvens} se encontram odenados de forma crescente!`); // será necessário alterar essa linha 😉