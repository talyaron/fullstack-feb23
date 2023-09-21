async function handleGetUser() {
    try {
        //ask server to get the user
        const response = await fetch("API/user/get-user");
        const data = await response.json();
        console.log(data)

    } catch (error) {

    }
}

async function handleGetAllUsers() {
    try {
        //ask server to get the user
        const response = await fetch("API/users/get-users");
        const data = await response.json();
        console.log(data)

    } catch (error) {

        console.error(error)
    }
}
handleGetAllUsers();