// const menu = document.querySelector("#main");
// const logo = document.querySelector(".logo");
// const topOffNav = menu.offsetTop;

// function changeMenu() {
//   console.log("scroll", scrollY);
//   console.log("menu", menu.offsetTop);
//   if (topOffNav <= window.scrollY) {
//     document.body.style.paddingTop = menu.offsetHeight + "px";
//     document.body.classList.add("fixed-nav");
//     logo.style.maxWidth = "250px";
//   } else {
//     document.body.classList.remove("fixed-nav");
//     document.body.style.paddingTop = 0;
//     logo.style.maxWidth = 0;
//   }
// }

// window.addEventListener("scroll", changeMenu);

const menu = document.querySelector("#main");
const logo = document.querySelector(".logo");
const body = document.body;
const topEl = menu.offsetTop;

function changeMenu() {
  console.log(topEl);
  console.log(window.scrollY);
  if (window.scrollY >= topEl) {
    menu.style.position = "fixed";
    menu.style.boxShadow = "0 5px 0 rgba(0,0,0,0.1)";
    body.style.paddingTop = `${menu.offsetHeight}px`;
    logo.style.maxWidth = "250px";
  } else {
    menu.style.position = "relative";
    menu.style.boxShadow = "";
    body.style.paddingTop = 0;
    logo.style.maxWidth = 0;
  }
}

window.addEventListener("scroll", changeMenu);
