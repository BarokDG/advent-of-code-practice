"use strict";

const startButton = document.getElementById("start");
const settingsButton = document.getElementById("settings");

const timerOutput = document.getElementById("output");

startButton.addEventListener("click", handleStartButtonClick);
settingsButton.addEventListener("click", handleSettingsButtonClick);

function handleStartButtonClick() {
  startButton.textContent =
    startButton.textContent === "Start" ? "Stop" : "Start";

  startTimer();
}

function handleSettingsButtonClick() {}

function startTimer() {
  let timerStartTime = new Date();
  let timerEndTime = new Date();
  // timerEndTime.setMinutes(timerStartTime.getMinutes());
  timerEndTime.setSeconds(timerStartTime.getSeconds() + 10);

  let i = 0;
  let timerID = setInterval(() => {
    let timeRemaining = new Date(timerEndTime - Date.now());

    timerOutput.innerHTML = `${timeRemaining.getMinutes()}:${timeRemaining.getSeconds()}`;

    if (timerEndTime.getTime() <= Date.now()) {
      clearInterval(timerID);
    }
  }, 1000);
}
