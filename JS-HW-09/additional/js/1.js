/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/

btnStart = document.querySelector(".js-start");
btnStop = document.querySelector(".js-stop");
const colors = [
    "#FFFFFF",
    "#F44336",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548"
  ];


class Randomizer {
    constructor(colors){
        this.timerId = null;
        this.colors = colors;
        this.isActive = false;
       
    }
  
    start(){
        if (!this.isActive) {
            this.timerId = setInterval(Randomizer.getRandomInt, 1000, 0, 7, this.colors);
      
            this.isActive = true;
          }
    }
    stop(){
        clearInterval(this.timerId);
    this.isActive = false;
  }

  static getRandomInt(min, max, color) {
    let number = Math.floor(Math.random() * (max - min)) + min;
    document.body.style.backgroundColor = color[number];
  }

    }   


let timer = new Randomizer(colors);


btnStart.addEventListener("click", timer.start.bind(timer));
btnStop.addEventListener("click", timer.stop.bind(timer));

