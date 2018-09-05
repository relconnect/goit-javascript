let userInput;
const numbers = [];
let total = 0;
do{
  userInput = prompt('Enter a number', 0);
  if (!Number.isNaN(+userInput)) {
    numbers.push(+userInput);
  }else {
    alert("It's not a number! Please try again!");   
  }
} while(userInput !== null);
if (numbers.length !== 0) {
    for (let val of numbers) {
      total += val;
    }
    alert(`Общая сумма чисел равна: ${total}`);
  } 

// let arr = [];
// let number;
// let summ = null;
// do {
//   number = prompt("Enter a number");
//   if (number === null) break;
//   isNumber = Number(number);
//   if (!Number.isNaN(isNumber)) {
//     arr.push(isNumber);
//   } else {
//     break;
//   }
// } while (number != "");

// if (arr.length) {
//   for (let val of arr) {
//     summ += val;
//   }
//   alert(`Общая сумма чисел равна: ${summ}`);
// } else {
//   alert("Массив пустой!");
// }


