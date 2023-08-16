console.log('index is ready')
//1:
//create a function the get the title from the server and render to root element h1
//async await
const getTitle = async () => {
    console.time('fetching title')
    // "/title" is a route in the server
    const response = await fetch('/title') //wait for the response from server
    console.timeEnd('fetching title')
    console.log(response)
    const data = await response.json() //wait for the data to be parsed
    console.log(data)
    document.querySelector('#title').innerHTML = data.title
}

getTitle();

//create a function the get the description from the server and render to root element description
const getDescription = async () => {
    console.time('fetching description')
    // "/description" is a route in the server
    const response = await fetch('/description') //wait for the response from server
    console.timeEnd('fetching description')
    console.log(response)
    const data = await response.json() //wait for the data to be parsed
    console.log(data)
    document.querySelector('#description').innerHTML = data.description
}

getDescription();

//2:
//https://blog.postman.com/extracting-data-from-responses-and-chaining-requests/