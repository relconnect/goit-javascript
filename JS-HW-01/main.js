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
