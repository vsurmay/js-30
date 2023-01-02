window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
const div = document.querySelector(".words");
div.append(p);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((res) => res[0])
    .map((res) => res.transcript)
    .join("");
  console.log(transcript);
  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    div.append(p);
  }
  if (transcript.includes("hey")) {
    console.log("You say hey?");
  }
});

recognition.addEventListener("end", recognition.start);
recognition.start();
