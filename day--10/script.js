const inputs = document.querySelectorAll(".check");

for (let i of inputs) {
  i.addEventListener("click", handleCheck);
}

let lastChecked;

function handleCheck(event) {
  console.log(lastChecked);
  // console.log(this.checked);
  // console.log(event.shiftKey);
  let inBetween = false;
  if (this.checked && event.shiftKey) {
    inputs.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox == this || checkbox == lastChecked) {
        inBetween = !inBetween;
        console.log("------------------");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

// //dele
// const inbox = document.querySelector(".inbox");

// inbox.addEventListener("click", fn);

// function fn(event) {
//   if (!event.target.closest(".check")) return;
//   console.log(event);
// }
