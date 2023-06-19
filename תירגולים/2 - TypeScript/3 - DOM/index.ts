const root = document.querySelector("#root") as HTMLDivElement

class User {
    id: string;
    constructor(public userName: string) {
        this.id = `id-${Math.random()}`;
    }
}

//keep all users
const userArray: User[] = new Array();

function hendleSubmitForm(ev: any) {
    ev.preventDefault()

    // console.log(ev)
    // console.log(ev.target)
    // console.log(ev.target.elements)
    // console.log(ev.target.elements.userName)
    // console.log(ev.target.elements.userName.value)
    const userName = ev.target.elements.userName.value

    const newUser = new User(userName)
    console.log(newUser)

    userArray.push(newUser)
    console.log(userArray)

    render(userArray)
    ev.target.reset()
}

function render(users: User[]) {
    try {
        let html = ""
        if (userArray.length > 0) {
            html = users.map(user => {
                return `<div class="root__userEl">
                    <h1>${user.userName}</h1>
                    <h3>The ID of user is: ${user.id}</h3>
                    <button style="color: red" onClick="changeColor(event)">Change Color</button>
                </div>`
            }).join(" ")
        } else {
            html = "No Data"
        }

        // console.log(html)

        root.innerHTML = html
    } catch (error) {
        console.log(error)
    }
}

render(userArray)

function changeColor(ev: any) {
    // console.log(`it is changeColor funbction`)
    const randomColors = ["yellow", "red", "blue", "grey", "black"]
    const randomNumber = Math.floor(Math.random() * randomColors.length)

    console.log(ev.target)
    ev.target.style.color = randomColors[randomNumber]
}