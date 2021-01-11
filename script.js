"use strict";

// Dark Mode Functionality

let elBody = document.querySelector("body");
let elBtn = document.querySelector(".btn-theme");

const toggleTheme = function () {
  elBody.classList.toggle("dark-theme");
  elBtn.classList.toggle("btn-light");
};

//store the user preference of theme
let currentTheme = localStorage.getItem("theme");

//check if dark
if (currentTheme === "dark") {
  elBody.classList.add("dark-theme");
  elBtn.classList.add("btn-light");
}

elBtn.addEventListener("click", function () {
  toggleTheme();

  //Assume light theme
  let theme = "light";

  //check if body has dark theme
  if (elBody.classList.contains("dark-theme")) {
    theme = "dark";
  }

  //Save preference in local storage
  localStorage.setItem("theme", theme);
});
