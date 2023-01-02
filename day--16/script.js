const container = document.querySelector(".box");
const title = document.querySelector(".text");

function showTextShadow(event) {
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  const walk = 50;

  let x = event.clientX;
  let y = event.clientY;

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  title.style.textShadow = `${xWalk}px ${yWalk}px rgba(0,0,0,.17)`;
}

container.addEventListener("mousemove", showTextShadow);
