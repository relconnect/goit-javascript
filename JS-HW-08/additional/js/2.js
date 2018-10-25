/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/

const btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click', summ);



function summ (){
    let input = document.querySelectorAll('input');
    let result = document.querySelector('.result');
    let arr = Array.from(input);
    let sum = arr.reduce((acc, elem) => Number(acc)  + Number(elem.value),0) ;
    result.textContent = sum;
}