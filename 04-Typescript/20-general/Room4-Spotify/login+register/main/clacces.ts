//classes - songs, singers, playlists

class Song {
    id: string;
    constructor(public name: string, public img: string, public src: string) {
        this.id = Math.random().toString(16).slice(2).toString();
    }
}


class Singer {
    id: string;
    constructor(public name: string, public img: string, public songs: Song[]) {
        this.id = Math.random().toString(16).slice(2).toString();
    }
}

class Playlist {
    id: string;
    constructor(public name: string, public img: string, public songs: Song[]) {
        this.id = Math.random().toString(16).slice(2).toString();
    }
}