//model (classes)
class User {
    constructor(public userName: string, public points: number = 0, public id: number = Math.random() * 6 + Date.now()) {
    }
}

const users: User[] = []

class Word {
    constructor(public enWord: string, public heWord: string) { }
}

const words: Word[] = [
    new Word('book', 'סֵפֶר'),
    new Word('adventure', 'הַרפַּתקָה'),
    new Word('center', 'מֶרְכָּז'),
    new Word('earth', 'כַּדוּר הָאָרֶץ'),
    new Word('volcano', 'הַר גַעַשׁ'),
    new Word('Mountain', 'הַר'),
    new Word('lantern', 'פָּנָס'),
    new Word('raft', 'רַפסוֹדָה'),
    new Word('Trip', 'טִיוּל'),
    new Word('journey', 'מַסָע'),
]


//---------------------handel----------------
//login form
//save the usermane, send it to the local storage and open the game page

function handelSubmit(ev: any) {
    try {
        ev.preventDefault()
        fromStorage()

        const newUserName = ev.target.elements.newname.value;  //colect the user name
        if (!newUserName) throw new Error('user name is missing')
        console.log(newUserName)

        let newUser = new User(newUserName)
        console.log(newUser)

        users.push(newUser)  //add the new user into users array
        console.log(users)

        localStorage.setItem('users', JSON.stringify(users)) //sent the array to local storage as string

        window.location.replace("./index.html")  // its work!!!

    } catch (error) {
        console.error(error);
    }
}

function hendelAddWordsubmit(ev: any) {
    try {
        ev.preventDefault()
        console.dir(ev)

        const enWord = ev.target.newEnWord.value;
        const inter = ev.target.interpretation.value;
        if (!enWord || !inter) throw new Error("missing element");
        console.log(enWord, inter)

        const newWord = new Word(enWord, inter)
        //need to check that the newWord dont alredy in the array
        const exist = words.find(word => (enWord === word.enWord) && (inter === word.heWord))
        console.log(exist)

        if (exist === undefined) {  //if there no word lick this in the array push it in
            words.push(newWord)
            console.log(words)

            localStorage.setItem('words', JSON.stringify(words)) //sent the array to local storage as string
        }

        const form = document.querySelector('form')!
        form.reset()


    } catch (error) {
        console.error(error)
    }
}

function heandelDelWord(ev: any) { //delete the word from array
    try {
        ev.preventDefault()
        console.dir(ev)

        const wrongEnWord = ev.target.wrongEnWord.value;
        const wrongInter = ev.target.wronginterpretation.value;
        console.log(wrongEnWord, wrongInter)

        //need to check if the word and interpetaion are in the array
        const exist = words.findIndex(word => (wrongEnWord === word.enWord) && (wrongInter === word.heWord))
        console.log(exist)

        if (exist !== -1) {  //if faund the mistack
            words.splice(exist, 1)
            console.log(words)

            localStorage.setItem('words', JSON.stringify(words)) //sent theuppdate array to local storage as string
        }

        const form = document.querySelector('form')!
        form.reset()

    } catch (error) {
        console.error(error)
    }
}

function heandelPlay() {
    window.location.replace("./game.html")  //move to game page
}

function hendelFinish() {
    localStorage.setItem('users', JSON.stringify(users)) //sent the array to local storage as string
    window.location.replace("./finish.html")
}

function hendelLogOn() {
    window.location.replace("./login.html")
}

//-----------------reander--------------------------------

//render the user name to the game page
//get the user name from local storage as string
function renderUserName() {
    try {
        const username = document.querySelector('#h1')
        if (!username) throw new Error('element not faound')
        const length: number = users.length  //the last user in the array == currect player
        username.innerHTML = `<h1> Hello ${users[length - 1].userName}</h1>`
    } catch (error) {
        console.error(error)
    }
}

