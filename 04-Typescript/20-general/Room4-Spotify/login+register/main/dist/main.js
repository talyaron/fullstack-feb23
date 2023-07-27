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
var headerElement = document.querySelector("#header");
getGreetingByTimeOfDay(headerElement, new Date());
//show recently heard songs.
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
        // console.log(html)
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
renderSongs(document.querySelector('#recentlyHeard'), songsArray);
//get random song.
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
//render random song.
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
//difaind the audio element.
// Function to play audio when clicking on the image
function playAudio(audioElement) {
    //difaind the audio element.
    // Get the audio element
    var audio = audioElement;
    // Check if the audio is paused or not
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
}
//create playlist for each singer.
// Function to render the playlist of songs for each singer on the DOM
function renderPlaylist(rootElement, singer) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        if (!singer)
            throw new Error('Singer not found');
        var html = singer.map(function (singer) {
            return "\n            <div class=\"playlistBySinger\">\n              <img src=\"" + singer.img + "\">\n              <h3>" + singer.name + "</h3>\n              " + singer.songs.map(function (song) {
                return "\n                    <audio controls>\n                        <source src=\"" + song.audio + "\" type=\"audio/mpeg\">\n                    </audio>";
            }).join('') + "\n            </div>";
        }).join('');
        rootElement.innerHTML = html;
        saveSingersToLocalStorage(singer);
        // console.log(html)
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
renderPlaylist(document.querySelector('#playlistContainer'), singersArray);
