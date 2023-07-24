var song = getSongsFromLocalStorage();
var singer = getSingersFromLocalStorage();
function getGreetingByTimeOfDay(rootElement, currentTime) {
    try {
        if (!rootElement)
            throw new Error("rootElement is null or undefined");
        var hours = currentTime.getHours();
        var greeting = "";
        if (hours >= 23 || hours < 4) {
            greeting = "Good Night";
        }
        else if (hours >= 5 && hours < 12) {
            greeting = "Good Morning";
        }
        else if (hours >= 13 && hours < 18) {
            greeting = "Good Afternoon";
        }
        else if (hours >= 19 && hours < 22) {
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
            return "\n                   <div class=\"recentlyHeard__box\">\n                     <img src=\"" + song.src + "\">\n                     <h3>" + song.name + "</h3>\n                 </div>";
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
renderSongs(document.querySelector('#recentlyHeard'), song);
