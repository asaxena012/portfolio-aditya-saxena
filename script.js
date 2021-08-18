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

// blog rendering functionality

const blogs = [
  {
    image: './images/nameit.png',
    heading: "Integrating redux into your react project",
    blogText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "1 Jan 2021"
  },
  {
    image: './images/neoAlgo.jpg',
    heading: "The magic of redux-thunk",
    blogText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "29 Feb 2021"
  },
  {
    image: './images/tasker.png',
    heading: "What development internships at startups can teach you",
    blogText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "31 July 2021"
  }
];

const blogReaderImage = document.querySelector('.blog-image');
const blogReaderHeader = document.querySelector('.blog-heading');
const blogReaderText = document.querySelector('.blog-text');
const blogReaderDate = document.querySelector('.blog-date');
const readMoreBtns = document.querySelectorAll('.read-more');

const renderBlog = (index) => {
  localStorage.setItem('blogIndex', index)
}
readMoreBtns.forEach((readMoreBtn, i) => {
  readMoreBtn.addEventListener('click', () => renderBlog(i))
})

const blogIndex = localStorage.getItem('blogIndex');

if(blogIndex){
  const blog = blogs[blogIndex];
  blogReaderImage.src = blog.image
  blogReaderHeader.textContent = blog.heading
  blogReaderText.textContent = blog.blogText
  blogReaderDate.textContent = blog.date
}