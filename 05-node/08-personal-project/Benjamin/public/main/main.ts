function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}

const email = getEmailFromQuery();
console.log(email);
getUserData()
async function getUserData(){
    try {
        const response = await fetch(`/API/users/get-user?email=${email}`);
        const data = await response.json();
        console.log(data)
        greeting();
    } catch (error) {
        console.error(error);
    }
}

async function greeting(){
    debugger;
    const response = await fetch(`/API/users/getUserName?email=${email}`);
    const data = await response.json();
}