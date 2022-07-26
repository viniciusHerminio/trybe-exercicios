/*Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome('arara');
Retorno esperado: true
verificaPalindrome('desenvolvimento');
Retorno esperado: false*/

let novaPalavra = "";

function palindromo(palavra) {
    for (let index = palavra.length -1; index >= 0; index-=1) {
        novaPalavra+= palavra[index];
    }
    if (palavra === novaPalavra) {
        return (true)
    } else{
        return (false)
    }
}

console.log(palindromo('arara'));