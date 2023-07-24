const song: Song[] = getSongsFromLocalStorage();
const singer: Singer[] = getSingersFromLocalStorage();

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

// Example usage:
const headerElement: HTMLElement | null = document.querySelector("#header");
getGreetingByTimeOfDay(headerElement, new Date());

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
                     <img src="${song.src}">
                     <h3>${song.name}</h3>
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