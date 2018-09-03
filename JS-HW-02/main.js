let arr = [];
let num;
let summ = 0;
do{
  num = prompt("Enter a number");  
  isNumber = Number(num);
  if( !Number.isNaN(isNumber) && num != null){
    arr.push(num);
  } else {
    break;
  }

} while(true);

for(let val of arr){
  summ += +val;
 }
 alert(`Общая сумма чисел равна: ${summ}`);






