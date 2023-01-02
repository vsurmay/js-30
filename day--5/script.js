const divs = document.querySelectorAll(".panel");

divs.forEach((el) => el.addEventListener("click", showText));
divs.forEach((el) => el.addEventListener("transitionend", showMoreText));

function showText() {
  this.classList.toggle("open");
}

function showMoreText(event) {
  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open_active");
  }
}
