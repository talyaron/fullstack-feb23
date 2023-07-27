//classes - songs, singers, playlists
//class of oll the songs.
//song - id, name of the song, artist, audio.
var Song = /** @class */ (function () {
    function Song(id, name, artist, audio, img) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.audio = audio;
        this.img = img;
    }
    return Song;
}());
var songsArray = getSongsFromLocalStorage();
if (songsArray.length === 0) {
    var song1 = new Song(1, 'Can not feel my face', 'Red Band', '../dist/media/redBand&ninet.mp3', '../dist/media/220px-Red_-_band_press_photo.jpg');
    var song2 = new Song(2, 'Peaches', 'Justin Bieber', '../dist/media/JustinBieber-Peaches.mp3', '../dist/media/justin-bieber-gettyimages-1202421980.jpg');
    var song3 = new Song(3, 'Girls Like You', 'Maroon 5', '../dist/media/Maroon5-GirlsLikeYou.mp3', '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg');
    var song4 = new Song(4, 'התעוררתי עם נמר', 'עומר אדם', '../dist/media/עומר אדם&איזי-התעוררתיעםנמר.mp3', '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg');
    var song5 = new Song(5, 'קןמה 58', 'עומר אדם', '../dist/media/[YT2mp3.info] - עומר אדם – קומה 58   (Prod. by Assaf Tzrouya) (128kbps).mp3', '../dist/media/justin-bieber-gettyimages-1202421980.jpg');
    songsArray.push(song1, song2, song3, song4, song5);
}
;
console.log(songsArray[0].name);
//class of oll the singers.
//singer - id, name of the singer, img, genre, songs.
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
if (singersArray.length === 0) {
    var singer1 = new Singer('Red Band', '../dist/media/220px-Red_-_band_press_photo.jpg', 'rock', [songsArray[0]]);
    var singer2 = new Singer('Justin Bieber', '../dist/media/justin-bieber-gettyimages-1202421980.jpg', 'pop', [songsArray[1]]);
    var singer3 = new Singer('Maroon 5', '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg', 'pop', [songsArray[2]]);
    var singer4 = new Singer('עומר אדם', '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg', 'mediterranean', [songsArray[3], songsArray[4]]);
    singersArray.push(singer1, singer2, singer3, singer4);
}
;
console.log(singersArray[3].songs);
//class how join singers and their songs.
var SingersSong = /** @class */ (function () {
    function SingersSong(singers, songs) {
        this.singers = singers;
        this.songs = songs;
        this.id = Math.random().toString(16).slice(2).toString();
    }
    return SingersSong;
}());
//create array of singers and their songs.
function createSingersSongsArray(singers, songs) {
    var singersSongsArray = [];
    var _loop_1 = function (singer) {
        var songsBySinger = songs.filter(function (song) { return song.artist === singer.name; });
        var singersSong = new SingersSong([singer], songsBySinger);
        singersSongsArray.push(singersSong);
    };
    for (var _i = 0, singers_1 = singers; _i < singers_1.length; _i++) {
        var singer = singers_1[_i];
        _loop_1(singer);
    }
    return singersSongsArray;
}
var singersSongsArray = createSingersSongsArray(singersArray, songsArray);
console.log(singersSongsArray.forEach(function (singersSong) { return singersSong.songs.forEach(function (song) { return console.log(song.name); }); }));
//
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
        var songs = songsArray_1.map(function (song) { return new Song(song.id, song.name, song.artist, song.audio, song.img); });
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
        var singers = singersArray_1.map(function (singer) { return new Singer(singer.name, singer.img, singer.genre, singer.songs); });
        return singers;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
//singersSongs local storage.
function saveSingersSongsToLocalStorage(singersSong) {
    localStorage.setItem('singersSongsArray', JSON.stringify(singersSong));
}
;
function getSingersSongsFromLocalStorage() {
    try {
        var singersSongsStorage = localStorage.getItem('singersSongsArray');
        if (!singersSongsStorage)
            return [];
        var singersSongsArray_1 = JSON.parse(singersSongsStorage);
        if (!singersSongsArray_1)
            throw new Error('SingersSongs not found');
        if (!Array.isArray(singersSongsArray_1))
            throw new Error('singersSongsArray is not array');
        var singersSongs = singersSongsArray_1.map(function (singersSong) { return new SingersSong(singersSong.singers, singersSong.songs); });
        return singersSongs;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
;
