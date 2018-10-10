const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";
let userLogin;
let userPassword;

userLogin = prompt("Введите Login");
if (userLogin === null) {
  alert("Отменено пользователем!");
} else if (userLogin != adminLogin) {
  alert("Доступ запрещен!");
} else {
  userPassword = prompt("Введите пароль");
  if (userPassword === null) {
    alert("Отменено пользователем!");
  } else if (userPassword != adminPassword) {
    alert("Доступ запрещен!");
  } else {
    alert("Добро пожаловать!");
  }
}

// const min = 1;
// const max = 100;
// for(let i = min; i < max; i++){
//   if(i%3 == 0){
//     console.log("Fizz");
//   }else if(i%5 == 0 && i%3 !=0 ){
//     console.log("Bizz");
//   }else{
//     console.log(i);
//   }  
// }

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for(let i of numbers){
//   if(num< i){
//     newArray.push(i);
//   }  
// }
// console.log(newArray);

// const string = "May the force be with you";
// let longestWord = "";
// let arr = string.split(" ");
// for(let i of arr){
//   if(i.length > longestWord.length){
//     longestWord = i;
//   }

// }


// alert(longestWord); // 'force'

// let arr = [];
// let num;
// let summ = 0;
// do{
//   num = prompt("Enter a number");  
//   isNumber = Number(num);
//   if( !Number.isNaN(isNumber) && num != null){
//     arr.push(num);
//   } else {
//     break;
//   }

// } while(true);

// for(let val of arr){
//   summ += +val;
//  }
//  alert(summ);






