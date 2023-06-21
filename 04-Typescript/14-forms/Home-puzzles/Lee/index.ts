
// 1) Create a form with the following inputs:

// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.

const root = document.querySelector("#root") as HTMLDivElement

class User {
    id: string;
    constructor(public userName: string) {
        this.id = `id-${Math.random()}`
    }
}

const userArray: User[] = new Array(); 

function handleSubmitForm(ev: any) {
    ev.preventDefault()

    // console.log(ev.target.elements.userName.value)
    
    const userName = ev.target.elements.userName.value

    const newUser = new User(userName)
    console.log(newUser)

    userArray.push(newUser)
    console.log(userArray)

    render(userArray)

}

function render(users: User[]) {
    try {
        let html = users.map(user => {
            return `<div>
            <h1>${user.userName}</h1>
            <h3>The ID of user is: ${user.id}</h3>
            </div>`
        }).join(" ")

        console.log(html)

        root.innerHTML = html
    } catch (error) {
        console.log(error)
        
    }
}