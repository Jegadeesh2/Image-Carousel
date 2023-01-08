//Elements

const firstImage = document.querySelector("img");
const nextEle = document.querySelector(".next-btn");
const pervEle = document.querySelector(".prev-btn");

//variables

var images = [
  "images/burger.jpeg",
  "images/pasta.jpeg",
  "images/pizza.jpeg",
  "images/chicken.jpeg",
  "images/dessert.jpeg"
];
var counter = 0;

//Functions

function next() {
  counter++;
  if (counter >= images.length) {
    counter = 0;
    firstImage.src = images[counter];     
  } else {
    firstImage.src = images[counter];
  }
}

function prev() {
  counter--;
  if (counter < 0) {
    counter = images.length-1;
    firstImage.src = images[counter];
  } else {
    firstImage.src = images[counter];
  }
}