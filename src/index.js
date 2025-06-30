import "./style.css"

async function callDaInfo(){
    const info = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/antequera?key=FYUUEU4LM4S82AZ5BT38GFSJC");
    const processed = await info.json();
    console.log(processed);
}

callDaInfo();

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

