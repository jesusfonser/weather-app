import "./style.css";
import { buttonAPI, arrayDays } from "./data.js";
import { loaderSwitch, createCell } from "./dom.js";

const button = document.querySelector("button");

button.addEventListener("click", async (e) => {
  e.preventDefault();
  loaderSwitch();
  await buttonAPI();
  loaderSwitch();
  arrayDays.forEach(day => createCell(day))
  //createCell(arrayDays[0])
});
