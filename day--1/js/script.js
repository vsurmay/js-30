window.addEventListener("keydown", playound);

function playound(event) {
  //виділяємо елемент по артибуту data-key який дорівнює коду клавіши якуми натиснули

  const audio = document.querySelector(`audio[data-key = '${event.keyCode}']`);
  const div = document.querySelector(`.key[data-key = '${event.keyCode}']`);

  //робимо перевірку що якщо елемент не знайдено завершуєм
  if (audio === null) return;

  audio.currentTime = 0;
  audio.play();
  div.classList.add("playing");

  //   setTimeout(() => {
  //     div.classList.remove("playing");
  //   }, 150);
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeClass));
//коли анімація завершиться виконається ф-ція

function removeClass() {
  this.classList.remove("playing");
}
