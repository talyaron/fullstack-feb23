function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('email')
}

const email = getEmailFromQuery()
console.log(email)

function handleGetUserTasks() {
    getUserTasks(email)
}

async function getUserTasks(email: string) {
    try {
        const response = await fetch(`/API/Users/get-users-task?email=${email}`)
        const data = await response.json()
        console.log(data)
        renderTasks(data.tasks, document.querySelector("#tasks"))
    } catch (error) {
        console.error(error)

    }
}

getUserTasks(email)
