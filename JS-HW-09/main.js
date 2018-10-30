

class StopWatch {
    constructor(parent = document){
        this.parent = parent;
        this.text = parent.querySelector('.js-time');
        this.list = parent.querySelector('.js-laps');
        this.startBtn = parent.querySelector('.js-start');
        this.lapBtn = parent.querySelector('.js-take-lap');
        this.resetBtn = parent.querySelector('.js-reset');
        this.setIntervalId = null;
        this.from = null;
        this.to = null;
    }

    startBtnOnClick (){
        if(this.startBtn.textContent.toLowerCase() == 'start'){
            this.start();
            this.startBtn.textContent = 'Pause';
        } else if(this.startBtn.textContent.toLowerCase() == 'pause'){
            this.pause();
            this.startBtn.textContent = 'Continue';
        }else {
            this.startBtn.textContent = 'Pause';
            this.continue();
        }
               
    }
    splitBtnOnClick(){
        if(this.startBtn.textContent.toLowerCase() == 'start'){
            return;
        } else if(this.startBtn.textContent.toLowerCase() == 'pause'){
            const time = this.toTimeString(Date.now() - this.from);
           this.list.insertAdjacentHTML('afterbegin',`<li>${time}</li>`)
        }else {
            const time = this.toTimeString(this.to - this.from);
            this.list.insertAdjacentHTML('afterbegin',`<li>${time}</li>`)
        }
    }
    continue (){
        this.from = Date.now() - (this.to - this.from);
        this.step();
    }
    pause(){
        this.to = Date.now();
        clearInterval(this.setIntervalId);
        this.text.textContent = this.toTimeString(this.to - this.from);
    }
    start(){
        this.from = Date.now();    
        this.step(); 
    }
    step() {
        this.setIntervalId = setInterval(() => {
            this.text.textContent = this.toTimeString(Date.now() - this.from);
        }, 100);
    }

    resetBtnOnClick(){
        clearInterval(this.setIntervalId);
        this.text.textContent = this.toTimeString(0);
        this.startBtn.textContent = 'Start';
        this.list.innerHTML = '';
    }
    toTimeString(timestamp){
        let data = new Date(timestamp);
        let milisec = parseInt(data.getMilliseconds()/100);
        let min = data.getMinutes() < 10 ? '0'+data.getMinutes() : data.getMinutes();
        let sec = data.getSeconds() < 10 ? '0'+data.getSeconds() : data.getSeconds();
        return `${min}:${sec}.${milisec}`;  
    }
    run(){
        this.startBtn.addEventListener('click', this.startBtnOnClick.bind(this));
        this.resetBtn.addEventListener('click', this.resetBtnOnClick.bind(this));
        this.lapBtn.addEventListener('click', this.splitBtnOnClick.bind(this));
    }
}

const stopWatch = new StopWatch();
stopWatch.run(); 




// const clockface = document.querySelector(".js-time");
// const startBtn = document.querySelector(".js-start");
// const resetBtn = document.querySelector(".js-reset");
// const lapBtn = document.querySelector(".js-take-lap");
// const savedTime = document.querySelector(".js-laps");
// let activeTimer = null;

// function getFormattedTime(time) {
//     let data = new Date(time);
//     let milisec = parseInt(data.getMilliseconds()/100);
//     let min = data.getMinutes() < 10 ? '0'+data.getMinutes() : data.getMinutes();
//     let sec = data.getSeconds() < 10 ? '0'+data.getSeconds() : data.getSeconds();
//    return `${min}:${sec}.${milisec}`;  
//   }

// function updateClockface(elem, time) {
//   // Используйте функцию getFormattedTime из задания #1
//   elem.textContent = getFormattedTime(time);
// }

// /*
// * Подсветка активной кнопки
// */
// function setActiveBtn(target) {
//   if(target.classList.contains('active')) {
//     return;
//   }  
//   startBtn.classList.remove('active');
//  /// stopBtn.classList.remove('active');  
//   target.classList.add('active');
// }

// function startTimer(event){ 
//   let startTime = new Date().getTime();   
//   let target = event.target;
//   let curent = null;
//   let deltaTime = null;
//   let pausedTime = 0;
//   curent = Date.now();
//     if(activeTimer){
//         startBtn.textContent = 'Continue';
//         clearInterval(id);         
//         activeTimer = false;  
//         pausedTime = new Date().getTime();
//     } else {      
//         startBtn.textContent = 'Pause';
//         activeTimer = true;
//         setActiveBtn(target);
        
//         id = setInterval(()=>{
//         curent = Date.now();
//           deltaTime =  curent - startTime + pausedTime ;
         
//           updateClockface(clockface,deltaTime);
//         },100);
//     }
   
// }

// function stopTimer(event){
//     let target = event.target;
//     setActiveBtn(target);
//     clearInterval(id);
// }

// startBtn.addEventListener('click', startTimer);
// stopBtn.addEventListener('click', stopTimer);