let [seconds, minute, hours] = [0, 0, 0];
let timedisplay = document.getElementById("timedisplay");
let playPauseBtn = document.getElementById("playPauseBtn");
let timer = null;

function stop() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minute < 10 ? "0" + minute : minute;
    let s = seconds < 10 ? "0" + seconds : seconds;
    
    timedisplay.innerHTML = h + ":" + m + ":" + s;
}

function watchstart() {
    if (timer != null) {
        clearInterval(timer);
    }

    // Toggle play/pause icon
    if (playPauseBtn.classList.contains('fa-play')) {
        playPauseBtn.classList.remove('fa-play');
        playPauseBtn.classList.add('fa-pause');
    } else {
        playPauseBtn.classList.remove('fa-pause');
        playPauseBtn.classList.add('fa-play');
    }

    timer = setInterval(stop, 1000);
}

function watchstop() {
    clearInterval(timer);
    // Ensure the play icon is shown when stopped
    playPauseBtn.classList.remove('fa-pause');
    playPauseBtn.classList.add('fa-play');
}

function watchreset() {
    clearInterval(timer);
    [seconds, minute, hours] = [0, 0, 0];
    timedisplay.innerHTML = "00:00:00";
    // Ensure the play icon is shown when reset
    playPauseBtn.classList.remove('fa-pause');
    playPauseBtn.classList.add('fa-play');
}
