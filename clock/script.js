// Real-Time Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

// Stopwatch functionality
let stopwatchInterval;
let stopwatchTime = 0;
let isStopwatchRunning = false;

function toggleStopwatch() {
    if (isStopwatchRunning) {
        clearInterval(stopwatchInterval);
        document.getElementById('start-stopwatch').textContent = "Start";
    } else {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        document.getElementById('start-stopwatch').textContent = "Stop";
    }
    isStopwatchRunning = !isStopwatchRunning;
}

function updateStopwatch() {
    stopwatchTime++;
    const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
    const seconds = String(stopwatchTime % 60).padStart(2, '0');
    document.getElementById('stopwatch-display').textContent = `${hours}:${minutes}:${seconds}`;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatch-display').textContent = "00:00:00";
    document.getElementById('start-stopwatch').textContent = "Start";
    isStopwatchRunning = false;
}

// Alarm functionality
let alarmTime = null;

function setAlarm() {
    const alarmInput = document.getElementById('alarm-time').value;
    if (alarmInput) {
        alarmTime = alarmInput;
        document.getElementById('alarm-message').textContent = `Alarm set for: ${alarmTime}`;
        checkAlarm();
    }
}

function checkAlarm() {
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const currentTime = `${hours}:${minutes}`;

        if (currentTime === alarmTime) {
            alert('Alarm ringing!');
            document.getElementById('alarm-message').textContent = 'Alarm is ringing!';
        }
    }, 60000); // Check every minute
}

updateClock(); // Initial call to set time
