async function handleGetUser(){
    try {
        //ask server to get the user
        const response = await fetch("API/user/get-user");
        const data = await response.json();
        console.log(data)

    } catch (error) {
        
    }
}