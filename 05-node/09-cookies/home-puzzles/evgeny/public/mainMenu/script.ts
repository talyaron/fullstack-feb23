async function handleGetUSer() {
    const response= await fetch("API/user/get-user")
    const data = await response.json()
    console.log(data)
}