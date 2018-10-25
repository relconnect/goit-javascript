/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/
let list = document.querySelector('.list');

list.addEventListener('click', dell);

function dell (e) {
    if(e.target.nodeName == 'BUTTON'){     
        e.target.parentNode.remove();
    }
   
}