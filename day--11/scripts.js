//Get our elemrnts
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipBtn = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const rangesVolume = player.querySelector('input[name="volume"]');

//Build our function
function togglePlay(event) {
  if (event.code !== "Space" && event.type !== "click") return;
  const result = video.paused ? "play" : "pause";
  video[result]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skipVideo(event) {
  if (event.type == "click") {
    const valueBtn = this.dataset.skip;
    video.currentTime += Number(valueBtn);
  } else {
    if (event.code === "ArrowRight" || event.code === "ArrowLeft") {
      const change = event.code === "ArrowRight" ? 15 : -10;
      video.currentTime += change;
    }
    return;
  }
}

function rangeUpdate(event) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    if (event.key === "ArrowDown") {
      if (video.volume < 0.01) return;
      video.volume -= 0.01;
      rangesVolume.value = video.volume;
    } else {
      if (video.volume > 0.99) return;
      video.volume += 0.01;
      rangesVolume.value = video.volume;
    }
  } else {
    //   console.log(this.value);
    //   console.log(this.name);
    video[this.name] = this.value;
  }
}

function handelProgress() {
  const rercent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${rercent}%`;
}

function changeProgressBar(event) {
  const progressX = event.offsetX;
  const rercent = (progressX / this.offsetWidth) * 100;
  progressBar.style.flexBasis = `${rercent}%`;
  const reproducevideo = (rercent * video.duration) / 100;
  video.currentTime = reproducevideo;
}

//Hook up the event listener

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);
toggle.addEventListener("keyup", togglePlay);
document.addEventListener("keyup", togglePlay);
skipBtn.forEach((btn) => btn.addEventListener("click", skipVideo));
document.addEventListener("keydown", skipVideo);
ranges.forEach((range) => range.addEventListener("change", rangeUpdate));
ranges.forEach((range) => range.addEventListener("mousemove", rangeUpdate));
document.addEventListener("keydown", rangeUpdate);
video.addEventListener("timeupdate", handelProgress);
progress.addEventListener("click", changeProgressBar);
