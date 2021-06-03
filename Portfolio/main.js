let header = document.getElementById("header");
let logo = document.getElementById("logo");
let nav = document.querySelector("nav");
let navItems = document.querySelectorAll("nav li");
let btnMenu = document.getElementById("btnMenu");
let openNav = false;

window.onscroll = function () {
  scrollFunction();
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

buttonBackToTop.addEventListener("click", getToTop);
buttonMobile.addEventListener("click", mobMenu);
