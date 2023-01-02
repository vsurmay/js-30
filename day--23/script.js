const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
const textArea = document.querySelector("[name='text']");

msg.text = textArea.value;

function populateVoice() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map((el) => `<option value="${el.lang}">${el.name}</option>`)
    .join("");
}

function changeVoice() {
  console.log(this.value);
  const chooseVoice = voices.find((el) => el.lang === this.value);
  msg.voice = chooseVoice;
  console.log(msg);
  toggle();
}

function toggle(value = true) {
  if (!value) return speechSynthesis.cancel();
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}

function setOptions() {
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener("voiceschanged", populateVoice);
voicesDropdown.addEventListener("change", changeVoice);
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
options.forEach((el) => el.addEventListener("change", setOptions));
