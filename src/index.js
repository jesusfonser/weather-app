import "./style.css"

const button = document.querySelector("button");
const bigdiv = document.querySelector("#big-container");
const loaddiv = document.querySelector(".loader");

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
        console.log(datos);
    }
    catch (error){
        console.log("Error acá" + error);
        bigdiv.style.backgroundColor = "red";
    } finally {
        loaddiv.style.display = "none";
    }
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarConsola()});



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
        + Tmax y Tmin, C y F
        + Humedad?
        + Precipitaciones

*/

