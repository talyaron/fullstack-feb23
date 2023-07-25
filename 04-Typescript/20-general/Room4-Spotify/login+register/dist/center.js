//classes - songs, singers, playlists
// public singer: string,
var Song = /** @class */ (function () {
    function Song(name, src) {
        this.name = name;
        this.src = src;
        this.id = Math.random().toString(16).slice(2).toString();
    }
    return Song;
}());
var songsArray = getSongsFromLocalStorage();
if (songsArray.length === 0) {
    var song1 = new Song('Red Band', '../dist/media/220px-Red_-_band_press_photo.jpg');
    var song2 = new Song('Justin Bieber', '../dist/media/justin-bieber-gettyimages-1202421980.jpg');
    var song3 = new Song('Maroon 5', '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg');
    var song4 = new Song('עומר אדם', '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg');
    songsArray.push(song1, song2, song3, song4);
}
;
var Singer = /** @class */ (function () {
    function Singer(name, img, genre, songs) {
        this.name = name;
        this.img = img;
        this.genre = genre;
        this.songs = songs;
        this.id = Math.random().toString(16).slice(2).toString();
    }
    return Singer;
}());
var singersArray = getSingersFromLocalStorage();
// class Playlist {
//     id: string;
//     constructor(public name: string, public img: string, public songs: Song[]) {
//         this.id = Math.random().toString(16).slice(2).toString();
//     }
// }
//songs local storage.
function saveSongsToLocalStorage(song) {
    localStorage.setItem('songsArray', JSON.stringify(song));
}
function getSongsFromLocalStorage() {
    try {
        var songsStorage = localStorage.getItem('songsArray');
        if (!songsStorage)
            return [];
        var songsArray_1 = JSON.parse(songsStorage);
        if (!songsArray_1)
            throw new Error('Songs not found');
        if (!Array.isArray(songsArray_1))
            throw new Error('songsArray is not array');
        var songs = songsArray_1.map(function (song) { return new Song(song.name, song.src); });
        return songs;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
//singers local storage.
function saveSingersToLocalStorage(singer) {
    localStorage.setItem('singersArray', JSON.stringify(singer));
}
function getSingersFromLocalStorage() {
    try {
        var singersStorage = localStorage.getItem('singersArray');
        if (!singersStorage)
            return [];
        var singersArray_1 = JSON.parse(singersStorage);
        if (!singersArray_1)
            throw new Error('Singers not found');
        if (!Array.isArray(singersArray_1))
            throw new Error('singersArray is not array');
        var singers = singersArray_1.map(function (singer) { return new Singer(singer.name, singer.img, singer.songs); });
        return singers;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
