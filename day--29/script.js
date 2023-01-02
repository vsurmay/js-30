let countDown;
const timerDisplay = document.querySelector(".display__time-left");
const timerControl = document.querySelector(".timer__controls");
const form = document.customForm;
const displayEndTime = document.querySelector(".display__end-time");

function timer(seconds) {
  const now = new Date().getTime();
  const then = seconds * 1000 + now;
  displayTimeLeft(seconds);
  displayTimeEnd(then);

  countDown = setInterval(() => {
    let secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countDown);
      return;
    }
    if (secondsLeft == -0) secondsLeft *= -1;
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const min = parseInt(seconds / 60);
  const sec = seconds - min * 60;
  const display = `${adedZero(min)}:${adedZero(sec)}`;
  timerDisplay.textContent = display;
}

function displayTimeEnd(timeEnd) {
  const end = new Date(timeEnd);
  const min = end.getMinutes();
  const hour = end.getHours();
  displayEndTime.textContent = `Be Back At ${adedZero(hour)}:${adedZero(min)}`;
}

function adedZero(num) {
  if (num >= 10) return num;
  return "0" + num.toString();
}

function chooseTime(event) {
  const el = event.target.closest("button");
  if (!el) return;
  const time = el.dataset.time;
  clearInterval(countDown);
  timer(time);
}

function chooseTimeInput(event) {
  event.preventDefault();
  const value = Number(this.minutes.value);
  if (isNaN(value)) return;
  const sec = value * 60;
  clearInterval(countDown);
  timer(sec);
  this.reset();
}

timerControl.addEventListener("click", chooseTime);
form.addEventListener("submit", chooseTimeInput);
