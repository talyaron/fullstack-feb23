var songs = /** @class */ (function () {
    function songs(id, name, artist, src, img) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.src = src;
        this.img = img;
    }
    songs.newIdGenerator = function () {
        return "" + Math.floor(Math.random() * 1000);
    };
    return songs;
}());
var songsArr = [
    new songs(songs.newIdGenerator(), "Dancin", "Aaron Smith", "dist/songs/Aaron Smith - Dancin (KRONO Remix) (3).mp3", "https://i.ytimg.com/vi/0XFudmaObLI/maxresdefault.jpg"),
    new songs(songs.newIdGenerator(), "Waiting for love", "Avicci", "dist/songs/Avicii - Waiting For Love (1).mp3", "https://upload.wikimedia.org/wikipedia/he/8/81/Avicii%27s_Waiting_For_Love%2C_Cover_Artwork.png"),
    new songs(songs.newIdGenerator(), "Reckoning Song", "Asaf Avidan", "dist/songs/Asaf Avidan & The Mojos - One Day - Reckoning Song (Wankelmut Remix)t.mp3", "https://yt3.googleusercontent.com/ytc/AGIKgqNc058OG6oxMZgjeT77qEE6VbGeIioFlKfVm_INAA=s900-c-k-c0x00ffffff-no-rj"),
    new songs(songs.newIdGenerator(), "Waiting for love", "Avicci", "dist/songs/Avicii - Waiting For Love (1).mp3", "https://upload.wikimedia.org/wikipedia/he/8/81/Avicii%27s_Waiting_For_Love%2C_Cover_Artwork.png"),
    new songs(songs.newIdGenerator(), "Waiting for love", "Avicci", "dist/songs/Avicii - Waiting For Love (1).mp3", "https://upload.wikimedia.org/wikipedia/he/8/81/Avicii%27s_Waiting_For_Love%2C_Cover_Artwork.png"),
    new songs(songs.newIdGenerator(), "Waiting for love", "Avicci", "=dist/songs/Avicii - Waiting For Love (1).mp3", "https://upload.wikimedia.org/wikipedia/he/8/81/Avicii%27s_Waiting_For_Love%2C_Cover_Artwork.png")
];
var suggestedRoot = document.querySelector(".MainPageWrapper__suggested");
if (suggestedRoot) {
    var songsMappedAndJoin = songsArr
        .map(function (song) { return "<div class=\"song\" onclick=\"handleSongClick(" + song.id + ")\"><div class=\"song__title\">" + song.artist + "-" + song.name + "</div><img class=\"song__img\" src=\"" + song.img + "\" alt=\"\"></div>"; })
        .join('');
    suggestedRoot.innerHTML += songsMappedAndJoin;
}
function handleSongClick(songID) {
    var song = songsArr.find(function (song) { return song.id == songID; });
    if (song) {
        localStorage.setItem('selectedSong', JSON.stringify(song));
    }
    window.location.href = "songRedirect.html";
}
var songsCounter = 0;
var storedSong = localStorage.getItem('selectedSong');
var selectedSong = storedSong ? JSON.parse(storedSong) : null;
var lastListenedArr = [];
function lastListenedGenerator(song) {
    var storedSongs = localStorage.getItem('lastListenedSongs');
    var songsArray = [];
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
SongPageGenerator(selectedSong);
function SongPageGenerator(song) {
    var SongsRoot = document.querySelector(".SongPageRoot");
    var songHTML = "\n        <div class=\"songWrapper\">\n          <div class=\"songWrapper__name\">" + song.name + "</div>\n          <div class=\"songWrapper__artist\">" + song.artist + "</div>\n          <img class=\"songWrapper__img\" src=\"" + song.img + "\" alt=\"\">\n          <i id=\"playicon\" class=\"fa-solid fa-play fa-2xl\"></i>   \n          <i id=\"pauseicon\" class=\"fa-solid fa-pause fa-2xl\"></i> \n          <div id=\"time\"></div>\n        </div>";
    SongsRoot.innerHTML += songHTML;
    lastListenedGenerator(selectedSong);
}
var playicon = document.querySelector("#playicon");
var pauseicon = document.querySelector("#pauseicon");
var image = document.querySelector(".songWrapper__img");
if (playicon) {
    playicon.style.display = "block";
}
if (pauseicon) {
    pauseicon.style.display = "none";
}
var audioElement = null;
var playbackPosition = 0;
var intervalId = null;
image === null || image === void 0 ? void 0 : image.addEventListener("click", function () {
    if (!audioElement) {
        audioElement = new Audio(selectedSong.src);
        audioElement.addEventListener("ended", function () {
            audioElement === null || audioElement === void 0 ? void 0 : audioElement.pause();
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
        var currentTime = new Date().getTime();
        if (playicon)
            playicon.style.display = "none";
        if (pauseicon) {
            pauseicon.style.display = "block";
            if (new Date().getTime() - currentTime >= 4) {
                pauseicon.style.display = "none";
            }
        }
        intervalId = setInterval(updateTimeAndProgress, 1000);
    }
    else {
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
    var progressElement = document.querySelector("#progress");
    var timeElement = document.querySelector("#time");
    var progress = (audioElement.currentTime / audioElement.duration) * 100;
    progressElement.style.width = progress + "%";
    var minutes = Math.floor(audioElement.currentTime / 60);
    var seconds = Math.floor(audioElement.currentTime % 60);
    timeElement.textContent = minutes + ":" + seconds.toString().padStart(2, "0");
}
var lastListenedSection = document.querySelector(".MainPageWrapper__lastListened__ROOT");
