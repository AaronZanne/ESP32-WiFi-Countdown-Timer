// Get HTML Elements
const timerDisplay = document.getElementById("timer");

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

const brightnessSlider = document.getElementById("brightness");
const brightnessValue = document.getElementById("brightnessValue");

const statusText = document.getElementById("statusText");
const savedValue = document.getElementById("savedValue");

// Buttons
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const resetBtn = document.getElementById("resetBtn");

// Last Saved Countdown
let lastCountdown = "00:00:00";

// Format Number
function pad(number) {
    return String(number).padStart(2, "0");
}

// Update Main Timer Display
function updateDisplay() {

    let h = pad(hoursInput.value);
    let m = pad(minutesInput.value);
    let s = pad(secondsInput.value);

    timerDisplay.textContent = `${h}:${m}:${s}`;
}

// Save Countdown
function saveCountdown() {

    lastCountdown = timerDisplay.textContent;

    localStorage.setItem("countdown", lastCountdown);

    savedValue.textContent = lastCountdown;
}

// Load Countdown
function loadCountdown() {

    const saved = localStorage.getItem("countdown");

    if(saved){

        savedValue.textContent = saved;

        timerDisplay.textContent = saved;

        let parts = saved.split(":");

        hoursInput.value = parts[0];
        minutesInput.value = parts[1];
        secondsInput.value = parts[2];
    }
}

// Input Events
hoursInput.addEventListener("input", updateDisplay);
minutesInput.addEventListener("input", updateDisplay);
secondsInput.addEventListener("input", updateDisplay);

// Brightness
brightnessSlider.addEventListener("input", ()=>{

    brightnessValue.textContent =
    brightnessSlider.value + "%";

});

// Buttons
startBtn.onclick = ()=>{

    updateDisplay();

    saveCountdown();

    statusText.textContent = "Running";
}

pauseBtn.onclick = ()=>{

    statusText.textContent = "Paused";
}

resumeBtn.onclick = ()=>{

    statusText.textContent = "Running";
}

resetBtn.onclick = ()=>{

    loadCountdown();

    statusText.textContent = "Ready";
}

// Start
loadCountdown();
updateDisplay();