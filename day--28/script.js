const video = document.querySelector(".flex");
const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");

function handle(event) {
  //   if (!event.altKey) return;
  const y = event.offsetY;
  const persent = y / this.offsetHeight;
  bar.style.height = `${Math.round(persent * 100)}%`;
  const min = 0.4;
  const max = 4;
  const playbackRate = persent * (max - min) + min;
  bar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
}

// speed.addEventListener("mouseup", handle);
speed.addEventListener("mousemove", handle);
