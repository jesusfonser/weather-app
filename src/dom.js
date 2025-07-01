import { arrayDays } from "./data.js"


const bigDiv = document.getElementById("big-container");


function loaderSwitch() {
  const loader = document.querySelector(".loader");
  loader.classList.toggle("active");
}

function createGrid() {
    const divGrid = document.createElement("div");

}

function createCell(day) { 
    const divCell = document.createElement("div");
    divCell.setAttribute("class", "cell");

    const date_cell = document.createElement("div");
    date_cell.innerText = day.date;

    const body_cell = document.createElement("div");
    const img_body = document.createElement("img");
    img_body.src = day.img;
    const temp_cell = document.createElement("div");
    temp_cell.innerText = day.temp
    body_cell.appendChild(img_body);
    body_cell.appendChild(temp_cell);


    const desc_cell = document.createElement("div");
    desc_cell.innerText = day.weather;

    divCell.appendChild(date_cell);
    divCell.appendChild(body_cell);
    divCell.appendChild(desc_cell);

    bigDiv.appendChild(divCell);

}

export { loaderSwitch, createCell };
