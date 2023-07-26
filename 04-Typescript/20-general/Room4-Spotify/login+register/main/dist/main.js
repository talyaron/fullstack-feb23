var song = getSongsFromLocalStorage();
var singer = getSingersFromLocalStorage();
var singersSong = getSingersSongsFromLocalStorage();
function getGreetingByTimeOfDay(rootElement, currentTime) {
    try {
        if (!rootElement)
            throw new Error("rootElement is null or undefined");
        var hours = currentTime.getHours();
        var greeting = "";
        if (hours >= 22 || hours < 5) {
            greeting = "Good Night";
        }
        else if (hours >= 5 && hours < 12) {
            greeting = "Good Morning";
        }
        else if (hours >= 12 && hours < 18) {
            greeting = "Good Afternoon";
        }
        else if (hours >= 18 && hours < 22) {
            greeting = "Good Evening";
        }
        else {
            greeting = "Good Day"; // Just in case there's an error or unexpected input
        }
        if (rootElement) {
            rootElement.innerText = greeting;
        }
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
// Example usage:
var headerElement = document.querySelector("#header");
getGreetingByTimeOfDay(headerElement, new Date());
function renderSongs(rootElement, songs) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        if (!songs)
            throw new Error('Songs not found');
        var html = songs.map(function (song) {
            return "\n                   <div class=\"recentlyHeard__box\">\n                     <img src=\"" + song.img + "\">\n                     <h3>" + song.artist + "</h3>\n                 </div>";
        }).join('');
        rootElement.innerHTML = html;
        saveSongsToLocalStorage(song);
        console.log(html);
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
renderSongs(document.querySelector('#recentlyHeard'), songsArray);
//show random song.
function getRandomSong(songs) {
    try {
        if (!songs)
            throw new Error('Songs not found');
        if (songs.length === 0) {
            return null;
        }
        var randomIndex = Math.floor(Math.random() * songs.length);
        return songs[randomIndex];
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
function displayRandomSong(rootElement, songs) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        if (!songs)
            throw new Error('Songs not found');
        var randomSong = getRandomSong(songs);
        if (randomSong && rootElement) {
            var html = "\n        <div class=\"randomSong\">\n          <img src=\"" + randomSong.img + "\" alt=\"" + randomSong.name + "\">\n          <h2>" + randomSong.name + "</h2>\n        </div> ";
            rootElement.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
displayRandomSong(document.querySelector("#randomSong"), songsArray);
//create playlist for each singer.
// Function to render the playlist of songs for each singer on the DOM
function renderAllPlaylists(rootElement, singersSongsArray) {
    if (!rootElement)
        return;
    // Iterate through the singersSongsArray and render playlists for each singer
    for (var _i = 0, singersSongsArray_1 = singersSongsArray; _i < singersSongsArray_1.length; _i++) {
        var singersSong_1 = singersSongsArray_1[_i];
        var singer_1 = singersSong_1.singers[0]; // Since each singersSong has only one singer in the array
        var playlistHTML = singer_1.songs.map(function (song) { return "\n            <div class=\"playlistBySinger\">\n                <img src=\"" + song.img + "\" alt=\"" + song.name + "\">\n                <h3>" + song.name + "</h3>\n                <audio controls>\n                    <source src=\"" + song.audio + "\" type=\"audio/mpeg\">\n                    Your browser does not support the audio element.\n                </audio>\n            </div>\n        "; }).join('');
        var section = document.createElement("section");
        section.classList.add("playlist");
        section.innerHTML = "\n            <h1>" + singer_1.name + "'s Playlist</h1>\n            " + playlistHTML + "\n        ";
        rootElement.appendChild(section);
    }
}
// Assuming you have a div element with the ID "playlistContainer" on your HTML.
var playlistContainer = document.querySelector("#playlistContainer");
// Display playlists for all singers in the singersSongsArray
if (singersSongsArray.length > 0) {
    renderAllPlaylists(playlistContainer, singersSongsArray);
}
