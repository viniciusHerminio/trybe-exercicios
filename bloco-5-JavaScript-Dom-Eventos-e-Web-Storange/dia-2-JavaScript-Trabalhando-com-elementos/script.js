let fraseh1 = 'Exercício 5.2 - JavaScript Dom';
let fraseExercicioH1 = document.createElement('h1');
fraseExercicioH1.innerText = fraseh1;
document.body.appendChild(fraseExercicioH1);


let main = document.createElement('main');
document.body.appendChild(main);
document.querySelector('main').classList.add('main-content');

let section = document.querySelector('.main-content');
let section1loc = document.createElement('section');
section.appendChild(section1loc);
document.querySelector('section').classList.add('center-content');

let fraseP = "Assunto muito complicado!";
let p = document.createElement('p');
p.innerText = fraseP;
section1loc.appendChild(p);


let section2loc = document.createElement('section');
section.appendChild(section2loc);
document.querySelector('.center-content').nextElementSibling.classList.add('left-content');

let section3loc = document.createElement('section');
section.appendChild(section3loc);
document.querySelector('.left-content').nextElementSibling.classList.add('rigth-content');

let img = document.createElement('img');
section2loc.appendChild(img);
document.querySelector('.left-content').firstElementChild.classList.add('small-image');
document.querySelector('.small-image').src="https://picsum.photos/200";

let ul = document.createElement('ul');
section3loc.appendChild(ul);
document.querySelector('.rigth-content').firstElementChild.classList.add('listaNaoOrdenada');

let listaNumeros = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
for (let index = 0; index < listaNumeros.length; index+=1) {
    let element = listaNumeros[index]; 
    let li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li);
}

function criarh3(nome,frase) {
nome = document.createElement('h3');
section.appendChild(nome);
nome.innerText = frase;   
}
criarh3('h31','Feliz por chegar até aqui!');
criarh3('h32','Achei que não conseguiria realizar essa atividade!');
criarh3('h33', '<3');

document.querySelector('.main-content').previousElementSibling.classList.add('title');

function alterarClasses(classeAnterior, nomeDaClasse) {
  document.querySelector(classeAnterior).nextElementSibling.classList.add(nomeDaClasse);  
}
alterarClasses('.rigth-content', 'descripition')
alterarClasses('.descripition', 'descripition')

document.querySelector('.main-content').lastElementChild.classList.add('descripition');

let main2 = document.querySelector('.main-content');
section2 = main2.firstChild.nextSibling;
section2.parentNode.removeChild(section2);

section3loc.style.marginRight = "auto";

section1loc.parentElement.style.backgroundColor = 'green';