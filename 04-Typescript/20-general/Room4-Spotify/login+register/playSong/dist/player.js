//פונקציה שמקשרת את הקלאסים שנימצאים ב-center.ts
var song = getSongsFromLocalStorage();
// const singer: Singer[] = getSingersFromLocalStorage();
// --------- Song Class with constructor -------
var AudioElement = /** @class */ (function () {
    function AudioElement(name, artist, audio, img, id) {
        this.name = name;
        this.artist = artist;
        this.audio = audio;
        this.img = img;
        this.id = id;
    }
    return AudioElement;
}());
//i took song array from center.ts
var audioElements = songsArray;
//----------- demo array of songs with class AudioElement(song) 
// const audioElements: AudioElement[] = [
//   new AudioElement(
//     "Her Ghost in The Fog",
//     "Cradle Of Filth",
//     new Audio("../dist/media/Cradle of Filth - Her Ghost in The Fog (192 kbps).mp3"),
//     'https://www.metalcallout.com/sites/default/files/img/cradledarklycover2.jpg',
//     1
//   ),
//   new AudioElement(
//     "Final Countdown",
//     "Europe",
//     new Audio("../dist/media/Europe - The Final Countdown.mp3")
//     , 'https://upload.wikimedia.org/wikipedia/en/2/22/The_Final_Countdown_single.png',
//     2),
//   new AudioElement("Still Loving You",
//     "Scorpions",
//     new Audio("../dist/media/scorpions_-_wind-of-change.mp3")
//     , 'https://upload.wikimedia.org/wikipedia/en/a/af/Scorpions-stilllovingyouep1.jpg',
//     3)
// ];
//-------------Render html song in Player
var wrapperDiv = document.querySelector('.wrapper');
var activeSong;
function renderPlayer(songId) {
    try {
        if (!songId) {
            throw new Error('No song ID provided');
        }
        if (!audioElements) {
            throw new Error('No songs data available');
        }
        activeSong = audioElements.find(function (song) { return song.id === songId; });
        if (activeSong !== undefined) {
            activeSong.audio.play();
            var html = "\n        <div class=\"player\" id=\"" + activeSong.id + "\" style=\"background-image:url('" + activeSong.img + "')\">\n          <div class=\"player__collapse\">\n            <i class=\"fa-solid fa-angle-down\"></i>\n          </div>\n          <div class=\"player__header\">\n          <div class=\"player__title-thumb\" style=\"background-image: url('" + activeSong.img + "')\"></div>\n          <div class=\"player__title\">\n              <div class=\"player__title-song\">" + activeSong.name + "</div>\n              <div class=\"player__title-artist\">" + activeSong.artist + "</div>\n          </div>\n          <div class=\"player__header-play\" onclick=\"playPause(activeSong)\"><i class=\"fa-sharp fa-solid fa-play\"></i></div>\n      </div>\n      <div class=\"player__image\"\n      style=\"background-image: url('" + activeSong.img + "')\">\n    </div>\n    <div class=\"player__controls\">\n    <audio src=\"" + activeSong.audio.src + "\"></audio>\n    <div id=\"progress-container\">\n        <div id=\"progress\" class=\"timeBar__progress\"></div>\n        <div id=\"time\"></div>\n    </div>\n    \n    <div class=\"buttons\">\n        <div><i class=\"fa-solid fa-shuffle\"></i></div>\n        <div onclick=\"backBtn(activeSong)\">   <i class=\"fa-solid fa-backward-step\"></i></div>\n        <div class=\"playBtn\" onclick=\"playPause(activeSong)\"><i class=\"fa-solid fa-circle-play\"></i></div>\n        <div onclick=\"nextBtn(activeSong)\">  <i class=\"fa-solid fa-forward-step\"></i></div>\n        <div onclick=\"audioElement.pause()\"><i class=\"fa-solid fa-repeat\"></i></div>\n    \n    </div>\n    \n    <!-- <i class=\"fa-solid fa-shuffle\"></i>\n    \n    <button id=\"play-icon\"></i></button>\n    \n    <i class=\"fa-solid fa-arrows-rotate\"></i>\n    <button id=\"mute-icon\"></button> -->\n    </div>";
            if (!wrapperDiv)
                throw new Error('no div element');
            wrapperDiv.innerHTML = html;
            var progressContainer = document.querySelector("#progress-container");
            progressContainer.addEventListener('click', seek);
            activeSong.audio.addEventListener('timeupdate', function () { return updateTimeAndProgress(activeSong.audio); });
        }
    }
    catch (error) {
        console.error(error);
    }
}
///
//------------ Function of song timeline (current time+remain time)
function updateTimeAndProgress(audioElement) {
    try {
        var progressContainer = document.querySelector("#progress-container");
        var progressElement = document.querySelector("#progress");
        var timeElement = document.querySelector("#time");
        var totalDurationInSeconds = audioElement.duration;
        var totalDuration = Math.floor(totalDurationInSeconds / 60) + ":" + Math.floor(totalDurationInSeconds % 60) + " ";
        var durationElement = document.createElement('span');
        var progress = (audioElement.currentTime / audioElement.duration) * 100;
        progressElement.style.width = progress + "% ";
        var minutes = Math.floor(audioElement.currentTime / 60);
        var seconds = Math.floor(audioElement.currentTime % 60);
        timeElement.textContent = minutes + ":" + seconds.toString().padStart(2, "0") + " ";
        var remainingTimeInSeconds = totalDurationInSeconds - audioElement.currentTime;
        var remainingMinutes = Math.floor(remainingTimeInSeconds / 60);
        var remainingSeconds = Math.floor(remainingTimeInSeconds % 60);
        var remainingTime = " - " + remainingMinutes + ":" + remainingSeconds.toString().padStart(2, "0") + " ";
        durationElement.textContent = remainingTime;
        timeElement.appendChild(durationElement);
    }
    catch (error) {
        console.error(error);
    }
}
//---------- function for clicking on timeline and move song to part of timeline
var seek = function (event) {
    var progressElement = document.querySelector("#progress");
    var progressContainer = document.querySelector("#progress-container");
    var progressBarWidth = progressContainer.offsetWidth;
    var clickX = event.clientX - progressContainer.getBoundingClientRect().left;
    var progress = (clickX / progressBarWidth) * 100;
    if (activeSong) {
        var audioElement = activeSong.audio;
        audioElement.currentTime = (progress / 100) * audioElement.duration;
    }
};
//---------- function play Song (if playing,pause)
function playPause() {
    try {
        if (activeSong && activeSong.audio) {
            var audioElement = activeSong.audio;
            if (audioElement.paused) {
                audioElement.play();
            }
            else {
                audioElement.pause();
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
//--------function for button NEXT
function nextBtn(activeSong) {
    if (activeSong.id < audioElements.length) {
        activeSong.audio.pause();
        renderPlayer(activeSong.id + 1);
    }
    else
        console.log('Last song"');
}
//------ function button BACK
function backBtn(activeSong) {
    if (activeSong.id > 1) {
        activeSong.audio.pause();
        renderPlayer(activeSong.id - 1);
    }
    else
        console.log('first song');
}
