const receivedID = (domID) => {
    const id = document.getElementById(domID);
    return id;
};

const receivedBySelector = (className) => {
    const timerDisplay = document.querySelector(`.${className}`);
    return timerDisplay;
};

// Call the functions with proper arguments
const startButton = receivedID("start");
const stopButton = receivedID("stop");
const resetButton = receivedID("reset"); 
const showTime = receivedBySelector("timerdisplay");

let ms = 0;
let sec = 0;
let min = 0;
let hour = 0; // Declare hour
let timerId = null;

function startTimer() {
    ms++;
    if (ms === 100) {
        ms = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
            if (min === 60) { // Check if minutes have reached 60
                min = 0;
                hour++; // Increment hour when minutes reach 60
            }
        }
    }

    // Format the time values with leading zeros if needed
    let msString = ms < 10 ? `0${ms}` : ms;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;
    let hourString = hour < 10 ? `0${hour}` : hour;

    // Update the timer display
    showTime.innerHTML = `${hourString}:${minString}:${secString}:${msString}`;
}

startButton.addEventListener('click', function() {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopButton.addEventListener('click', function() {
    clearInterval(timerId);
});

resetButton.addEventListener('click', function() {
    clearInterval(timerId);
    ms = 0;
    sec = 0;
    min = 0;
    hour = 0; // Reset hour
    showTime.innerHTML = `00:00:00:00`; // Reset to all zeros, including hour
});
