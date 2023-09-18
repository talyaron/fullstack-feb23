console.log("index is ready")

//create a function the get then name from the server and render to root element
//async await
const getHeader = async () => {
    console.time('fetching title')
    // "/name" is a route in the server
    const response = await fetch('/title') //wait for the response from server
    console.timeEnd('fetching title')
    console.log(response)
    const data = await response.json() //wait for the data to be parsed
    console.log(data)
    document.querySelector('h1').innerHTML = data.title
}

getHeader();

const getInfo = async () => {
    console.time('fetching info')
    // "/name" is a route in the server
    const response = await fetch('/info') //wait for the response from server
    console.timeEnd('fetching info')
    console.log(response)
    const data = await response.json() //wait for the data to be parsed
    console.log(data)
    document.querySelector('p').innerHTML = data.info
}

getInfo();
