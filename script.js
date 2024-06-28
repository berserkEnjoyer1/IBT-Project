document.body.onload = addElement;

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
const myArr = [
  "Audi RS7", "2023", "170 000$", "images/rs7.jpeg",
  "AMG GT BRABUS", "2024", "210 000$", "images/benz.jpg",
  "Porsche GT3RS", "2024", "250 000$", "images/GT3RS.webp"
];

function addElement(){
  var row = document.createElement("div");
  row.classList.add("row");
  document.body.appendChild(row);
  for(let i = 0;i<myArr.length-3;i+=4){
    let column = document.createElement("div");
    column.classList.add("column");
    row.appendChild(column);
    let card = document.createElement("div");
    card.classList.add("card");
    column.appendChild(card);
    let img = new Image(); img.src = `${myArr[i+3]}`;img.style = "width:100%";
    card.appendChild(img);
    let container = document.createElement("div");
    container.classList.add("container");
    card.appendChild(container);
    let header = document.createElement("h2");                               
    header.innerText=`${myArr[i]}`;
    container.appendChild(header);
    let title = document.createElement("p");
    title.classList.add("title");
    title.innerText = `${myArr[i+1]}`;
    container.appendChild(title);
    a = document.createElement("p");
    button = document.createElement("button");
    button.classList.add("button");
    button.innerText=`${myArr[i+2]}`;
    a.appendChild(button);
    container.appendChild(a);
  }
}



