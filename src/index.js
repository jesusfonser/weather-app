import "./style.css"

async function callDaInfo(){
    const info = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/antequera?key=FYUUEU4LM4S82AZ5BT38GFSJC");
    const processed = await info.json();
    console.log(processed);
}

callDaInfo();

