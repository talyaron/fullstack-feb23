//classes - songs, singers, playlists
var Song = /** @class */ (function () {
    function Song(name, img, src) {
        this.name = name;
        this.img = img;
        this.src = src;
        this.id = Math.random().toString(16).slice(2).toString();
    }
    return Song;
}());
var Singer = /** @class */ (function () {
    function Singer(name, img, songs) {
        this.name = name;
        this.img = img;
        this.songs = songs;
        this.id = Math.random().toString(16).slice(2).toString();
    }
    return Singer;
}());
var Playlist = /** @class */ (function () {
    function Playlist(name, img, songs) {
        this.name = name;
        this.img = img;
        this.songs = songs;
        this.id = Math.random().toString(16).slice(2).toString();
    }
    return Playlist;
}());
