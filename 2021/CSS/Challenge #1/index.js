"use strict";

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const settingsButton = document.getElementById("settings");

const timerWrapper = document.querySelector(".timer-wrapper");
const timerOutput = document.getElementById("output");

startButton.addEventListener("click", handleStartButtonClick);
stopButton.addEventListener("click", handleStopButtonClick);

let timerID;
let seconds = 0.1 * 60;
let total = seconds;
let baseDegreeIncrement = 360 / seconds;
let timerDefaultDuration = 15; // 15 mins

function handleStartButtonClick() {
  toggleStartButtonVisibility();
  toggleStopButtonVisibility();

  startTimer();
}

function animateOuterRing() {
  let currentDegree = baseDegreeIncrement * (total - seconds);
  timerWrapper.style.background = `conic-gradient(var(--secondary) ${currentDegree}deg, #000 ${currentDegree}deg)`;
}

function handleStopButtonClick() {
  toggleStartButtonVisibility();
  toggleStopButtonVisibility();

  stopTimer();
}

function toggleStartButtonVisibility() {
  startButton.classList.toggle("hidden");
}

function toggleStopButtonVisibility() {
  stopButton.classList.toggle("hidden");
}

function startTimer() {
  timerID = setInterval(() => {
    seconds--;
    timerOutput.textContent = formatTime(seconds);
    animateOuterRing();

    if (seconds === 0) {
      timerWrapper.style.background = "var(--tertiary)";
      clearInterval(timerID);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerID);
  timerOutput.textContent = formatTime(seconds);
}

function formatTime(timeRemainingInSeconds) {
  let minutes = Math.trunc(timeRemainingInSeconds / 60);
  let seconds = timeRemainingInSeconds % 60;

  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}
