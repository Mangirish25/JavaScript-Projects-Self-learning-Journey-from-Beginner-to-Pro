
const timerBtn = document.getElementById("showTimer");
const stopwatchBtn = document.getElementById("showStopwatch");

const timerSection = document.getElementById("timerSection");
const stopwatchSection = document.getElementById("stopwatchSection");

// Show Timer
timerBtn.addEventListener("click", () => {
  timerSection.style.display = "block";
  stopwatchSection.style.display = "none";
  timerBtn.style.background = "rgb(174, 174, 174)";
  stopwatchBtn.style.background = "rgb(214, 214, 214)";
});

// Show Stopwatch
stopwatchBtn.addEventListener("click", () => {
  timerSection.style.display = "none";
  stopwatchSection.style.display = "block";
  stopwatchBtn.style.background = "rgb(174, 174, 174)";
  timerBtn.style.background = "rgb(214, 214, 214)";
});

// STOPWATCH SECTION

const hours2 = document.getElementById("hours2");
const mins2 = document.getElementById("minutes2");
const seconds2 = document.getElementById("seconds2");

const startSW = document.getElementById("startSW");
const pauseSW = document.getElementById("pauseSW");
const resetSW = document.getElementById("resetSW");

let elapsedTime = 0;

let intervalId = null;

startSW.addEventListener("click", () => {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      elapsedTime += 10;

      const hours = Math.floor(elapsedTime / 3600000);
      const minutes = Math.floor((elapsedTime % 3600000) / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);

      hours2.innerText = String(hours).padStart(2, "0");
      mins2.innerText = String(minutes).padStart(2, "0");
      seconds2.innerText = String(seconds).padStart(2, "0");
    }, 10);
  }
});

pauseSW.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetSW.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;

  elapsedTime = 0;

  hours2.innerText = "00";
  mins2.innerText = "00";
  seconds2.innerText = "00";
});

// TIMER SECTION

const minutes1 = document.getElementById("minutes1");
const seconds1 = document.getElementById("seconds1");

const startTimer = document.getElementById("startTimer");
const pauseTimer = document.getElementById("pauseTimer");
const resetTimer = document.getElementById("resetTimer");

const slider = document.getElementById("scale");

let remainingTime = Number(slider.value) * 60;
let timerInterval = null;

function updateDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = Math.floor(remainingTime % 60);

    minutes1.innerText = String(minutes).padStart(2, "0");
    seconds1.innerText = String(seconds).padStart(2, "0");
}

updateDisplay();

// start button
startTimer.addEventListener("click",
    () => {

        // preventing multiple intervals
        if(timerInterval !== null){
            return;
        }

        // initializing timer from slider
        if(remainingTime === 0){
            remainingTime = Number(slider.value) * 60;
            updateDisplay();
        }

        timerInterval = setInterval(() => {
            if(remainingTime > 0){
                remainingTime--;
                updateDisplay();
            }
            else{
                clearInterval(timerInterval);
                timerInterval = null;

                alert("⏰ Time's up!")
            }
        }, 1000);
    }
);

// Pause button

pauseTimer.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

// reset button

resetTimer.addEventListener("click" , () => {
    clearInterval(timerInterval);
    timerInterval = null;

    remainingTime = Number(slider.value) * 60;
    updateDisplay();
});

slider.addEventListener('input', () => {
    if(timerInterval === null){
        remainingTime = Number(slider.value) * 60;
        updateDisplay();
    }
})