"use strict";

// Dark Mode Functionality

let elBody = document.querySelector("body");
let elBtn = document.querySelector(".btn-theme");

function toggleTheme() {
  elBody.classList.toggle("dark-theme");
  elBtn.classList.toggle("btn-light");

  if (elBtn.classList.contains("btn-light")) {
    elBtn.textContent = "LIGHT MODE";
  } else {
    elBtn.textContent = "DARK MODE";
  }
}

let theme = localStorage.getItem("theme");

//Check is same theme else toggle
if (theme === "dark") {
  if (!elBody.classList.contains("dark-theme")) {
    toggleTheme();
  }
}

elBtn.addEventListener("click", function () {
  toggleTheme();

  if (elBody.classList.contains("dark-theme")) {
    theme = "dark";
  } else {
    theme = "light";
  }

  localStorage.setItem("theme", theme);
});