//the Add word form
function renderNewWords() {
    try {
        //set styles on the body element
        document.body.style.backgroundImage = 'url(https://media.istockphoto.com/id/487846628/vector/colorful-cubes-background.jpg?s=612x612&w=0&k=20&c=_12UlcCYJXf3zSNykkujGRvhrxko65w3DTZIjRT7UB0=)';

        // const htmlbody = document.querySelector('#body_index')
        // if (!htmlbody) throw new Error("no root element");
        const htmlroot = document.querySelector('#root')
        if (!htmlroot) throw new Error("no root element");
        const toHtml = `<form id="form" onsubmit="hendelAddWordsubmit(event)">
                        <input type="text" name="newEnWord" placeholder="Please Insert a New English Word  " required>
                        <input type="text" name="interpretation" placeholder="Please provide the meaning of the word  " required>
                        <button type="submit">Submit</button>
                    </form>
                    <br>
                    <form onsubmit="heandelDelWord(event)">
                    <input type="text" name="wrongEnWord" placeholder="Please Insert a English Word or  ">
                    <input type="text" name="wronginterpretation" placeholder="Please provide the meaning of the word  ">
                    <button type="submit">Delet</button>
                    <br>
                    <button onclick="renderBack()">Back</button>
                    `
        htmlroot.innerHTML = toHtml;
    } catch (error) {
        console.error(error)
    }


}

function renderBack() {
    window.location.replace("./index.html");
}

//move to game
function renderPlay() {
    try {
        console.log("users:", users)

        const h1Instructions = document.querySelector('#instruction')!
        const instractions = `<h4 id="h4i">Match the word with its meaning</h4> 
                        <div id="score">your score: ${users[users.length - 1].points}</div>`  //show the score/points of the player
        h1Instructions.innerHTML = instractions

        //call the random word function
        const htmlroot = document.querySelector('#cards')

        if (!htmlroot) throw new Error("no root element");

        console.log("htmlroot:", htmlroot)
        console.log("users:", users)
        console.log("words:", words)

        //view + data binding
        //render the cards in random order
        //create a function whcih return the cards in random order
        //fisrst step: create an array with the cards
        //second step: get 3 random cards from the array
        //third step: selct one random card from the 3 and put it in the first place
        //fourth step: put the other 2 cards in the second and third place
        //fifth step: put thei first card on the diaply
        //sixth step: put the other 3 cards in random order on the display and show only the Hebrew options.

        const randomWords = randomWord(words);
        if (randomWords === undefined) throw new Error("element undfined");

        const firstWord = randomWords[0]

        //randomized words
        const randomWardsToDisplay = randomWord(randomWords)
        if (randomWardsToDisplay === undefined) throw new Error("element undfined");

        //display all words in random order
        const htmlWordsToSelect = randomWardsToDisplay.map(word => `<div class="card c${numOfCard()}">${word.heWord}</div>`).join(' ')
        const htmlWordInEnglish = `<div id="c1" class="card c1" data-correct-hebrew="${firstWord.heWord}">${firstWord.enWord}</div>`;

        htmlroot.innerHTML = htmlWordsToSelect + "<br>" + htmlWordInEnglish

        const htmlc2 = document.querySelector('.c2')
        const htmlc3 = document.querySelector('.c3')
        const htmlc4 = document.querySelector('.c4')

        if (!htmlc2) throw new Error("htmlc2 no root element");
        if (!htmlc3) throw new Error("htmlc3 no root element");
        if (!htmlc4) throw new Error("htmlc4 no root element");
        //listening to click on the hebrow cards
        htmlc2.addEventListener('click', checkAnswer);
        htmlc3.addEventListener('click', checkAnswer);
        htmlc4.addEventListener('click', checkAnswer);
    } catch (error) {
        console.error(error)
    }
}

//show messige for wrong anser
function rendermessage(x: number) {
    try {
        const htmlmassege = document.querySelector('#massege')
        if (!htmlmassege) throw new Error("no element");

        if (x === 1) {
            const html = `<div id="correct" class="massege">Correct answer!</div>`
            htmlmassege.innerHTML = html
            setTimeout(dissapear, 1000)
        }
        if (x === 0) {
            const html = `<div id="wrong" class="massege">Wrong answer!</div>`
            htmlmassege.innerHTML = html
            setTimeout(dissapear, 1000)
        }

    } catch (error) {
        console.error(error)
    }
}

