/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/

let list = document.querySelector(".inputs");
list.addEventListener("blur", checking, true);

function checking(e) {
  let size = Number(e.target.dataset.length);
  let value = Number(e.target.value);
  if (size > value) {
    e.target.classList.add("err");
    e.target.focus();
  } else {
    if (e.target.classList.contains("err"));
    e.target.classList.remove("err");
  }
}
