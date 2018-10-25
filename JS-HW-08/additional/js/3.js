/*
  Дан спан и кнопки +1, -1, которые будут увеличивать 
  и уменьшать на 1 значение спана. Сделайте так, чтобы 
  это значение не могло стать меньше нуля.
*/
let addBtn = document.querySelector(".js-add");
let addSub = document.querySelector(".js-sub");
let valuSpan = document.querySelector(".js-value");

addBtn.addEventListener("click", changeValue);
addSub.addEventListener("click", changeValue);
function changeValue(e) {
  e.stopPropagation();
  if (e.target.classList.contains("js-add")) {
    valuSpan.textContent = Number(valuSpan.textContent) + 1;
  } else {
    if (!Number(valuSpan.textContent)) {
      return;
    } else {
      valuSpan.textContent = Number(valuSpan.textContent) - 1;
    }
  }
}
