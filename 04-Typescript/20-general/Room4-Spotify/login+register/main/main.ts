const song: Song[] = getSongsFromLocalStorage();
const singer: Singer[] = getSingersFromLocalStorage();
const singersSong: SingersSong[] = getSingersSongsFromLocalStorage();

function getGreetingByTimeOfDay(rootElement: HTMLElement | null, currentTime: Date): void {
    try {
        if (!rootElement) throw new Error("rootElement is null or undefined");
        const hours = currentTime.getHours();
        let greeting = "";

        if (hours >= 22 || hours < 5) {
            greeting = "Good Night";
        } else if (hours >= 5 && hours < 12) {
            greeting = "Good Morning";
        } else if (hours >= 12 && hours < 18) {
            greeting = "Good Afternoon";
        } else if (hours >= 18 && hours < 22) {
            greeting = "Good Evening";
        } else {
            greeting = "Good Day"; // Just in case there's an error or unexpected input
        }

        if (rootElement) {
            rootElement.innerText = greeting;
        }
    } catch (error) {
        console.error(error);
        return error;
    }
}
const headerElement: HTMLElement | null = document.querySelector("#header");
getGreetingByTimeOfDay(headerElement, new Date());

//show recently heard songs.
function renderSongs(
    rootElement: HTMLElement | null,
    songs: Song[]
) {
    try {
        if (!rootElement) throw new Error('Root element is not found');
        if (!songs) throw new Error('Songs not found');

        const html = songs.map((song) => {
            return `
                   <div class="recentlyHeard__box">
                     <img src="${song.img}">
                     <h3>${song.artist}</h3>
                 </div>`;
        }).join('');

        rootElement.innerHTML = html;

        saveSongsToLocalStorage(song);
        console.log(html)
    } catch (error) {
        console.error(error);
        return error;
    }
}
renderSongs(document.querySelector('#recentlyHeard'), songsArray);

//get random song.
function getRandomSong(songs: Song[]): Song | null {
    try {
        if (!songs) throw new Error('Songs not found');

        if (songs.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * songs.length);
        return songs[randomIndex];

    } catch (error) {
        console.error(error);
        return error;
    }
}

//render random song.
function displayRandomSong(rootElement: HTMLElement | null, songs: Song[]): void {
    try {
        if (!rootElement) throw new Error('Root element is not found');
        if (!songs) throw new Error('Songs not found');

        const randomSong = getRandomSong(songs);

        if (randomSong && rootElement) {
            const html = `
        <div class="randomSong">
          <img src="${randomSong.img}" alt="${randomSong.name}">
          <h2>${randomSong.name}</h2>
        </div> `;

            rootElement.innerHTML = html;
        }

    } catch (error) {
        console.error(error);
        return error;
    }
}
displayRandomSong(document.querySelector("#randomSong"), songsArray);

//create playlist for each singer.
// Function to render the playlist of songs for each singer on the DOM
function renderAllPlaylists(rootElement: HTMLElement | null | Element, singersSongsArray: SingersSong[]): void {
    if (!rootElement) return;

    // Iterate through the singersSongsArray and render playlists for each singer
    for (const singersSong of singersSongsArray) {
        const singer = singersSong.singers[0]; // Since each singersSong has only one singer in the array

        const playlistHTML = singer.songs.map(song => `
            <div class="playlistBySinger">
                <img src="${song.img}" alt="${song.name}">
                <h3>${song.name}</h3>
                <audio controls>
                    <source src="${song.audio}" type="audio/mpeg">
                </audio>
            </div>
        `).join('');

        const section = document.createElement("section");
        section.classList.add("playlist");
        section.innerHTML = `
            <h1>${singer.name}'s Playlist</h1>
            ${playlistHTML}
        `;

        rootElement.appendChild(section);
    }
}

// Assuming you have a div element with the ID "playlistContainer" on your HTML.
const playlistContainer = document.querySelector("#playlistContainer");

// Display playlists for all singers in the singersSongsArray
if (singersSongsArray.length > 0) {
    renderAllPlaylists(playlistContainer, singersSongsArray);
}