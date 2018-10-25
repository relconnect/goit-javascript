/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Send" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', resultInfo);


function resultInfo(e){
e.preventDefault(); 
let option = document.querySelector('input:checked');   
    result.textContent =`Result: ${option.value}`;
}
