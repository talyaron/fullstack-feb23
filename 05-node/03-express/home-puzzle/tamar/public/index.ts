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

//2+3:
//https://www.section.io/engineering-education/how-to-create-a-simple-rest-api-using-typescript-and-nodejs/
document.querySelector('#titleForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const newTitleInput = document.querySelector('#newTitle') as HTMLInputElement;
    const newTitle = newTitleInput.value;
    await updateTitle(newTitle);
    getTitle(); // Refresh the displayed title
});

const updateTitle = async (newTitle) => {
    console.time('updating title');
    const response = await fetch('/updateTitle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle }),
    });
    console.timeEnd('updating title');
    console.log(response);
};
