//פונקציה שמקשרת את הקלאסים שנימצאים ב-center.ts
// const song: Song[] = getSongsFromLocalStorage();
// const singer: Singer[] = getSingersFromLocalStorage();

class AudioElement {
  constructor(public name: string, public artist: string, public audio: HTMLAudioElement, public img: string, public id: number) { }
}



const audioElements: AudioElement[] = [
  new AudioElement(
    "Her Ghost in The Fog",
    "Cradle Of Filth",
    new Audio("../dist/media/Cradle of Filth - Her Ghost in The Fog (192 kbps).mp3"),
    'https://www.metalcallout.com/sites/default/files/img/cradledarklycover2.jpg',
    1
  ),
  new AudioElement(
    "Final Countdown",
    "Europe",
    new Audio("../dist/media/Europe - The Final Countdown.mp3")
    , 'https://upload.wikimedia.org/wikipedia/en/2/22/The_Final_Countdown_single.png',
    2)
];

// console.log(audioElements)
// const audioElement = new AudioElement("Her Ghost in The Fog", "Cradle Of Filth", new Audio('./dist/Cradle of Filth - Her Ghost in The Fog (192 kbps).mp3'))

//Render Player
const wrapperDiv = document.querySelector('.wrapper');
let activeSong: AudioElement | undefined;
function renderPlayer(songId) {
  try {




    if (!songId) {
      throw new Error('No song ID provided');
    }

    if (!audioElements) {
      throw new Error('No songs data available');
    }

    activeSong = audioElements.find(song => song.id === songId);


    if (activeSong !== undefined) {
      activeSong.audio.play();
      const html = `
        <div class="player" id="${activeSong.id}" style="background-image:url('${activeSong.img}')">
          <div class="player__collapse">
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div class="player__header">
          <div class="player__title-thumb" style="background-image: url('${activeSong.img}')"></div>
          <div class="player__title">
              <div class="player__title-song">${activeSong.name}</div>
              <div class="player__title-artist">${activeSong.artist}</div>
          </div>
          <div class="player__header-play" onclick="playPause(activeSong)"><i class="fa-sharp fa-solid fa-play"></i></div>
      </div>
      <div class="player__image"
      style="background-image: url('${activeSong.img}')">
    </div>
    <div class="player__controls">
    <audio src="${activeSong.audio.src}"></audio>
    <div id="progress-container">
        <div id="progress" class="timeBar__progress"></div>
        <div id="time"></div>
    </div>
    
    <div class="buttons">
        <div><i class="fa-solid fa-shuffle"></i></div>
        <div onclick="backBtn(activeSong)">   <i class="fa-solid fa-backward-step"></i></div>
        <div class="playBtn" onclick="playPause(activeSong)"><i class="fa-solid fa-circle-play"></i></div>
        <div onclick="nextBtn(activeSong)">  <i class="fa-solid fa-forward-step"></i></div>
        <div onclick="audioElement.pause()"><i class="fa-solid fa-repeat"></i></div>
    
    </div>
    
    <!-- <i class="fa-solid fa-shuffle"></i>
    
    <button id="play-icon"></i></button>
    
    <i class="fa-solid fa-arrows-rotate"></i>
    <button id="mute-icon"></button> -->
    </div>`

      if (!wrapperDiv) throw new Error('no div element')
      wrapperDiv.innerHTML = html;
      const progressContainer = document.querySelector("#progress-container") as HTMLDivElement;
      progressContainer.addEventListener('click', seek);
      activeSong.audio.addEventListener('timeupdate', () => updateTimeAndProgress(activeSong.audio));

    }
  } catch (error) {
    console.error(error);
  }
}
///



function updateTimeAndProgress(audioElement) {
  try {
    const progressContainer = document.querySelector("#progress-container") as HTMLDivElement;
    const progressElement = document.querySelector("#progress") as HTMLDivElement;
    const timeElement = document.querySelector("#time") as HTMLDivElement;
    const totalDurationInSeconds = audioElement.duration;
    const totalDuration = `${Math.floor(totalDurationInSeconds / 60)}:${Math.floor(totalDurationInSeconds % 60)} `;
    const durationElement = document.createElement('span');

    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    progressElement.style.width = `${progress}% `;
    const minutes = Math.floor(audioElement.currentTime / 60);
    const seconds = Math.floor(audioElement.currentTime % 60);
    timeElement.textContent = `${minutes}:${seconds.toString().padStart(2, "0")} `;

    const remainingTimeInSeconds = totalDurationInSeconds - audioElement.currentTime;
    const remainingMinutes = Math.floor(remainingTimeInSeconds / 60);
    const remainingSeconds = Math.floor(remainingTimeInSeconds % 60);
    const remainingTime = ` - ${remainingMinutes}:${remainingSeconds.toString().padStart(2, "0")} `;
    durationElement.textContent = remainingTime;
    timeElement.appendChild(durationElement);
  } catch (error) {
    console.error(error);
  }
}

const seek = (event: MouseEvent) => {

  const progressElement = document.querySelector("#progress") as HTMLDivElement;
  const progressContainer = document.querySelector("#progress-container") as HTMLDivElement;
  const progressBarWidth = progressContainer.offsetWidth;
  const clickX = event.clientX - progressContainer.getBoundingClientRect().left;
  const progress = (clickX / progressBarWidth) * 100;

  if (activeSong) {

    const audioElement = activeSong.audio;
    audioElement.currentTime = (progress / 100) * audioElement.duration;
  }
};


function playPause() {
  if (activeSong && activeSong.audio) {
    const audioElement = activeSong.audio;
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }
}



function nextBtn(activeSong) {
  if (activeSong.id < audioElements.length) {
    activeSong.audio.pause()
    renderPlayer(activeSong.id + 1)
  } else
   
    
    console.log('Last song"')
    
}
function backBtn(activeSong) {
  if (activeSong.id >1) {
    activeSong.audio.pause()
    renderPlayer(activeSong.id - 1)
  }else 
  console.log('first song')
  
}