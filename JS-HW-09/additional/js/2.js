/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

function getFormattedTime(time) {
    let data = new Date(time);
    let milisec = parseInt(data.getMilliseconds()/100);
    let min = data.getMinutes() < 10 ? '0'+data.getMinutes() : data.getMinutes();
    let sec = data.getSeconds() < 10 ? '0'+data.getSeconds() : data.getSeconds();
   return `${min}:${sec}.${milisec}`;  
  }
  
  console.log(
    getFormattedTime(1523621052858)
  ); // 04:12.8
  
  console.log(
    getFormattedTime(1523621161159)
  ); // 06:01.1
  
  console.log(
    getFormattedTime(1523621244239)
  ); // 07:24.2
   
  
   