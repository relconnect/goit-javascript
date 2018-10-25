/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Используйте делегирование.
*/
const list = document.querySelector('.images');
console.log(list);
const imgList = list.querySelectorAll('img');
console.log(imgList);


list.addEventListener('click', show);

function show (e){
    
    alert(e.target.src);
}