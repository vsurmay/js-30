const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function claerWora(str) {
  const regex = /^(The |An?)\s/;
  return str.replace(regex, "");
}

function sortArr(arr) {
  return arr.sort(function (a, b) {
    if (claerWora(a) > claerWora(b)) {
      return 1;
    } else {
      return -1;
    }
  });
}

const list = document.querySelector("#bands");

list.innerHTML = sortArr(bands)
  .map((el) => `<li>${el}</li>`)
  .join("");
