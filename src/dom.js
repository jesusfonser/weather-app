import { arrayDays, getIcon } from "./data.js"

const gridWeather = document.getElementById("grid-weather");
const divDetails = document.getElementById("details");
const returner = document.getElementById("return");
const temp_toggle = document.getElementById("temp-select")

/*

1.- Guardar en algún lugar el div con todas las celdas una vez cargado.
2.- Crear el segundo div con el tiempo más detallado
3.- Crear un botón para cambiar temperaturas de C a F


  const temps = document.querySelectorAll(".temp-cell");
  Array.from(temps, (e) => e.innerHTML = '')

*/


temp_toggle.addEventListener("change", () =>{
  const gridMode = Boolean(document.querySelectorAll("#grid-weather > div").length);
  const detailsMode = divDetails.classList.contains("active");
  let temps;

  if (gridMode){
    temps = Array.from(document.querySelectorAll(".temp-cell"));
  } else if(detailsMode){
    temps = Array.from(document.querySelectorAll(".td_t"));
    const eltemp_cell = document.querySelector(".temp-cell");
    console.log(eltemp_cell)
    eltemp_cell.innerText = getTemp(eltemp_cell.innerText);

  } else{
    return
  }
    Array.from(temps, (e) =>{
      const t_prev = e.innerText
      e.innerText = getTemp(t_prev);
    })

})


function getTemp(temp){
  if(temp_toggle.value === "F"){
    let t = parseFloat(temp);
    t = (t * 9 / 5) + 32
    return t.toFixed(1).toString() + "F";
  } else {
    let t = parseFloat(temp);
    t = (t - 32) * 5 / 9
    return t.toFixed(1).toString() + "C";
  }
}

function loaderSwitch() {
  gridWeather.innerHTML = '';
  const loader = document.querySelector(".loader");
  loader.classList.toggle("active");
}

function cleanDetails(){
  if(divDetails.classList.contains("active")){
    divDetails.innerHTML = '';
    divDetails.classList.toggle("active");
  }
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
    temp_cell.setAttribute("class", "temp-cell")
    temp_cell.innerText = day.temperature;
    body_cell.appendChild(img_body);
    body_cell.appendChild(temp_cell);


    const desc_cell = document.createElement("div");
    desc_cell.setAttribute("class", "footCell")
    desc_cell.innerText = day.weather;

    divCell.appendChild(date_cell);
    divCell.appendChild(body_cell);
    divCell.appendChild(desc_cell);

    divCell.addEventListener("click", () => dayDetails(day, img_body, temp_cell))

    gridWeather.appendChild(divCell);

}

function dayDetails(day, icon, temp){
  gridWeather.innerHTML = '';
  divDetails.classList.toggle("active");

  returner.classList.toggle("active");

  const h1data = document.createElement("h1");
  h1data.innerHTML = day.weather;
  divDetails.appendChild(h1data);

  const div1 = document.createElement("div");
  div1.appendChild(icon);
  div1.setAttribute("id", "div1")

  const temperatura = temp
  const div1data = document.createElement("div")
  div1data.setAttribute("id", "div1data");
  temperatura.setAttribute("id", "div1temp")
  div1data.appendChild(temperatura);
  
  const div1P = document.createElement("div");
  div1P.innerText = `Precipitations: ${day.precip}`
  div1data.appendChild(div1P)

  const div1H = document.createElement("div");
  div1H.innerText = `Humidity: ${day.humedad}`
  div1data.appendChild(div1H);

  div1.appendChild(div1data);
  divDetails.appendChild(div1);

  const divTable = document.createElement("div");
  divTable.setAttribute("id", "tabla")
  divTable.appendChild(buildTableDetails(day));
  divDetails.appendChild(divTable);

}


function buildTableDetails(day){
  const table = document.createElement("table");
  const trHeader = document.createElement("tr");
  const headers = [
    "Hour",
    "Weather",
    "Temperature",
    "Precipitations",
    "Humidity"
  ];

  for(let i = 0; i < 5; i++){
    const header = document.createElement("th") ;
    header.innerText = headers[i];
    trHeader.appendChild(header);
  }

  table.appendChild(trHeader);

  day.hours.forEach((hour) =>{
    table.appendChild(buildTableTr(hour));
  })

  return table
}

function buildTableTr(hour){
  const tr = document.createElement("tr");

  const td_hour = document.createElement("td");
  td_hour.innerText = hour.datetime;
  tr.appendChild(td_hour);

  const td_weather = document.createElement("td");
  const img_weather = document.createElement("img");
  img_weather.setAttribute("class", "smallIcon");
  img_weather.src = getIcon(hour.icon)
  td_weather.appendChild(img_weather);
  tr.appendChild(td_weather);

  const td_t = document.createElement("td");
  td_t.setAttribute("class", "td_t")

  if(temp_toggle.value === "F"){
    td_t.innerText = hour.temp + "F";
  } else{
    let tempTd = parseFloat(hour.temp);
    tempTd = (tempTd - 32) * 5 / 9
    td_t.innerText = tempTd.toFixed(1) + "C";
  }

  tr.appendChild(td_t);

  const td_p = document.createElement("td");
  td_p.innerText = hour.precip;
  tr.appendChild(td_p);

  const td_hum = document.createElement("td");
  td_hum.innerText = hour.humidity;
  tr.appendChild(td_hum);

  return tr
}


export { loaderSwitch, createCell, cleanDetails };