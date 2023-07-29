//classes - songs, singers, playlists

//class of oll the songs.
//song - id, name of the song, artist, audio.
class Song {
    constructor(public id: number, public name: string, public artist: string, public audio: HTMLElement, public img: string) {
    }
}

const songsArray: Song[] = [
    new Song(1, 'Can not feel my face', 'Red Band', new Audio('../dist/media/redBand&ninet.mp3'), '../dist/media/220px-Red_-_band_press_photo.jpg'),
    new Song(2, 'Peaches', 'Justin Bieber', new Audio('../dist/media/JustinBieber-Peaches.mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg',),
    new Song(3, 'Girls Like You', 'Maroon 5', new Audio('../dist/media/Maroon5-GirlsLikeYou.mp3'), '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg'),
    new Song(4, 'התעוררתי עם נמר', 'עומר אדם', new Audio('../dist/media/עומר אדם&איזי-התעוררתיעםנמר.mp3'), '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg'),
    new Song(5, 'קןמה 58', 'עומר אדם', new Audio('../dist/media/[YT2mp3.info] - עומר אדם – קומה 58   (Prod. by Assaf Tzrouya) (128kbps).mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg',),
    new Song(6, '505', 'Arctic Monkeys', new Audio('../dist/media/505.mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg',),
    new Song(7, 'קומה 58', 'עומר אדם', new Audio('../dist/media/[YT2mp3.info] - עומר אדם – קומה 58   (Prod. by Assaf Tzrouya) (128kbps).mp3'), '../dist/media/justin-bieber-gettyimages-1202421980.jpg',),
    ]


//class of oll the singers.
//singer - id, name of the singer, img, genre, songs.
class Singer {
    id: string;
    constructor(public name: string, public img: string, public genre: string, public songs: Song[]) {
        this.id = Math.random().toString(16).slice(2).toString();
    }
}

const singersArray: Singer[] = getSingersFromLocalStorage();
if (singersArray.length === 0) {
    const singer1 = new Singer('Red Band', '../dist/media/220px-Red_-_band_press_photo.jpg', 'rock', [songsArray[0]]);
    const singer2 = new Singer('Justin Bieber', '../dist/media/justin-bieber-gettyimages-1202421980.jpg', 'pop', [songsArray[1]]);
    const singer3 = new Singer('Maroon 5', '../dist/media/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg', 'pop', [songsArray[2]]);
    const singer4 = new Singer('עומר אדם', '../dist/media/עומר_אדם_צילום_שי_פרנקו_(cropped).jpg', 'mediterranean', [songsArray[3], songsArray[4]]);
    singersArray.push(singer1, singer2, singer3, singer4);
};
console.log(singersArray[3].songs)
//class how join singers and their songs.
class SingersSong {
    id: string;
    constructor(public singers: Singer[], public songs: Song[]) {
        this.id = Math.random().toString(16).slice(2).toString();
    }
}

//create array of singers and their songs.
function createSingersSongsArray(singers: Singer[], songs: Song[]): SingersSong[] {
    const singersSongsArray: SingersSong[] = [];

    for (const singer of singers) {
        const songsBySinger = songs.filter(song => song.artist === singer.name);
        const singersSong = new SingersSong([singer], songsBySinger);
        singersSongsArray.push(singersSong);
    }

    return singersSongsArray;
}
const singersSongsArray = createSingersSongsArray(singersArray, songsArray);
console.log(singersSongsArray.forEach(singersSong => singersSong.songs.forEach(song => console.log(song.name))));
//

//songs local storage.
saveSongsToLocalStorage(songsArray)
function saveSongsToLocalStorage(song: Song[]) {
    localStorage.setItem('songsArray', JSON.stringify(song));
}

function getSongsFromLocalStorage(): Song[] {
    try {
        const songsStorage = localStorage.getItem('songsArray');

        if (!songsStorage) return [];

        const songsArray = JSON.parse(songsStorage);

        if (!songsArray) throw new Error('Songs not found');
        if (!Array.isArray(songsArray)) throw new Error('songsArray is not array');

        const songs = songsArray.map(song => new Song(song.id, song.name, song.artist, song.audio, song.img));
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

        if (!singersArray) throw new Error('Singers not found');
        if (!Array.isArray(singersArray)) throw new Error('singersArray is not array');

        const singers = singersArray.map(singer => new Singer(singer.name, singer.img, singer.genre, singer.songs));
        return singers;
    } catch (error) {
        console.error(error);
        return [];
    }
}

//singersSongs local storage.
function saveSingersSongsToLocalStorage(singersSong: SingersSong[]) {
    localStorage.setItem('singersSongsArray', JSON.stringify(singersSong));
};

function getSingersSongsFromLocalStorage(): SingersSong[] {
    try {
        const singersSongsStorage = localStorage.getItem('singersSongsArray');

        if (!singersSongsStorage) return [];

        const singersSongsArray = JSON.parse(singersSongsStorage);

        if (!singersSongsArray) throw new Error('SingersSongs not found');
        if (!Array.isArray(singersSongsArray)) throw new Error('singersSongsArray is not array');

        const singersSongs = singersSongsArray.map(singersSong => new SingersSong(singersSong.singers, singersSong.songs));
        return singersSongs;
    } catch (error) {
        console.error(error);
        return [];
    }
};