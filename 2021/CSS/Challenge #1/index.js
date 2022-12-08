"use strict";

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const settingsButton = document.getElementById("settings");

const timerOutput = document.getElementById("output");

startButton.addEventListener("click", handleStartButtonClick);
stopButton.addEventListener("click", handleStopButtonClick);
settingsButton.addEventListener("click", handleSettingsButtonClick);
