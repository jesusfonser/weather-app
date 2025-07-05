import { arrayDays, getIcon } from "./data.js"

const gridWeather = document.getElementById("grid-weather");
const divDetails = document.getElementById("details");

/*

1.- Guardar en algún lugar el div con todas las celdas una vez cargado.
2.- Crear el segundo div con el tiempo más detallado
3.- Crear un botón para cambiar temperaturas de C a F

*/

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

    divCell.addEventListener("click", () => dayDetails(day, img_body, temp_cell))

    gridWeather.appendChild(divCell);

}

function dayDetails(day, icon, temp){
/*

day es el dia que se usa en la funcion para crear celdas
icon es el elemento img usado en la funcion para crear celdas
temp es el temp_cell de la funcion para crear celdas

*/

  gridWeather.innerHTML = '';
  divDetails.classList.toggle("active");

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
  td_t.innerText = hour.temp;
  tr.appendChild(td_t);

  const td_p = document.createElement("td");
  td_p.innerText = hour.precip;
  tr.appendChild(td_p);

  const td_hum = document.createElement("td");
  td_hum.innerText = hour.humidity;
  tr.appendChild(td_hum);

  return tr
}

export { loaderSwitch, createCell };

/*
cloudcover
: 
0
conditions
: 
"Clear"
datetime
: 
"03:00:00"
datetimeEpoch
: 
1751763600
dew
: 
54.9
feelslike
: 
68.4
humidity
: 
62.06
icon
: 
"clear-night"
precip
: 
0
precipprob
: 
0
preciptype
: 
null
pressure
: 
1017
severerisk
: 
10
snow
: 
0
snowdepth
: 
0
solarenergy
: 
0
solarradiation
: 
0
source
: 
"fcst"
stations
: 
null
temp
: 
68.4
uvindex
: 
0
visibility
: 
15
winddir
: 
75.1
windgust
: 
15.7
windspeed
: 
2.2
*/