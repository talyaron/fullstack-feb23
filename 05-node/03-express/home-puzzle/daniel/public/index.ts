console.log("my index is ready");

const getUser = async() =>{
    console.time('fetching user')
    // User is a route in the server
    const response = await fetch('/user')  //wait for the response from server
    console.timeEnd('fetching user')
    console.log(response)
    const data = await response.json() //wait for the data to be parsed
    console.log(data)
    document.querySelector("#root").innerHTML = data.user
    
}

getUser();

const getAge =async () => {
    console.time('fetching age')
    // User is a route in the server
    const response = await fetch('/age') //wait for the response from server
    console.timeEnd('fetching age')
    console.log(response);
    const data = await response.json() //wait for data to be parsed
    console.log(data);
    document.querySelector("#rootAge").innerHTML = data.age
}

getAge();