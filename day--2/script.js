const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function giveStartTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegress = (seconds / 60) * 360 + 90;
  return secondsDegress;
}

let countSeconds = giveStartTime();

function setTime() {
  const now = new Date();
  countSeconds += 6;
  secHand.style.transform = `rotate(${countSeconds}deg)`;

  const minutes = now.getMinutes();
  const minutesDegress = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegress}deg)`;

  const hours = now.getHours();
  const hoursDegress = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegress}deg)`;
}
setInterval(setTime, 1000);
