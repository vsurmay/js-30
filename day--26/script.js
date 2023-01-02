const headListItem = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector("nav");

function handleEnter() {
  const dropdown = this.querySelector(".dropdown");
  dropdown.classList.add("trigger-enter");
  setTimeout(() => {
    if (dropdown.classList.contains("trigger-enter")) {
      dropdown.classList.add("trigger-enter-active");
    }
  }, 150);
  background.classList.add("open");
  const coordsEl = dropdown.getBoundingClientRect();
  const coordsParent = nav.getBoundingClientRect();
  background.style.width = `${coordsEl.width}px`;
  background.style.height = `${coordsEl.height}px`;
  background.style.top = `${coordsEl.top - coordsParent.top}px`;
  background.style.left = `${coordsEl.left - coordsParent.left}px`;
}

function handleLeave() {
  const dropdown = this.querySelector(".dropdown");
  dropdown.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

headListItem.forEach((headList) =>
  headList.addEventListener("mouseenter", handleEnter)
);
headListItem.forEach((headList) =>
  headList.addEventListener("mouseleave", handleLeave)
);
