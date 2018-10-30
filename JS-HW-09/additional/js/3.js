/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 1.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};

/*
* Вспомогательные функции
*/

/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
function getFormattedTime(time) {
    let data = new Date(time);
    let milisec = parseInt(data.getMilliseconds()/100);
    let min = data.getMinutes() < 10 ? '0'+data.getMinutes() : data.getMinutes();
    let sec = data.getSeconds() < 10 ? '0'+data.getSeconds() : data.getSeconds();
   return `${min}:${sec}.${milisec}`;  
  }

function updateClockface(elem, time) {
  // Используйте функцию getFormattedTime из задания #1
  elem.textContent = getFormattedTime(time);
}

/*
* Подсветка активной кнопки
*/
function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');  
  target.classList.add('active');
}

function startTimer(event){    
    startTime = new Date().getTime();    
    let target = event.target;
    setActiveBtn(target);
    id = setInterval(()=>{
      let curent = Date.now();
      let deltaTime =  curent - startTime;
      updateClockface(clockface,deltaTime);
    },100);
}

function stopTimer(event){
    let target = event.target;
    setActiveBtn(target);
    clearInterval(id);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

