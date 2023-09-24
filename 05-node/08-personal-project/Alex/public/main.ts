// a function which get the email from the url query

function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}

const email = getEmailFromQuery();
console.log(email)

// a function which get the user tasks from the server by email

function handleGetUserTasks(){
    getUserTasks(email);
}
async function getUserTasks(email:string) {
    try {
        const response = await fetch(`/API/users/get-users-task?email=${email}`);
        const data = await response.json();
        console.log(data)
        renderTasks(data.tasks, document.querySelector("#tasks"));
    } catch (error) {
        console.error(error);
    }
}
async function handleLogin(ev:any){
    try {
        ev.preventDefault(); // stop form from submitting
        
        const user = {  // get data from form
            password: ev.target.password.value,
            email: ev.target.email.value
        }
        console.log(user);
        if(!user.email || !user.password) throw new Error("Please complete all fields");
        const response = await fetch('/API/users/login', { // send data to server
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const {error, email} = await response.json(); // get data from server
        console.log(error);
        if (error) {
            throw new Error();
        }

        if(user.email === "talita@gahoooo.com") {
            window.location.href = `/itemsMan.html?email=${email}`; //query
        } else {
            window.location.href = `/orders.html?email=${email}`; //query
        }
        // window.location.href = `/main.html?email=${email}`; //query
    } catch (error) {
        console.error(error);
    }
}


