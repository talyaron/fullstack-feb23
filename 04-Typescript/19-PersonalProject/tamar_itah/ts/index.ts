//model (classes)

class User {
    level: number;
    constructor(public userName: string) {
        this.level = 0
    }

    //the method take the last score saved in loclstorage and add it to the level 
    // lastScore(){
    //     const lastScore:number = localStorage.getItem()
    //     return this.level+=lastScore 
    // }
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
]

//---------------------handel----------------
//login form
//save the usermane, send it to the local storage and open the game page
function handelSubmit(ev: any) {
    try {
        ev.preventDefault()
        console.dir(ev)

        const userName = ev.target.elements.name.value;  //colect the user name
        if (!userName) throw new Error('user name is missing')
        console.log(userName)

        const newUser = new User(userName)
        users.push(newUser)  //save the user name in users array
        console.log(users)

        localStorage.setItem('users', JSON.stringify(users)) //sent the array to local storage as string

        window.location.replace("./index.html")  // its work!!!

    } catch (error) {
        console.error(error);
    }
}

function handelSignUp(ev: any) {
    try {
        ev.preventDefault()
        console.dir(ev)

        const newUserName = ev.target.elements.newname.value;  //colect the user name
        if (!newUserName) throw new Error('user name is missing')
        console.log(newUserName)

        const newUser = new User(newUserName)
        users.push(newUser)  //save the user name in users array
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

//-----------------reander--------------------------------

//render the user name to the game page
//get the user name from local storage as string
const h1username = localStorage.getItem('users')

if (h1username) {
    //convert it back to array
    const usernameArray = JSON.parse(h1username)
    console.log(usernameArray)
    usernameArray.forEach(user => users.push(new User(user.userName)))
    console.log(users)
    renderUserName()
}

function renderUserName() {
    const username = document.querySelector('#h1')
    if (!username) throw new Error('element not faound')
    const length: number = users.length
    username.innerHTML = `<h1> Hellow ${users[length - 1].userName}</h1>`
}

//the Add form
function renderAdd() {
    const htmlroot = document.querySelector('#root')
    if (!htmlroot) throw new Error("no root element");
    const toHtml = `<form id="form" onsubmit="hendelAddWordsubmit(event)">
                        <input type="text" name="newEnWord" placeholder="Please Insert a New English Word" required>
                        <input type="text" name="interpretation" placeholder="Please provide the meaning of the word" required>
                        <button type="submit">Submit</button>
                    </form>
                    <br>
                    <form onsubmit="heandelDelWord(event)">
                    <input type="text" name="wrongEnWord" placeholder="Please Insert a English Word or">
                    <input type="text" name="wronginterpretation" placeholder="Please provide the meaning of the word">
                    <button type="submit">Delet</button>
                    <br>
                    <button onclick="renderBack()">Back</button>
                    `
    htmlroot.innerHTML = toHtml;

}

function renderBack() {
    window.location.replace("./index.html");
}

//move to game
function renderPlay() {
    window.location.replace("./game.html")  //move to game page
    
    const h1Instructions = document.querySelector('#instruction')!
    const instractions = `Match the word with its meaning 
                        <div id="score">your scor:${}</div>`  //show the score of the user un this game
    h1Instructions.innerHTML = instractions

    //call the random word function
    const ranArr = randomWord() 

    const htmlroot = document.querySelector('#cards')
    if (!htmlroot) throw new Error("no root element");
    const toHtml = `
                <div class="wrapper">
                    <div class="cards">
                        <div id="c1" class="card c1">${ranArr[Math.floor(Math.random()*3)].enWord}</div>
                        <div id="c2" class="card c2">${ranArr[Math.floor(Math.random()*3)].heWord}</div>
                        <div id="c3" class="card c3">${ranArr[Math.floor(Math.random()*3)].heWord}</div>
                        <div id="c4" class="card c4">${ranArr[Math.floor(Math.random()*3)].heWord}</div>                        
                    </div>
                    <button id="finish" class="btnF" onclick="renderFinish()">Finish</button>
                </div>
                 `;
    htmlroot.innerHTML = toHtml
}

//finish the game
function renderFinish() {

}

//contrilers
//make the random select words
function randomWord() {
    const length = words.length;
    const randomWordArr: Word[] = [];
    let i: number;
    const randomArr: number[] =[];

    for (i = 0; i < 3; i++) {
        const random: number = Math.floor(Math.random() * length);
        console.log(random)
        if (!(randomArr.find(e => e === random))) {
            randomWordArr[i] = words[random]
        }
    }
    console.log(randomWordArr)

    return randomWordArr;
}