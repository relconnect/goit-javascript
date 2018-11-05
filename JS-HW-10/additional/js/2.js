const btn = document.querySelector("#js-btn");
const output = document.querySelector("#js-output");

// Рассмотрим классическую ошибку при работе с асинхронным запросом
// Начинающий разработчик пытается записать "результат fetch" во внешнюю пременную и использовать ее
// ниже по коду сразу за fetch
let globalVariable = ""; // пустая строка

const onClick = () => {
  // Cделаем fetch к сервису
  fetch("https://api.myjson.com/bins/k9i31aasd")
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      console.log("data inside then: ", data); // {name: "Mango", age: 2, mood: "happy"}

      // Запишем результат в глобальную переменную
      globalVariable = data;
      // Тут все ок, данные есть в переменной
      console.log("globalVariable inside fetch: ", globalVariable);

      output.textContent = JSON.stringify(data);
    })
    .catch(error => {
      console.error("Error: ", error);
    });

  // Вне метода then данных нет, так как эта строка кода выполнится раньше чем придет ответ от сервера
  // В это время переменная globalVariable еще содержит пустую строку
  // Данные промиса доступны только в методе then самого промиса
  console.log("globalVariable outside fetch: ", globalVariable);
};

btn.addEventListener("click", onClick);
