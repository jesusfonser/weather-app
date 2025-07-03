import { arrayDays } from "./data.js"

const gridWeather = document.getElementById("grid-weather");


function loaderSwitch() {
  gridWeather.innerHTML = '';
  const loader = document.querySelector(".loader");
  loader.classList.toggle("active");
}


function createCell(day) { 

    const divCell = document.createElement("div");
    divCell.setAttribute("class", "cell");

    const date_cell = document.createElement("div");
    date_cell.innerText = day.date;

    const body_cell = document.createElement("div");
    body_cell.setAttribute("class", "bodyCell")
    const img_body = document.createElement("img");
    img_body.src = day.img;
    img_body.setAttribute("class", "icon");
    const temp_cell = document.createElement("div");
    temp_cell.innerText = day.temp + "F";
    body_cell.appendChild(img_body);
    body_cell.appendChild(temp_cell);


    const desc_cell = document.createElement("div");
    desc_cell.setAttribute("class", "footCell")
    desc_cell.innerText = day.weather;

    divCell.appendChild(date_cell);
    divCell.appendChild(body_cell);
    divCell.appendChild(desc_cell);

    gridWeather.appendChild(divCell);

}

export { loaderSwitch, createCell };
