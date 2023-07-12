
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
  new songs(songs.newIdGenerator(), "Creep", "Radiohead", "dist/songs/Creep.mp3", "https://i.ytimg.com/vi/XFkzRNyygfk/maxresdefault.jpg"),
  new songs(songs.newIdGenerator(), "Ain't no sunshine", "Bill Withers", "dist/songs/Bill Withers - Ain't No Sunshine (Official Audio).mp3", "https://images.genius.com/55c4517a908f24d569ceb37c401f09a0.620x620x1.jpg"),
  new songs(songs.newIdGenerator(), "i'm still standing", "Elton John", "dist/songs/Elton John - I'm Still Standing.mp3", "https://upload.wikimedia.org/wikipedia/en/6/69/Elton_John_StillStanding.jpg"),
  new songs(songs.newIdGenerator(), "Just the two of us", "Grover Washington", "dist/songs/Grover Washington Jr. feat. Bill Withers - Just The Two of Us [HQ].mp3", "https://www.blackpast.org/wp-content/uploads/Grover-Washington-Jr.jpg"),
  new songs(songs.newIdGenerator(), "Its a man's world", "James Brown", "dist/songs/James Brown - It's A Man's Man's Man's World.mp3", "https://cdn.britannica.com/34/197534-050-83C616C4/James-Brown-1991.jpg"),
  new songs(songs.newIdGenerator(), "Shut up my mom's calling", "Hotel Ugly", "dist/songs/Shut up My Moms Calling.mp3", "https://cdns-images.dzcdn.net/images/artist/9de827881f210a6bdd597e1410f11c59/500x500.jpg"),
  new songs(songs.newIdGenerator(), "Smells like teen spirit", "Nirvana", "dist/songs/Smells Like Teen Spirit.mp3", "https://i.scdn.co/image/ab67616d0000b273e175a19e530c898d167d39bf"),
  new songs(songs.newIdGenerator(), "This Love", "Maroon 5", "dist/songs/This Love.mp3", "https://media.npr.org/assets/music/news/2010/09/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg"),
  new songs(songs.newIdGenerator(), "", "", "", ""),
  new songs(songs.newIdGenerator(), "", "", "", ""),
  new songs(songs.newIdGenerator(), "", "", "", ""),
  new songs(songs.newIdGenerator(), "", "", "", ""),
  new songs(songs.newIdGenerator(), "", "", "", ""),
  new songs(songs.newIdGenerator(), "", "", "", ""),

];
const paragraphs: string[] = [];
songsArr.forEach(song => {
  paragraphs.push(`${song.artist}-${song.name}`)
})

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
      if (audioElement)
        audioElement.currentTime = 0;
      playbackPosition = 0;
      if (playicon)
        playicon.style.display = "block";
      if (pauseicon)
        pauseicon.style.display = "none";
      if (intervalId)
        clearInterval(intervalId);
    });
  }

  if (audioElement.paused) {
    audioElement.currentTime = playbackPosition;
    audioElement.play();
    let currentTime = new Date().getTime();

    if (playicon)
      playicon.style.display = "none";
    if (pauseicon) {
      pauseicon.style.display = "block";
      if (new Date().getTime() - currentTime >= 4) {
        pauseicon.style.display = "none";
      }

    }
    intervalId = setInterval(updateTimeAndProgress, 1000);
  } else {
    playbackPosition = audioElement.currentTime;
    audioElement.pause();
    if (playicon)
      playicon.style.display = "block";
    if (pauseicon)
      pauseicon.style.display = "none";
    if (intervalId)
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

// regexp-----------------------



function handleSearch(ev: any) {
  try {
    const searchTerms = ev.target.value;
    const pattern = new RegExp(searchTerms, 'i');

    const foundParagraphs: (string | undefined)[] = paragraphs.map((paragraph, i) => {
      const isMatch = pattern.test(paragraph)
      if (isMatch && searchTerms != "") {
        return paragraph
      }
    }).filter((paragraph) => paragraph !== undefined);

    renderParagraphs(foundParagraphs, document.querySelector('#MainPageWrapper__paragraphs'))

  } catch (error) {
    console.error(error)
  }
}

function renderParagraphs(paragraphs: (string | undefined)[], htmlElement: HTMLElement | null) {
  try {
    if (!htmlElement) throw new Error('htmlElement is required');
    const html = paragraphs.map(paragraph => renderParagraph(paragraph)).join(' ');
    htmlElement.innerHTML = html;
  } catch (error) {
    console.error(error)
  }
}

function renderParagraph(paragraph: string | undefined) {
  try {
    if (!paragraph) throw new Error('paragraph is required');
    const songID = idControll(paragraph)
    return `<button onclick="handleSongClick(${songID})" class="found">${paragraph}</button>`

  } catch (error) {
    console.error(error)
  }
}

function idControll(paragraph: string) {
  const matchedSong = songsArr.find(song => `${song.artist}-${song.name}` === paragraph);
  if (matchedSong) {
    return matchedSong.id;
  }
  return null;
}
const suggestedNew = document.querySelector(".MainPageWrapper__suggested__root");
const scrollBTN = document.querySelector(".MainPageWrapper__suggested__scroll");

if (scrollBTN && suggestedNew) {
  scrollBTN.addEventListener("click", function () {
    suggestedNew.classList.toggle("moved");
  });
}
