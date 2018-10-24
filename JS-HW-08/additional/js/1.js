// 1
let btn = document.querySelector('.button');
let counter = 0;
btn.addEventListener('click', function(e){
    console.log(e);
    counter += 1;
    btn.textContent = counter;
})

// 2
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/
