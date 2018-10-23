"use strict";

// FIRST ADDITIONAL
let list = document.querySelectorAll('.categories > li');
list.forEach(elem => {
    console.log("Категория: " + elem.firstChild.textContent.trim());
    console.log(elem.firstElementChild.children.length)
});

// SECOND ADDITIONAL

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
let list2 = document.querySelector('.list');
list2.firstElementChild.style.color = 'red';


//THIRD ADDITIONAL

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
let list3 = document.querySelector('.list3');



let addList = (elements, parrent) => {
    elements.forEach(elem => {
        let item = document.createElement('li');
        item.textContent = elem;
        parrent.appendChild(item);
    })
   
}
addList(elements,list3);



//FOURTH ADDITIONAL
/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/
let list4 = document.querySelector('.list4');
let userInput;
// do{
//     userInput = prompt('Enter text');
//     if(userInput !==null){
//         let item4 = document.createElement('li');
//         item4.textContent = userInput;
//         list4.appendChild(item4);
       
//     } else{
//         break;
//     }
    
// } while(true);


console.log(list4);

//FIFTH ADDITIONAL 
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию getInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
let checkedArray = document.querySelectorAll('.size-filter input:checked');
let getInputsData = (inputs) => {
    let sizes = [];
    // inputs.forEach(elem => sizes.push(elem.value));
    let elemargs = [...inputs];
    sizes = elemargs.map(elem => elem.value);
   console.log(sizes);
}
getInputsData(checkedArray);


// SIXTH ADDITIONAL
/*
  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
const createPostCard = () => {

    let node = document.createElement('div');
    node.classList.add('post');

    let img = document.createElement('img');
    img.classList.add('post__image');
    img.setAttribute("src", "http://via.placeholder.com/400x150");
    img.setAttribute("alt", "post image");


    let heading = document.createElement('h2');
    heading.classList.add('post__title');
    heading.textContent = 'Lorem ipsum dolor';

    let text = document.createElement('p');
    text.classList.add('post__text');
    text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos eatemporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamusconsequuntur, qui modi nesciunt veritatis distinctio rem!";

    let link = document.createElement('a');
    link.classList.add('button');
    link.setAttribute("href", "#");
    link.textContent = 'Read more';

    node.append(img,heading,text,link)
    
    document.querySelector('.root').append(node);
}
createPostCard();


 /*
  <div class="post">
          <img class="post__image" src="http://via.placeholder.com/400x150" alt="post image">
          <h2 class="post__title">Lorem ipsum dolor</h2>
          <p class="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea
              temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus
              consequuntur, qui modi nesciunt veritatis distinctio rem!</p>

          <a class="button" href="#">Read more</a>
  </div>
*/


// SEVENTH ADDITIONAL

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
function getRandomInt(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;
}

const createBoxes = num => {
  let height = 0;
  let width = 0;
  while(num){
    num -= 1;
    let box = document.createElement('div');
    height = height + 30;
    width = width + 30;
    let red = getRandomInt(0, 256);
    let green = getRandomInt(0, 256);
    let blue = getRandomInt(0, 256); 
    box.style.height = `${height}px` ;
    box.style.width = `${width}px` ;
    box.style['background-color'] = `rgb(${red},${green}, ${blue})`;
    document.querySelector('#root').append(box);
  }  
}

createBoxes(8);

let adr = function (str){
  let index = 0;
  let counter = 0;
  let sttr = '';
while(a[i] == a[i+1]){
  couner++;
  index++
}
sttr = sttr +counter;
conter = 0

}