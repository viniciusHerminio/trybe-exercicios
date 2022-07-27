function mudarTagP(texto) {
    document.getElementById("textoPrincipal").innerText = texto;  
} 
mudarTagP('Trabalhando em uma empresa do exterior!');

function mudarCorLaterais(cor) {
    let laterais = document.getElementsByClassName('main-content');
    for (let index = 0; index < laterais.length; index+=1) {
        laterais[index].style.backgroundColor = cor;
        
    }
}
mudarCorLaterais('rgb(76,164,109');

function mudarCorCentro(cor) {
    document.getElementsByClassName('center-content')[0].style.backgroundColor = cor;
} mudarCorCentro('white')

function ajustandoTexto(texto) {
    document.getElementsByClassName('title')[0].innerText = texto;
}ajustandoTexto('Exercício 5.1 - JavaScript')