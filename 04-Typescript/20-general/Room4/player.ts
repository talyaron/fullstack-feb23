
  const audioElement = new Audio('./dist/Cradle of Filth - Her Ghost in The Fog (192 kbps).mp3');

  function updateTimeAndProgress() {
    try {
      const progressElement = document.querySelector("#progress") as HTMLDivElement;
      const timeElement = document.querySelector("#time") as HTMLDivElement;
      const totalDurationInSeconds = audioElement.duration;
      const totalDuration = `${Math.floor(totalDurationInSeconds/60)}:${Math.floor(totalDurationInSeconds%60)}`
      const durationElement = document.createElement('span');

      const progress = (audioElement.currentTime / audioElement.duration) * 100;
      progressElement.style.width = `${progress}%`;
      const minutes = Math.floor(audioElement.currentTime / 60);
      const seconds = Math.floor(audioElement.currentTime % 60);
      timeElement.textContent = `${minutes}:${seconds.toString().padStart(2, "00")}`;
      durationElement.textContent = totalDuration.toString();
      timeElement.appendChild(durationElement);
      
      
    } catch (error) {
      console.error(error);
    }
  }
  function playPause (audio) {
    if (audio.paused) 
      audio.play(); 
    else 
      audio.pause();
  }

  // Add an event listener to update progress and time continuously
  audioElement.addEventListener('timeupdate', updateTimeAndProgress);

  // Play the audio
  audioElement.play();

