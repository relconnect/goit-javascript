const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const userLogin = prompt('Введите Login');



const isLoginValid = login => {
   
        return login === null ? 0 : login.length > 4 && login.length < 16;   
   }

const isLoginUnique = (allLogins, login) => {  
    
        return allLogins.includes(login);
    }

const addLogin = function(logins, login) {
    
    if(!isLoginValid(login)){
        alert(`Ошибка! Логин должен быть от 4 до 16 символов`);
        return;
    }else {
       if(!isLoginUnique(logins, login )) {
        logins.push(login);
        alert('Логин успешно добавлен!');
        
       } else{
        alert(`Логин ${login} уже используется!`);
       }
    }      
  };

  addLogin(logins, userLogin);












// ================2=====================
// const formatString = str => {
//     console.log(str.length);
//     let newStr= '';
//     if(str.length < 40) {
//       return str;
//     }
//     newStr = str.slice(0, 40); 
//     return newStr + '...';
//   }
  
//   // Вызовы функции для проверки
//   console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // веconsole.logя оригинальная строка
  
//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка
  
//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка


// ===========3============================
// const checkForSpam = str => {
//     let newStr = '';
//     newStr=  str.toLowerCase();
//     if( newStr.includes('sale') || newStr.includes('spam')){
//       return 'true';
//     }
//     return 'false';
//   }
//   // Вызовы функции для проверки
//   console.log( checkForSpam('Latest technology news') ); // false
  
//   console.log( checkForSpam('JavaScript weekly newsletter') ); // false
  
//   console.log( checkForSpam('Get best sale offers now!') ); // true
  
//   console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true
// =======================4=============================
// const getPx = str => {
//     if (typeof str !== 'string')
//      return 'null';
//     let number = parseFloat(str);
//     if(number < 0)
//         return 'null';
//     return number;
// }

// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null
// =======================7=============================
// const uniqueNumbers  = [2, 1, 4, 9];
// const addUniqueNumbers = (...ress)=>{
//   const arguments = ress;
//   for( val of arguments){
//       if(uniqueNumbers.includes(val) ){
//           continue;
//       }
//       uniqueNumbers.push(val);
//   }
//   return uniqueNumbers;
// }
// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8,9,9,9,9);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
//======================8======================
/*
  Создайте функцию removeFromArray(arr), 
  которая получает 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/

// Вызовы функции для проверки
// const removeFromArray = function(arr) {    
//     let otherArguments = Array.from(arguments);
//     otherArguments.splice(0,1);
//     for(element of otherArguments){
//         if (arr.includes(element)){
//             let idx = arr.indexOf(element);
//             while (idx != -1) {
//                 arr.splice(idx, 1);;
//                 idx = arr.indexOf(element);
//               }
//         }
//     }
//     return arr;
// }

// const removeFromArray = function() {    
//     let [arr, ...otherArguments] = arguments;
//     for(element of otherArguments){
//         if (arr.includes(element)){
//             let idx = arr.indexOf(element);
//             while (idx != -1) {
//                 arr.splice(idx, 1);;
//                 idx = arr.indexOf(element);
//               }
//         }
//     }
//     return arr;
// }

// console.log(
//     removeFromArray([1, 2, 3, 4, 5,4,5,4,5,4,4,4,4,4,4,4], 2, 4)
//   ); // [1, 3, 5]
  
//   console.log(
//     removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
//   ); // [12, 8, 17]