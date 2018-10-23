/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс menu-link-active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пункотв меню может быть произвольное количество, используйте
  прием "Делегирование событий". Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

const menu = document.querySelector(".js-menu");
const list = menu.querySelectorAll(".menu-link");

menu.addEventListener("click", handleMenuClick);

function handleMenuClick({ target }) {
  const nodeName = target.nodeName;
  event.preventDefault();
  if (nodeName !== "A") return;
  list.forEach(link => {
    if (link !== target) {
      link.classList.remove("menu-link-active");
    } else {
      link.classList.add("menu-link-active");
    }
  });
}

// let str = "aaabbcccc";
// const sum = function(str) {
//   let arr = str.split("");
//   let arr2 = [];
//   let counter = 0;
//   let str2 = "";
  
//   for (elem of arr) {
//     if (arr2.includes(elem)) {
//       continue;
//     } else {
//       arr2.push(elem);
//     }
//   }
//   for (x of arr2) {
//     let num = arr.filter(item => item === x);
//     str2 += x +num.length;
//   }
//  console.log(str2);
// };
// sum(str);
let str = "aaabbcccc";
let str2='';
let count = 1;
for (i=0; i< str.length; i++){
  
  if(str[i] == str[i+1]){
    count += 1;
  } else {
    str2 += str[i] + count;
    count = 1;
    continue;
  }
}
console.log(str2);