//finish the game
function renderFinish() {
    try {
        document.body.style.backgroundImage = 'url(https://media.istockphoto.com/id/1207033867/photo/individual-letters-fly-magically-out-of-pages-of-open-book.jpg?s=612x612&w=0&k=20&c=JCFcAk_SjgFN_M2Chp4hUtdOPXdPX7U0nfTK8vO-SOc=)';

        const end = document.querySelector('#end')
        if (!end) throw new Error("no element");
        const table = document.querySelector('#table')
        if (!table) throw new Error("no element");

        const htmlend = `<h2>Good Job ${users[users.length - 1].userName}! your final score is ${users[users.length - 1].points}</h2>
                    <br>
                    <button class="btnF2" onClick="hendelLogOn()">Play Again</button>`

        const htmltablehead = `<h3>Last Games Scores:</h3>
                                                <table><thead><tr><th id="hth">player name</th><th>player score</th></tr></thead></table>`
        const htmltablebody = users.reverse().map(user => `<table><tbody><tr><th>${user.userName}</th><th>${user.points}</th></tr></tbody></table>`).join(' ')

        end.innerHTML = htmlend
        table.innerHTML = htmltablehead + htmltablebody
    } catch (error) {
        console.error(error)
    }
}

//-------------------------------------controlers--------------------
function OnLoadFinish() {
    fromStorage()
    renderFinish()
}

function OnLoadGame() {
    fromStorage()
    renderPlay()
}

function OnLoadIndex() {
    fromStorage()
    renderUserName()
}

function fromStorage() {
    try {
        const users_string = localStorage.getItem('users')
        const words_string = localStorage.getItem('words')

        if (users_string) {
            //convert it back to array of classes
            const users_array = JSON.parse(users_string)
            users_array.forEach(user => users.push(new User(user.userName, user.points, user.id)))
            console.log("users array of classes:", users)
        }

        if (words_string) {
            //convert it back to array of classes
            const words_array = JSON.parse(words_string)
            words_array.forEach(word => words.push(new Word(word.enWord, word.heWord)))
            console.log("words array of classes:", words)
        }
    } catch (error) {
        console.error(error)
    }

}

//make the random select words
function randomWord(words: Word[]) {
    try {
        const randomWordArr: Word[] = [];
        const _words = JSON.parse((JSON.stringify(words)));

        while (randomWordArr.length < 3) {
            const random: number = Math.floor(Math.random() * _words.length);
            console.log(random)
            randomWordArr.push(_words[random]);
            _words.splice(random, 1);

        }
        console.log(randomWordArr);
        return randomWordArr;
    } catch (error) {
        console.error(error)
    }

}

let numberOfCard: number = 1
console.log("numberOfCard:", numberOfCard)
function numOfCard(): number | undefined {
    try {
        if (numberOfCard < 4) {
            numberOfCard++
        } else {
            numberOfCard = 2
        }
        return numberOfCard
    } catch (error) {
        console.error(error)
    }

}

//function work at eveant lisiner mouse click ocure on one -> to check the right answer
function checkAnswer(event: any) {
    try {
        const selectedCard = event.target;
        //console.log(selectedCard)
        const selectedHebrewWord = selectedCard.innerText;
        //console.log(selectedHebrewWord)

        const englishWordCard = document.querySelector('#c1')!;
        //console.log(englishWordCard)

        const correctHebrewWord = englishWordCard.getAttribute('data-correct-hebrew');
        console.log("correctHebrewWord is:", correctHebrewWord)

        if (selectedHebrewWord === correctHebrewWord) {
            // The user selected the correct Hebrew word
            console.log('Correct answer!');
            //  updating the score, show msg & move to the next set
            updateScore();
            rendermessage(1)
            renderPlay()
        } else {
            // The user selected the wrong Hebrew word
            console.log('Wrong answer!');
            // displaying an error message & move to the next set
            rendermessage(0)
            renderPlay()
        }
    } catch (error) {
        console.error(error)
    }

}

//add point for right choise
function updateScore() {
    try {
        users[users.length - 1].points++ //update the user points
        //console.log("currentUser.points:", users[users.length - 1].points)
        //console.log("users array:", users)
    } catch (error) {
        console.error(error)
    }
}

function dissapear() {
    try {
        const htmlmassege = document.querySelector('#massege')
        if (!htmlmassege) throw new Error("no element");
        const html = ``
        htmlmassege.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}
