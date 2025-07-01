/*

async function callDaInfo(city){
        const info = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=FYUUEU4LM4S82AZ5BT38GFSJC`);
        const processed = await info.json();
        return processed;
}

async function mostrarConsola(){
    try{
        loaddiv.style.display = "block";
        const value = document.querySelector("input").value
        const datos = await callDaInfo(value);
        bigdiv.style.backgroundColor = "green";
        return datos;
    } catch (error){
        console.log("Error acá" + error);
        bigdiv.style.backgroundColor = "red";
    } finally {
        loaddiv.style.display = "none";
    }
}
*/

/*
Pantalla de carga
Input para meter una ciudad distinta
Construye algo que recoja todos los dias con sus datos
Frase que recoja prediccion general
Por cada dia, construye una celda que muestre:
    - Fecha
    - Imagen
    - Temperatura
    - Temperatura en C
    - Enlace a tiempo detallado para ese día:
        + Tiempo por horas
            *T
            *P
            *Icono
            *Humedad
        + Tmax y Tmin, C y F
        + Humedad?
        + Precipitaciones

*/

const bigdiv = document.querySelector("#big-container");
const loaddiv = document.querySelector(".loader");
let arrayDays = [];
const images = importAllImages(
    require.context('./img/icons', false, /\.svg$/)
);


async function getData(city) {
  try {
    const info = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=FYUUEU4LM4S82AZ5BT38GFSJC`,
    );
    const processed = await info.json();
    //TODO: Meter función que modifique el DOM cuando se pille la info
    return processed;
  } catch (err) {
    //TODO: Meter función que modifique el DOM cuando haya error pillando info
    console.log(err);
    return;
  }
}

async function buttonAPI() {
  arrayDays = [];
  const cityInput = document.querySelector("input").value;
  const res = await getData(cityInput);
  res.days.forEach((day) => {
    transformIntoDataCell(day);
  });
  console.log(arrayDays);
}

function importAllImages(r) {
    const images = {}
    r.keys().forEach((path) => {
        const filename = path.replace('./', '');
        images[filename] = r(path);
    })

    return images;
}

function transformIntoDataCell(day) {
  let newCell = new dataCell(
    day.tempmax,
    day.tempmin,
    day.temp,
    day.precip,
    day.datetime,
    day.icon,
    day.conditions,
    day.hours,
    day.description,
    day.dew,
  );

  arrayDays.push(newCell);
}

class dataCell {
  constructor(
    tMax,
    tMin,
    temp,
    precip,
    date,
    icon,
    weather,
    hours,
    fullWeather,
    humedad,
  ) {
    this.tMax = tMax;
    this.tMin = tMin;
    this.temp = temp;
    this.precip = precip;
    this.date = date;

    this.img = (function (){
        const pedido = icon + ".svg";
        return images[pedido]
    })();

    this.weather = weather;
    this.hours = hours;
    this.fullWeather = fullWeather;
    this.humedad = humedad;
  }
}

export { buttonAPI, arrayDays };
