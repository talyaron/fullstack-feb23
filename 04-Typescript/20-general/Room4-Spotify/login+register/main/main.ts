debugger;
const songs: Song[] = getSongsFromLocalStorage();
const singers: Singer[] = getSingersFromLocalStorage();
const singersSong: SingersSong[] = getSingersSongsFromLocalStorage();


//Makes a beautiful transition between the sections.
//copy from register.ts
const observerr = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }

    })
})
const hiddennElements = document.querySelectorAll('.hiddenn')
hiddennElements.forEach((el) => observerr.observe(el))
//

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
        // console.log(html)
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

//difaind the audio element.
// Function to play audio when clicking on the image
function playAudio(audioElement: HTMLAudioElement): void {
//difaind the audio element.

    // Get the audio element
    const audio = audioElement;

    // Check if the audio is paused or not
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}


//create playlist for each singer.
// Function to render the playlist of songs for each singer on the DOM
function renderPlaylist(rootElement: HTMLElement | null, singer: Singer[]){
    try {
        if (!rootElement) throw new Error('Root element is not found');
        if (!singer) throw new Error('Singer not found');

        const html = singer.map((singer) => {
            return `
            <div class="playlistBySinger">
              <img src="${singer.img}">
              <h3>${singer.name}</h3>
              ${singer.songs.map((song) => {
                return `
                    <audio controls>
                        <source src="${song.audio}" type="audio/mpeg">
                    </audio>`
            }).join('')}
            </div>`;
        }).join('');

        rootElement.innerHTML = html;

        saveSingersToLocalStorage(singer);
        // console.log(html)
        
    } catch (error) {
        console.error(error);
        return error;
    }
}
renderPlaylist(document.querySelector('#playlistContainer'), singersArray);

function search(){
    const searchBar = document.querySelector(".headerSection__searchSection") as HTMLElement;
    const searchIcon = document.querySelector("#searchLogo") as HTMLElement;
searchIcon.style.display= "none"
searchBar.style.width= "6vw"
}
function idControll(paragraph){
    try {
        const matchedSong = songs.find(song => `${song.artist}-${song.name}` === paragraph);
        if (matchedSong) {
          return matchedSong.id;
        }
        return null;
      } catch (error) {
        console.error(error);
      }
    }

// RegExp
function handleSearch(ev: any) {
    try {
      const searchTerms = ev.target.value;
      const pattern = new RegExp(searchTerms, 'i');
  
      const foundParagraphs: (string | undefined)[] = songs.map((paragraph, i) => {
        const isMatch = pattern.test(paragraph)
        if (isMatch && searchTerms != "") {
          return paragraph
        }
      }).filter((paragraph) => paragraph !== undefined);
  
      renderParagraphs(foundParagraphs, document.querySelector('#headerSection__paragraphs'))
  
    } catch (error) {
      console.error(error)
    }
  }
  
  
  function renderParagraphs(paragraphs: (string | undefined)[], htmlElement: HTMLElement | null) {
    try {
      if (!htmlElement) throw new Error('htmlElement is required');
      const html = paragraphs.map(paragraph => renderParagraph(paragraph)).join(' ');
      htmlElement.innerHTML = html;
    } catch (error) {
      console.error(error)
    }
  }
  
  function renderParagraph(paragraph: string | undefined) {
    try {
      if (!paragraph) throw new Error('paragraph is required');
      const songID = idControll(paragraph)
      return `<button onclick="handleSongClick(${songID})" class="found">${paragraph}</button>`
  
    } catch (error) {
      console.error(error)
    }
  }
//   -----------------------------
