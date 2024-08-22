let timer;
let elapsedTime = 0;
let running = false;

function updateDisplay() {
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;

  document.getElementById("display").textContent = `${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}.${String(Math.floor(milliseconds / 10)).padStart(2, "0")}`;
}

function startStopwatch() {
  if (running) return;
  running = true;
  timer = setInterval(() => {
    elapsedTime += 10;
    updateDisplay();
  }, 10);
}

function pauseStopwatch() {
  if (!running) return;
  running = false;
  clearInterval(timer);
}

function resetStopwatch() {
  running = false;
  clearInterval(timer);
  elapsedTime = 0;
  updateDisplay();
  document.getElementById("lapList").innerHTML = "";
}

function recordLap() {
  if (!running) return;
  const lapItem = document.createElement("li");
  lapItem.textContent = document.getElementById("display").textContent;
  document.getElementById("lapList").appendChild(lapItem);
}

document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("pause").addEventListener("click", pauseStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);
document.getElementById("lap").addEventListener("click", recordLap);

updateDisplay();
