console.log('index is ready')

//create a function the get then name from the server and render to root element
//async await
const getName = async () => {
    console.time('fetching name')
    // "/name" is a route in the server
    const response = await fetch('/name') //wait for the response from server
    console.timeEnd('fetching name')
    console.log(response)
    const data = await response.json() //wait for the data to be parsed
    console.log(data)
    document.querySelector('#root').innerHTML = data.name
}

getName();