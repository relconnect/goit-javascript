/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно 
      отображаться в абзаце с классом input-value 
*/

let elem = document.querySelector('.input');
let output = document.querySelector('.input-value');
let message = 'Input is in focus!';

elem.addEventListener('focus', showMsg);
elem.addEventListener('input', showText);

function showMsg(e){
    console.log(message);
}

function showText(e){
   let str =  e.target.value;
    output.textContent = `Current input value: ${str}`;
}