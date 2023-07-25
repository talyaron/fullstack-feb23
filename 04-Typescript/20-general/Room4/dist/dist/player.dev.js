"use strict";

var audioElement = new Audio('./dist/Cradle of Filth - Her Ghost in The Fog (192 kbps).mp3');

function updateTimeAndProgress() {
  try {
    var progressElement = document.querySelector("#progress");
    var timeElement = document.querySelector("#time");
    var totalDurationInSeconds = audioElement.duration;
    var totalDuration = Math.floor(totalDurationInSeconds / 60) + ":" + Math.floor(totalDurationInSeconds % 60);
    var durationElement = document.createElement('span');
    var progress = audioElement.currentTime / audioElement.duration * 100;
    progressElement.style.width = progress + "%";
    var minutes = Math.floor(audioElement.currentTime / 60);
    var seconds = Math.floor(audioElement.currentTime % 60);
    timeElement.textContent = minutes + ":" + seconds.toString().padStart(2, "00");
    durationElement.textContent = totalDuration.toString();
    timeElement.appendChild(durationElement);
  } catch (error) {
    console.error(error);
  }
}

function playPause(audio) {
  if (audio.paused) audio.play();else audio.pause();
} // Add an event listener to update progress and time continuously


audioElement.addEventListener('timeupdate', updateTimeAndProgress); // Play the audio

audioElement.play();