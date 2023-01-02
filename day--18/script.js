const list = Array.from(document.querySelectorAll("[data-time]"));
const timeArr = list
  .map((el) => el.dataset.time.split(":").map((el) => Number(el)))
  .map((el) => el[0] * 60 + el[1]);

const numSec = timeArr.reduce((a, b) => a + b);

const numHours = parseInt(numSec / 3600);
const remainderMin = numSec - numHours * 3600;
const numMinute = parseInt(remainderMin / 60);
const numSeconds = remainderMin - numMinute * 60;

const total = `${adedZero(numHours)}:${adedZero(numMinute)}:${adedZero(
  numSeconds
)}`;
console.log(total);

function adedZero(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}
