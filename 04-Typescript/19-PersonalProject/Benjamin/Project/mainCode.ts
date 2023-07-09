
class songs {
  constructor(public id: string, public name: string, public artist: string, public src: string, public img: string) { }

  static newIdGenerator() {
    return `${Math.floor(Math.random() * 1000)}`;
  }
}

const songsArr: songs[] = [
  new songs(songs.newIdGenerator(), "Dancin", "Aaron Smith", "dist/songs/Aaron Smith - Dancin (KRONO Remix) (3).mp3", "https://i.ytimg.com/vi/0XFudmaObLI/maxresdefault.jpg"),
  new songs(songs.newIdGenerator(), "Waiting for love", "Avicci", "dist/songs/Avicii - Waiting For Love (1).mp3", "https://upload.wikimedia.org/wikipedia/he/8/81/Avicii%27s_Waiting_For_Love%2C_Cover_Artwork.png"),
  new songs(songs.newIdGenerator(), "Reckoning Song", "Asaf Avidan", "dist/songs/Asaf Avidan & The Mojos - One Day - Reckoning Song (Wankelmut Remix)t.mp3", "https://yt3.googleusercontent.com/ytc/AGIKgqNc058OG6oxMZgjeT77qEE6VbGeIioFlKfVm_INAA=s900-c-k-c0x00ffffff-no-rj"),
  new songs(songs.newIdGenerator(), "Waiting for love", "Avicci", "dist/songs/Avicii - Waiting For Love (1).mp3", "https://upload.wikimedia.org/wikipedia/he/8/81/Avicii%27s_Waiting_For_Love%2C_Cover_Artwork.png"),
  new songs(songs.newIdGenerator(), "Waiting for love", "Avicci", "dist/songs/Avicii - Waiting For Love (1).mp3", "https://upload.wikimedia.org/wikipedia/he/8/81/Avicii%27s_Waiting_For_Love%2C_Cover_Artwork.png"),
  new songs(songs.newIdGenerator(), "Waiting for love", "Avicci", "=dist/songs/Avicii - Waiting For Love (1).mp3", "https://upload.wikimedia.org/wikipedia/he/8/81/Avicii%27s_Waiting_For_Love%2C_Cover_Artwork.png")
];

const suggestedRoot = document.querySelector(".MainPageWrapper__suggested");
if (suggestedRoot) {
  const songsMappedAndJoin = songsArr
    .map(song => `<div class="song" onclick="handleSongClick(${song.id})"><div class="song__title">${song.artist}-${song.name}</div><img class="song__img" src="${song.img}" alt=""></div>`)
    .join('');

  suggestedRoot.innerHTML += songsMappedAndJoin;
}

function handleSongClick(songID: string) {
  const song = songsArr.find(song => song.id == songID);
  if (song) {
    localStorage.setItem('selectedSong', JSON.stringify(song));
  }
  window.location.href = "songRedirect.html";
}

let songsCounter = 0;
const storedSong = localStorage.getItem('selectedSong');
const selectedSong: songs = storedSong ? JSON.parse(storedSong) : null;

let lastListenedArr: songs[] = [];

function lastListenedGenerator(song: songs) {
  const storedSongs = localStorage.getItem('lastListenedSongs');
  let songsArray: songs[] = [];

  if (storedSongs) {
    songsArray = JSON.parse(storedSongs);
  }

  songsArray.push(song);

  if (songsArray.length > 6) {
    songsArray.shift();
  }

  localStorage.setItem('lastListenedSongs', JSON.stringify(songsArray));
  lastListenedArr = songsArray;
  console.log(lastListenedArr);
}

SongPageGenerator(selectedSong)
function SongPageGenerator(song) {

  const SongsRoot = document.querySelector(".SongPageRoot") as HTMLDivElement;


  const songHTML = `
        <div class="songWrapper">
          <div class="songWrapper__name">${song.name}</div>
          <div class="songWrapper__artist">${song.artist}</div>
          <img class="songWrapper__img" src="${song.img}" alt="">
          <i id="playicon" class="fa-solid fa-play fa-2xl"></i>   
          <i id="pauseicon" class="fa-solid fa-pause fa-2xl"></i> 
          <div id="time"></div>
        </div>`;
  SongsRoot.innerHTML += songHTML;
  lastListenedGenerator(selectedSong);


}
const playicon: HTMLDivElement | null = document.querySelector("#playicon")
const pauseicon: HTMLDivElement | null = document.querySelector("#pauseicon")
const image = document.querySelector(".songWrapper__img")
if (playicon) {
  playicon.style.display = "block"
}
if (pauseicon) {
  pauseicon.style.display = "none"
}

let audioElement: HTMLAudioElement | null = null;
let playbackPosition = 0;
let intervalId: number | null = null;

image?.addEventListener("click", () => {
  if (!audioElement) {
    audioElement = new Audio(selectedSong.src);
    audioElement.addEventListener("ended", () => {
      audioElement?.pause();
      if(audioElement)
      audioElement.currentTime = 0;
      playbackPosition = 0;
      if(playicon)
      playicon.style.display = "block";
      if(pauseicon)
      pauseicon.style.display = "none";
      if(intervalId)
      clearInterval(intervalId);
    });
  }

  if (audioElement.paused) {
    audioElement.currentTime = playbackPosition;
    audioElement.play();
    let currentTime = new Date().getTime() ;
    
    if(playicon)
    playicon.style.display = "none";
    if(pauseicon){
    pauseicon.style.display = "block";
    if(new Date().getTime()- currentTime>=4){
      pauseicon.style.display = "none";
    }

  }
    intervalId = setInterval(updateTimeAndProgress, 1000);
  } else {
    playbackPosition = audioElement.currentTime;
    audioElement.pause();
    if(playicon)
    playicon.style.display = "block";
    if(pauseicon)
    pauseicon.style.display = "none";
    if(intervalId)
    clearInterval(intervalId);
  }
});

function updateTimeAndProgress() {
  const progressElement = document.querySelector("#progress") as HTMLDivElement;
  const timeElement = document.querySelector("#time") as HTMLDivElement;
  const progress = (audioElement.currentTime / audioElement.duration) * 100;
  progressElement.style.width = `${progress}%`;
  const minutes = Math.floor(audioElement.currentTime / 60);
  const seconds = Math.floor(audioElement.currentTime % 60);
  timeElement.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

const lastListenedSection = document.querySelector(".MainPageWrapper__lastListened__ROOT") as HTMLDivElement;
