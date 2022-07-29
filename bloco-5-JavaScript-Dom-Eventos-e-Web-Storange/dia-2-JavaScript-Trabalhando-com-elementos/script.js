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