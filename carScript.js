document.body.onload = addElement;
const myArr = [
    "Audi RS7", "2023", "170 000$", "images/rs7.jpeg",
    "AMG GT BRABUS", "2024", "210 000$", "images/benz.jpg",
    "Porsche GT3RS", "2024", "250 000$", "images/GT3RS.webp",
    "Ferrari SF90", "2023", "300 000$", "images/sf90.jpeg",
    "BMW M5","2021","100 000$","images/m5.jpg",
    "Audi RS6","2021","120 000$","images/rs6.jpg",
    "Mercedes G-class","2023","150 000$","images/gega.jpg",
    "Maybach S-class","2024","235 000$","images/maybach.jpg",
    "Porsche Taycan","2024","140 000$","images/taycan.jpg",
    "Audi A4","2020","70 000$","images/a4.jpg"
];
function addElement(){
    let counter = 0;
    let i = 0;
        for(i;i<myArr.length-3;i+=4){
            if(counter%3==0){
            var row = document.createElement("div");
            row.classList.add("row");
            document.body.appendChild(row);
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
            counter++;}
            else{
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
            counter++;}
        }
    }
 