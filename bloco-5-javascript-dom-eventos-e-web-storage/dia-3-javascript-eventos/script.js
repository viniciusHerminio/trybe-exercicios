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

  let listDays = document.getElementById("days");

 for (const key in decemberDaysList) {
        const element = decemberDaysList[key];
        let day = document.createElement("li");
        day.innerText = element;
        if (element == 24 || element == 25 || element == 31) {
            day.classList.add('day' , 'holiday');
        } else if (element == 4 || element == 11 || element == 18 || element == 25) {
            day.classList.add('day' , 'friday');
        } else {
            day.classList.add('day');
        }
        listDays.appendChild(day);
    }
 