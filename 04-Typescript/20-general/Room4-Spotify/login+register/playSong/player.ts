//פונקציה שמקשרת את הקלאסים שנימצאים ב-center.ts
const song: Song[] = getSongsFromLocalStorage();
// const singer: Singer[] = getSingersFromLocalStorage();



// --------- Song Class with constructor -------
class AudioElement {
  constructor(public name: string, public artist: string, public audio: HTMLAudioElement, public img: string, public id: number) { }
}

//i took song array from center.ts

const audioElements: song[] = songsArray;


//----------- demo array of songs with class AudioElement(song) 

// const audioElements = [];

audioElements.push(
  new Song(
    6,
    "Her Ghost in The Fog",
    "Cradle Of Filth",
    new Audio("../dist/media/Cradle of Filth - Her Ghost in The Fog (192 kbps).mp3"),
    'https://www.metalcallout.com/sites/default/files/img/cradledarklycover2.jpg',
  )
);

audioElements.push(
  new Song(
    7,
    "Final Countdown",
    "Europe",
    new Audio("../dist/media/Europe - The Final Countdown.mp3"),
    'https://upload.wikimedia.org/wikipedia/en/2/22/The_Final_Countdown_single.png',
  )
);

audioElements.push(
  new Song(
    8,
    "Still Loving You",
    "Scorpions",
    new Audio("../dist/media/scorpions_-_wind-of-change.mp3"),
    'https://upload.wikimedia.org/wikipedia/en/a/af/Scorpions-stilllovingyouep1.jpg',
  )
);





//-------------Render html song in Player
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
        <audio id="audio"src="${activeSong.audio.src}"></audio>
        <div id="progress-container">
            <div id="progress" class="timeBar__progress"></div>
            <div id="time"></div>
        </div>
   
      
      <div class="buttons">`
      if (shuffle) {
        html += '<div class="shuffleBtn" onclick="shuffleBtn(audioElements)" style="color:red;"><i class="fa-solid fa-shuffle"></i></div>'
      } else {
        html += '<div class="shuffleBtn" onclick="shuffleBtn(audioElements)"><i class="fa-solid fa-shuffle"></i></div>'
      }
      html += ` <div onclick="backBtn(activeSong)">   <i class="fa-solid fa-backward-step"></i></div>
          <div class="playBtn" onclick="playPause(activeSong)"><i class="fa-solid fa-circle-play"></i></div>
          <div onclick="nextBtn(activeSong)">  <i class="fa-solid fa-forward-step"></i></div>
  `
      if (repeat) {
        html += '<div class="repeatBtn" onclick="repeatBtn()" style="color:red;"><i class="fa-solid fa-repeat"></i></div>'

      } else {
        html += '<div class="repeatBtn" onclick="repeatBtn()"><i class="fa-solid fa-repeat"></i></div>'

      }
      html += `
    
    </div>
    
  
    </div>`

      if (!wrapperDiv) throw new Error('no div element')
      wrapperDiv.innerHTML = html;
      const progressContainer = document.querySelector("#progress-container") as HTMLDivElement;
      progressContainer.addEventListener('click', seek);
      activeSong.audio.addEventListener('timeupdate', () => updateTimeAndProgress(activeSong.audio));
      activeSong.audio.addEventListener("ended", () => {
        if (repeat) {
          nextBtn(activeSong);
        } else {
          return;
        }
      });

    }

  } catch (error) {
    console.error(error);
  }
}
///

//------------ Function of song timeline (current time+remain time)

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
//---------- function for clicking on timeline and move song to part of timeline
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

//---------- function play Song (if playing,pause)

function playPause() {
  try {
    if (activeSong && activeSong.audio) {
      const audioElement = activeSong.audio;
      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  } catch (error) {
    console.error(error)
  }
}


//--------function for button NEXT
function nextBtn(activeSong) {
try {
  activeSong.audio.currentTime = 0;
  if (shuffle) {
    if (activeSong.audio.play) {
      activeSong.audio.pause()
    }
    randomSong();

  } else if (activeSong.id < audioElements.length) {
    activeSong.audio.pause();
   
    renderPlayer(activeSong.id + 1)
  } else {
    console.log('Last song"');
    if (repeat) {
      activeSong.audio.pause()
      renderPlayer(1)
    }

  }
} catch (error) {
  console.error(error)
}
  




}

//------ function button BACK
function backBtn(activeSong) {
  if (activeSong.id > 1) {
    activeSong.audio.pause()
    renderPlayer(activeSong.id - 1)
  } else {
    console.log('first song')
    if (repeat) {
      activeSong.audio.pause()
      renderPlayer(audioElements.length)

    }
  }
}

let repeat = false;
let shuffle = false;





const repeatBtnDiv:HTMLDivElement | null = document.querySelector('.repeatBtn')


function repeatBtn() {
  const repeatBtnDiv = document.querySelector('.repeatBtn')
  if(!repeatBtnDiv) throw new Error('no div element')
  if (!repeat) {
    repeat = true;
    repeatBtnDiv.style.color = 'red';


  } else {

    repeatBtnDiv.style.color = 'white';
    repeat = false;
  }
}



function shuffleBtn() {
  const shuffleBtnDiv = document.querySelector('.shuffleBtn')
  if (!shuffle) {
    shuffle = true;
    shuffleBtnDiv.style.color = 'red';
    console.log(shuffle)
  } else {
    shuffle = false;
    shuffleBtnDiv.style.color = 'white';
    console.log(shuffle)
  }
}
function randomSong() {
  let random = audioElements[Math.floor(Math.random() * audioElements.length)];
  if (random === activeSong) {
    random = audioElements[Math.floor(Math.random() * audioElements.length)];
    console.log(random)
  }
  console.log(random)
  renderPlayer(random.id)
  // console.log(activeSong)
}




