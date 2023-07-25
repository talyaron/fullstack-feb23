//classes - songs, singers, playlists
//
// public singer: string,
// , public src: HTMLAudioElement
// , new Audio ('../dist/media/redBand&ninet')
//
class Song {
    id: string;
    constructor(public name: string,  public img: string) {
        this.id = Math.random().toString(16).slice(2).toString();
    }
}
const songsArray: Song[] = getSongsFromLocalStorage();
if (songsArray.length === 0) {
    const song1 = new Song('Red Band', '../dist/media/220px-Red_-_band_press_photo.jpg');
    const song2 = new Song('Justin Bieber','../dist/media/justin-bieber-gettyimages-1202421980.jpg');
    const song3 = new Song('Maroon 5', '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg');
    const song4 = new Song('עומר אדם', '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg');
    songsArray.push(song1, song2, song3, song4);
}; 

class Singer {
    id: string;
    constructor(public name: string, public img: string, public genre: string, public songs: Song[]) {
        this.id = Math.random().toString(16).slice(2).toString();
    }
}
const singersArray: Singer[] = getSingersFromLocalStorage();

// class Playlist {
//     id: string;
//     constructor(public name: string, public img: string, public songs: Song[]) {
//         this.id = Math.random().toString(16).slice(2).toString();
//     }
// }

//songs local storage.
function saveSongsToLocalStorage(song: Song[]) {
    localStorage.setItem('songsArray', JSON.stringify(song));
}

function getSongsFromLocalStorage(): Song[] {
    try {
        const songsStorage = localStorage.getItem('songsArray');

        if (!songsStorage) return [];

        const songsArray = JSON.parse(songsStorage);

        if(!songsArray) throw new Error('Songs not found');
        if(!Array.isArray(songsArray)) throw new Error('songsArray is not array');

        const songs = songsArray.map(song => new Song(song.name, song.src));
        return songs;
    } catch (error) {
        console.error(error);
        return [];
    }
}

//singers local storage.
function saveSingersToLocalStorage(singer: Singer[]) {
    localStorage.setItem('singersArray', JSON.stringify(singer));
}

function getSingersFromLocalStorage(): Singer[] {
    try {
        const singersStorage = localStorage.getItem('singersArray');

        if (!singersStorage) return [];

        const singersArray = JSON.parse(singersStorage);

        if(!singersArray) throw new Error('Singers not found');
        if(!Array.isArray(singersArray)) throw new Error('singersArray is not array');

        const singers = singersArray.map(singer => new Singer(singer.name, singer.img, singer.songs));
        return singers;
    } catch (error) {
        console.error(error);
        return [];
    }
}