import "./style.css";
import { buttonAPI } from "./data.js";
import { loaderSwitch } from "./dom.js";

const button = document.querySelector("button");

button.addEventListener("click", async (e) => {
  e.preventDefault();
  loaderSwitch();
  await buttonAPI();
  loaderSwitch();
});
