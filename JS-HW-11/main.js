// const container = document.querySelector('.root');
// const source = document.querySelector('#card').innerHTML.trim();
// const template = Handlebars.compile(source);

// const laptops = [
//   {
//     size: 13,
//     color: "white",
//     price: 28000,
//     release_date: 2015,
//     name: 'Macbook Air White 13"',
//     img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
//     descr:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
//   },
//   {
//     size: 13,
//     color: "gray",
//     price: 32000,
//     release_date: 2016,
//     name: 'Macbook Air Gray 13"',
//     img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
//     descr:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
//   },
//   {
//     size: 13,
//     color: "black",
//     price: 35000,
//     release_date: 2017,
//     name: 'Macbook Air Black 13"',
//     img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
//     descr:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
//   },
//   {
//     size: 15,
//     color: "white",
//     price: 45000,
//     release_date: 2015,
//     name: 'Macbook Air White 15"',
//     img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
//     descr:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
//   },
//   {
//     size: 15,
//     color: "gray",
//     price: 55000,
//     release_date: 2016,
//     name: 'Macbook Pro Gray 15"',
//     img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
//     descr:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
//   },
//   {
//     size: 15,
//     color: "black",
//     price: 45000,
//     release_date: 2017,
//     name: 'Macbook Pro Black 15"',
//     img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
//     descr:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
//   },
//   {
//     size: 17,
//     color: "white",
//     price: 65000,
//     release_date: 2015,
//     name: 'Macbook Air White 17"',
//     img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
//     descr:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
//   },
//   {
//     size: 17,
//     color: "gray",
//     price: 75000,
//     release_date: 2016,
//     name: 'Macbook Pro Gray 17"',
//     img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
//     descr:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
//   },
//   {
//     size: 17,
//     color: "black",
//     price: 80000,
//     release_date: 2017,
//     name: 'Macbook Pro Black 17"',
//     img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
//     descr:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
//   }
// ];

// let btn = document.querySelector(".submit");
// let reset = document.querySelector(".reset");

// // let createFilteredCards = ({ size, color, release_date }) => {
// //   let filters = [];
// //   filters = filters.concat(size, color, release_date);
// //   let filteredCards = laptops.filter(elem =>
// //     Object.values(elem).some(el => filters.includes(el))
// //   );  

// //   render(filteredCards);
// // };


// let createFilteredCards = (obj) => {
//   console.log(obj);
//   let filters = obj;
//   let filteredCards = laptops.filter(elem => {
//     let includeColor = true;
//     let includeSize = true;
//     let includeDate =true;
 
//     if(filters.color.length != 0){
//       includeColor = filters.color.includes(elem.color);
//     };
//     if(filters.size.length != 0){
//       includeSize = filters.size.includes(elem.size);
//     };
//     if(filters.release_date.length != 0){
//       includeDate = filters.release_date.includes(elem.release_date);
//     };
//     return includeColor && includeSize && includeDate;
//   })  
//   render(filteredCards);
// };


// let render = (arr) => {
//   const markup = arr.reduce((acc, item) => acc + template(item), '');
//   container.innerHTML = markup;

// };

// btn.addEventListener("click", e => {
//   e.preventDefault();
//   const filter = { size: [], color: [], release_date: [] };
//   const nameArray = document.querySelectorAll('input[type="checkbox"]:checked');

//   let checkedList = Array.from(nameArray);
  
//   checkedList.forEach(elem => {
//     if (elem.name == "size") {
//       filter.size.push(+elem.value);
//     } else if (elem.name == "color") {
//       filter.color.push(elem.value);
//     } else {
//       filter.release_date.push(+elem.value);
//     }
//   });

//   createFilteredCards(filter);
// });

// reset.addEventListener("click",e =>{
//   let arr = [...laptops]; 
//   render(arr);
// });

// document.addEventListener("DOMContentLoaded", function(){
//   let arr = [...laptops]; 
//   render(arr);
// });
'use strict';

var container = document.querySelector('.root');
var source = document.querySelector('#card').innerHTML.trim();
var template = Handlebars.compile(source);

var laptops = [{
  size: 13,
  color: "white",
  price: 28000,
  release_date: 2015,
  name: 'Macbook Air White 13"',
  img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
  descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
}, {
  size: 13,
  color: "gray",
  price: 32000,
  release_date: 2016,
  name: 'Macbook Air Gray 13"',
  img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
  descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
}, {
  size: 13,
  color: "black",
  price: 35000,
  release_date: 2017,
  name: 'Macbook Air Black 13"',
  img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
  descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
}, {
  size: 15,
  color: "white",
  price: 45000,
  release_date: 2015,
  name: 'Macbook Air White 15"',
  img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
  descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
}, {
  size: 15,
  color: "gray",
  price: 55000,
  release_date: 2016,
  name: 'Macbook Pro Gray 15"',
  img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
  descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
}, {
  size: 15,
  color: "black",
  price: 45000,
  release_date: 2017,
  name: 'Macbook Pro Black 15"',
  img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
  descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
}, {
  size: 17,
  color: "white",
  price: 65000,
  release_date: 2015,
  name: 'Macbook Air White 17"',
  img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
  descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
}, {
  size: 17,
  color: "gray",
  price: 75000,
  release_date: 2016,
  name: 'Macbook Pro Gray 17"',
  img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
  descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
}, {
  size: 17,
  color: "black",
  price: 80000,
  release_date: 2017,
  name: 'Macbook Pro Black 17"',
  img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
  descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
}];

var btn = document.querySelector(".submit");
var reset = document.querySelector(".reset");

// let createFilteredCards = ({ size, color, release_date }) => {
//   let filters = [];
//   filters = filters.concat(size, color, release_date);
//   let filteredCards = laptops.filter(elem =>
//     Object.values(elem).some(el => filters.includes(el))
//   );  

//   render(filteredCards);
// };


var createFilteredCards = function createFilteredCards(obj) {
  console.log(obj);
  var filters = obj;
  var filteredCards = laptops.filter(function (elem) {
    var includeColor = true;
    var includeSize = true;
    var includeDate = true;

    if (filters.color.length != 0) {
      includeColor = filters.color.includes(elem.color);
    };
    if (filters.size.length != 0) {
      includeSize = filters.size.includes(elem.size);
    };
    if (filters.release_date.length != 0) {
      includeDate = filters.release_date.includes(elem.release_date);
    };
    return includeColor && includeSize && includeDate;
  });
  render(filteredCards);
};

var render = function render(arr) {
  var markup = arr.reduce(function (acc, item) {
    return acc + template(item);
  }, '');
  container.innerHTML = markup;
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  var filter = { size: [], color: [], release_date: [] };
  var nameArray = document.querySelectorAll('input[type="checkbox"]:checked');

  var checkedList = Array.from(nameArray);

  checkedList.forEach(function (elem) {
    if (elem.name == "size") {
      filter.size.push(+elem.value);
    } else if (elem.name == "color") {
      filter.color.push(elem.value);
    } else if (elem.name == "release_date"){
      filter.release_date.push(+elem.value);
    }
  });

  createFilteredCards(filter);
});

reset.addEventListener("click", function (e) {
  var arr = [].concat(laptops);
  render(arr);
});

document.addEventListener("DOMContentLoaded", function () {
  var arr = [].concat(laptops);
  render(arr);
});