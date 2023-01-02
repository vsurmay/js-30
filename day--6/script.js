const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const city = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => city.push(...data));

function searchCity(array, word) {
  const regex = new RegExp(word, "gi");
  return array.filter((el) => el.city.match(regex) || el.state.match(regex));
}

function adedComs(num) {
  const arrRev = [...num.toString()].reverse();
  const result = [];
  for (let i = 0; i < arrRev.length; i++) {
    const el = arrRev[i];
    if (i === 0) {
      result.push(el);
      continue;
    }
    if (i % 3 === 0) {
      result.push(",");
      result.push(el);
    } else {
      result.push(el);
    }
  }
  return result.reverse().join("");
}

const search = document.querySelector(".search");
const list = document.querySelector(".suggestions");

search.addEventListener("change", searchElem);
search.addEventListener("keyup", searchElem);

function searchElem() {
  const matchArray = searchCity(city, this.value);
  const html = matchArray
    .map((element) => {
      const regex = new RegExp(this.value, "gi");
      const cityHl = element.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateHl = element.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
        <li>
            <span class="name_city"> ${cityHl}, ${stateHl}</span>
            <span class="population"> ${adedComs(element.population)}</span>
        </li>
        `;
    })
    .join("");
  list.innerHTML = html;
}
