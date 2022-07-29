let fraseh1 = 'Exercício 5.2 - JavaScript Dom';
let fraseExercicioH1 = document.createElement('h1');
fraseExercicioH1.innerText = fraseh1;
document.body.appendChild(fraseExercicioH1);

let main = document.createElement('main');
document.body.appendChild(main);
document.querySelector('main').classList.add('main-content');

let section = document.querySelector('.main-content');
let section2 = document.createElement('section');
section.appendChild(section2);
document.querySelector('section').classList.add('center-content');

