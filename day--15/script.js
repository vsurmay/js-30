const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const divBtn = document.querySelector(".btns");
let items = JSON.parse(localStorage.getItem("items"))
  ? JSON.parse(localStorage.getItem("items"))
  : [];

function addItem(event) {
  event.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  //очитимо значення форми після submit
  this.reset();
}

function populateList(arr, list) {
  list.innerHTML = arr
    .map((el, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
        el.done ? "checked" : ""
      }>
          <label for="item${i}">${el.text}</label>
        </li>
        `;
    })
    .join("");
}

function toggleDone(event) {
  const el = event.target.closest("input");
  if (!el) return;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function clickBtn(event) {
  const el = event.target.closest("input");
  if (!el) return;
  if (el.classList[0] === "clear_btn") {
    items = [];
    localStorage.clear();
  }
  if (el.classList[0] === "check-all_btn") {
    if (items.length === 0) return;
    items.map((el) => (el.done = true));
  }
  if (el.classList[0] === "uncheck-all_btn") {
    if (items.length === 0) return;
    items.map((el) => (el.done = false));
  }
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);

itemsList.addEventListener("click", toggleDone);

divBtn.addEventListener("click", clickBtn);

populateList(items, itemsList);
