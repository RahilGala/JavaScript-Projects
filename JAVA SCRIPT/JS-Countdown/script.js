const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

const newYears = "1 Jan 2025";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/ 3600) %24;
    const mins = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML= formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
// initial call
countdown();

setInterval(countdown, 1000);