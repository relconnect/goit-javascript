/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому 
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

const input = document.querySelector("input");
const submitBtn = document.querySelector(".js-submit");
const result = document.querySelector(".js-result");
const apiUrl = "https://restcountries.eu/rest/v2/name/";

submitBtn.addEventListener("click", fetchCountryData);

/*
  @param {FormEvent} evt
*/
function fetchCountryData(e) {
  let inputQuery = input.value;
  e.preventDefault();
  fetch(`https://restcountries.eu/rest/v2/name/${inputQuery}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`Страна не существует: ${response.statusText}`);
    })
    .then(res => {
        result.textContent="";
        res.map(({name,capital,currencies,flag}) => {
            result.innerHTML+= `Страна: ${name}<br>`; 
            result.innerHTML+= `Столица: ${capital}<br>`;
            result.innerHTML+= `Валюта: ${currencies[0].name}<br>`;
            result.innerHTML+= `<img src="${flag}" alt="" style="width: 150px"><br>`;
        })
        console.log(res);
        //result.textContent += ress
    })
    .catch(error => {
        result.textContent = "Error: " + error.message;
    });
}
