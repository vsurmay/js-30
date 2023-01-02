const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const bstRes = document.querySelector(".best");
let runPeep = false;
let lastHole;
let score = 0;
let bestRes = localStorage.getItem("bestResult");
bstRes.textContent = `Best result: ${bestRes == null ? 0 : bestRes}`;

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(hol) {
  const idx = Math.floor(Math.random() * hol.length);
  const hole = hol[idx];
  if (hole === lastHole) {
    return randomHole(hol);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!runPeep) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  runPeep = false;
  score = 0;
  peep();
  setTimeout(() => (runPeep = true), 10000);
}

function bonk(event) {
  if (!event.isTrusted) return;
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
  bestRes = score > bestRes ? score : bestRes;
  localStorage.setItem("bestResult", bestRes);
  document.querySelector(".best").textContent = `Best result: ${bestRes}`;
}

moles.forEach((mole) => mole.addEventListener("click", bonk));
