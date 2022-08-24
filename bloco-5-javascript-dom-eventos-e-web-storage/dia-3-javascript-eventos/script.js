function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let sextaFeira = [4, 11, 18, 25];

  let listDays = document.getElementById("days");

 for (const key in decemberDaysList) {
        const element = decemberDaysList[key];
        let day = document.createElement("li");
        day.innerText = element;
        if (element == 24 || element == 31) {
            day.classList.add('day' , 'holiday');
        } else if (element == 4 || element == 11 || element == 18) {
            day.classList.add('day' , 'friday');
        } else if (element == 25) {
            day.classList.add('day' , 'friday', 'holiday')
        } else {
            day.classList.add('day');
        }
        listDays.appendChild(day);
    }
let divBotao = document.getElementsByClassName('buttons-container')[0];

function criarBotaoFeriado() {
 let botao = document.createElement('button');
divBotao.appendChild(botao);
botao.setAttribute('id' , "btn-holiday");
botao.innerText = 'Feriados';
}
criarBotaoFeriado()

let botaoCor = document.getElementById("btn-holiday");
botaoCor.addEventListener('click' , mudarCor);

function mudarCor() {
    let holidays = document.getElementsByClassName('holiday');
    for (let index = 0; index < holidays.length; index+=1) {
        if (holidays[index].style.backgroundColor == 'white') {
            holidays[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
            holidays[index].style.backgroundColor = 'white'
        }
    }
}
function criarBotaoSextafeira() {
    let botao = document.createElement('button');
   divBotao.appendChild(botao);
   botao.setAttribute('id' , "btn-friday");
   botao.innerText = 'Sexta-feira';
   }
   criarBotaoSextafeira()

let botaoSextou = document.getElementById("btn-friday");
botaoSextou.addEventListener('click' , sextou);

function sextou() {
    let sextas = document.getElementsByClassName('friday');
    for (let index = 0; index < sextas.length; index+=1) {
        if (sextas[index].innerText == 'Sextou!') {
            sextas[index].innerText = sextaFeira[index];
        } else {
            sextas[index].innerText = 'Sextou!'
        }
    }
}
 let dias = document.getElementsByClassName('day');

for (let index = 0; index < dias.length; index+=1) {
dias[index].addEventListener('mouseover' , zoomIn);
}
function zoomIn(event) {
    let dias = event.target;
    dias.style.fontSize = '25px';
}
for (let index = 0; index < dias.length; index+=1) {
    dias[index].addEventListener('mouseleave' , zoomOut);
}
function zoomOut(event) {
    let dias = event.target;
    dias.style.fontSize = '20px';
}

let tasks = document.getElementsByClassName('my-tasks')[0];

function inputTarefas() {
  let tasksInput = document.createElement('input');
  function areaDigitar() {
    tasks.appendChild(tasksInput);
    tasksInput.setAttribute('type' , 'text');
    tasksInput.setAttribute('name' , 'mytasks')
    tasksInput.setAttribute('placeholder' , 'Escreva sua tarefa');  
    tasksInput.setAttribute('id' , 'tarefas') 
  }
  areaDigitar();
  function enviarTarefas() {
    let botaoTarefas = document.createElement ('input');
    tasks.appendChild(botaoTarefas);
    botaoTarefas.setAttribute('type' , 'submit');
    botaoTarefas.setAttribute('value' , 'Adicionar');
    botaoTarefas.style.marginLeft = '5px';
    botaoTarefas.setAttribute('id' , 'tarefasBotao');
  } enviarTarefas();


} inputTarefas();

let btn = document.getElementById('tarefasBotao');

btn.addEventListener('click' , sendTarefa);

let listTasks = document.createElement('span');
tasks.appendChild(listTasks);
let listUl = document.createElement('ul');
listTasks.appendChild(listUl);
function sendTarefa() {
    const name = document.querySelector('#tarefas')
    const value = name.value;
    let listLi = document.createElement('li');
    listLi.innerText = value;
    listLi.setAttribute('id' , 'itemTarefa');
    listUl.appendChild(listLi);
}
let colors = document.getElementsByClassName('input-container')[0];
let btn2 = document.getElementById('btn-add');

btn2.addEventListener('click' , sendColor);
let span2 = document.createElement('span');
colors.appendChild(span2);
let listUlColor = document.createElement('ul');
span2.appendChild(listUlColor);
listUlColor.setAttribute('id' , 'idUlColor');
function criarLi () {
    let listLiColor = document.createElement('li');
    listLiColor.setAttribute('id' , 'colorId');
    listUlColor.appendChild(listLiColor);
}criarLi();


function sendColor() {
    const cor = document.querySelector('#task-input')
    const value2 = cor.value;
    let alteraCor = document.getElementById('colorId');
    alteraCor.innerText = value2;
    alteraCor.style.color = value2;
}



