/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/
//, id = null, name = null, age = null
class UserApi {
  constructor(
    url = "https://test-users-api.herokuapp.com/users/",
    parent = document
  ) {
    this.url = url;
    this.parent = parent;
    this.list = parent.querySelector(".js-list");
    // this.id = id;
    // this.name = name;
    // this.age = age;
    this.getAllUsersBtn = parent.querySelector(".js-getusers");
    this.getUserByIdBtn = parent.querySelector(".js-getuser");
    this.addPerson = parent.querySelector(".js-add-user");
    this.removePerson = parent.querySelector(".js-remove-user");
    this.updatePerson = parent.querySelector(".js-update");
  }

  getAllUsers() {
    fetch(this.url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`ERROR: ${response.statusText}`);
        }
      })
      .then(data => {
        let arr = data.data;
        return arr;
      })
      .then(arr => {
        let liArray = arr.map(elem => {
          let liNode = document.createElement("li");
          let pID = document.createElement("p");
          let pName = document.createElement("p");
          let pAge = document.createElement("p");
          liNode.classList.add("list-group-item");
          pID.textContent = `User ID: ${elem.id}`;
          pName.textContent = `User name: ${elem.name}`;
          pAge.textContent = `User age: ${elem.age}`;
          liNode.append(pID, pName, pAge);
          return liNode;
        });
        this.list.append(...liArray);
      })
      .catch(err => console.log(err));
  }

  getUserById() {
    let id = document.querySelector(".js-getid").value;
    fetch(`${this.url}${id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`ERROR: ${response.statusText}`);
        }
      })
      .then(data => {
        let user = data.data;
        return user;
      })
      .then(elem => {
        let li = document.querySelector(".js-user");
        li.textContent = "";
        let pID = document.createElement("p");
        let pName = document.createElement("p");
        let pAge = document.createElement("p");
        pID.textContent = `User ID: ${elem.id}`;
        pName.textContent = `User name: ${elem.name}`;
        pAge.textContent = `User age: ${elem.age}`;
        li.append(pID, pName, pAge);
      });
  }
  addUser() {
    let name = document.querySelector(".js-name-value");
    let age = document.querySelector(".js-age-value");
    let user = {};
    user.name = name.value;
    user.age = +age.value;
    fetch("https://test-users-api.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`ERROR: ${response.statusText}`);
        }
      })
      .then(data => {
        console.log(data);
        if (data.status == 201) {
          alert("User added");
        } else alert("Try again!");
      })
      .catch(err => console.log(err));
  }

  removeUser() {
    let userId = document.querySelector(".js-remove-value").value;

    fetch(`https://test-users-api.herokuapp.com/users/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`ERROR: ${response.statusText}`);
        }
      })
      .then(data => {
        if (data.status == 200) {
          alert("User removed");
        } else {
          alert(data.status + " " + data.errors[0]);
        }
      })
      .catch(err => console.log(err));
  }
  updateUser() {
    let userId = document.querySelector(".js-update-id").value;
    let userName = document.querySelector(".js-update-name").value;
    let userAge = document.querySelector(".js-update-age").value;
    let user = {};
    user.name = userName;
    user.age = +userAge;
    fetch(`https://test-users-api.herokuapp.com/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`ERROR: ${response.statusText}`);
        }
      })
      .then(data => {
          console.log(data)
        if (data.status == 200) {
          alert("User update");
        } else {
          alert(data.status + " " + data.errors[0]);
        }
      })
      .catch(err => console.log(err));
  }

  start() {
    this.getAllUsersBtn.addEventListener("click", this.getAllUsers.bind(this));
    this.getUserByIdBtn.addEventListener("click", this.getUserById.bind(this));
    this.addPerson.addEventListener("click", this.addUser.bind(this));
    this.removePerson.addEventListener("click", this.removeUser.bind(this));
    this.updatePerson.addEventListener("click", this.updateUser.bind(this));
  }
}

let user = new UserApi();
user.start();
