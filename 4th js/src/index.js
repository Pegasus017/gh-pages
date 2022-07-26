const clockTitle = document.querySelector(".js-clock");

function getClock() {
    let today = new Date();
    let dDay = new Date("december 25, 2022 0:00:00");
    let gap = dDay.getTime() - today.getTime();
    let resultSeconds = Math.floor((gap % (1000 * 60)) / 1000);
    let resultMinutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    let resultHours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let resultDays = Math.floor(gap / (1000 * 60 * 60 * 24));


    let seconds = String(resultSeconds).padStart(2, "0");

    clockTitle.innerText = `Until Christmas, ${resultDays}d ${resultHours}h ${resultMinutes}m ${seconds}s left.`;

}

getClock();
setInterval(getClock, 1000);