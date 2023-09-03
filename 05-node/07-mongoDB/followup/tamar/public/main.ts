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



