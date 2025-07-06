import "./style.css";
import { buttonAPI, arrayDays } from "./data.js";
import { loaderSwitch, createCell, cleanDetails } from "./dom.js";

const button = document.querySelector("button");
const returner = document.getElementById("return");

returner.addEventListener("click", (e) =>{
  e.preventDefault();
  cleanDetails();
  arrayDays.forEach(day=> createCell(day));
  returner.classList.toggle("active");
})

button.addEventListener("click", async (e) => {
  if (returner.classList.contains("active")) returner.classList.toggle("active");

  e.preventDefault();
  cleanDetails();
  loaderSwitch();
  await buttonAPI();
  loaderSwitch();
  arrayDays.forEach(day => createCell(day))
  //createCell(arrayDays[0])
});
