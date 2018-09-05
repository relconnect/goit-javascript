let arr = [];
let number;
let summ = null;
do {
  number = prompt("Enter a number");
  if (number === null) break;
  isNumber = Number(number);
  if (!Number.isNaN(isNumber)) {
    arr.push(isNumber);
  } else {
    break;
  }
} while (number != "");

if (arr.length) {
  for (let val of arr) {
    summ += val;
  }
  alert(`Общая сумма чисел равна: ${summ}`);
} else {
  alert("Массив пустой!");
}
