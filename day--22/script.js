// const triggers = document.querySelectorAll("a");
// const highlight = document.createElement("span");
// const body = document.body;

// highlight.classList.add("highlight");
// body.append(highlight);

// function highlightLink() {
//   const linkCoords = this.getBoundingClientRect();
//   console.log(linkCoords);
//   console.log(window.scrollY);
//   highlight.style.width = `${linkCoords.width}px`;
//   highlight.style.height = `${linkCoords.height}px`;
//   highlight.style.top = `${linkCoords.top + window.scrollY}px`;
//   highlight.style.left = `${linkCoords.left + window.scrollX}px`;
// }

// triggers.forEach((el) => el.addEventListener("mouseenter", highlightLink));

const boxEl = document.querySelector(".box");
const body = document.body;
const highlight = document.createElement("span");
highlight.classList.add("highlight");
body.append(highlight);

function highlightLink(event) {
  const element = event.target.closest("a");
  if (!element) return;
  const linkCoords = element.getBoundingClientRect();
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.top = `${linkCoords.top + window.scrollY}px`;
  highlight.style.left = `${linkCoords.left + window.scrollX}px`;
}

boxEl.addEventListener("mouseover", highlightLink);
