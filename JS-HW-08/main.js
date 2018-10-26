const galleryItems = [
  {
    preview: "img/preview-1.jpg",
    fullview: "img/fullview-1.jpg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpg",
    fullview: "img/fullview-2.jpg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpg",
    fullview: "img/fullview-3.jpg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpg",
    fullview: "img/fullview-4.jpg",
    alt: "alt text 4"
  },
  {
    preview: "img/preview-5.jpg",
    fullview: "img/fullview-5.jpg",
    alt: "alt text 5"
  },
  {
    preview: "img/preview-6.jpg",
    fullview: "img/fullview-6.jpg",
    alt: "alt text 6"
  }
];

// document.addEventListener('DOMContentLoaded',createGalary);

// function createGalary(){

// }

const fullImg = document.querySelector(".fullview");
const prevImgages = document.querySelector(".preview");

prevImgages.addEventListener('click', show);

function createPrevImg(elem) {
  let liNode = document.createElement("li");
  let imgNode = document.createElement("img");
  imgNode.setAttribute("src", elem.preview);
  imgNode.setAttribute("alt", elem.alt);
  imgNode.dataset.fullview = elem.fullview;
  liNode.append(imgNode);
  return liNode;
}

function createPrevImgGallary (obj, number = 1){
  let imgArray = obj.map(el => createPrevImg(el));

  createfullviewImg(imgArray[number-1].firstElementChild.dataset.fullview, imgArray[number].firstElementChild.alt);
  imgArray[number-1].classList.add("active");
  return imgArray;  
}

function createfullviewImg(src = 'img/fullview-1.jpg', alt = 'alt text 1') {
  let fullImgNode = document.createElement('img'); 
  fullImgNode.setAttribute("src", src);
  fullImgNode.setAttribute("alt", alt);
  fullImg.append(fullImgNode);
}

PrevImagesArray = createPrevImgGallary(galleryItems,1);

prevImgages.append(...PrevImagesArray);

function show({target}){ 
  let uri = target.dataset.fullview;
  let altText = target.alt;
  fullImg.firstElementChild.src = uri;
  fullImg.firstElementChild.alt = altText;   

  PrevImagesArray.forEach(link => {
    if (link.firstElementChild !== target) {
      link.classList.remove("active");
    } else {
      link.classList.add("active");
    }
  });
}

