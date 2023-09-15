// 1) create a site with a server. get the title (h1), and description of the site from the server.
// 2) use postman to get the data form the server //https://www.postman.com/.
// 3) get title from the user and send it to the server. When the site reloads the title will come from the server/

console.log('Hallo from index')

const getName = async () => {
    console.time("fetching name");
    // "/name" is a route in the server
    const response = await fetch("/name"); //wait for the response from server
    console.timeEnd("fetching name");
    console.log(response);
    const data = await response.json(); //wait for the data to be parsed
    console.log(data);
    document.querySelector("#root").innerHTML = data.name;
};
getName();

const getFamily = async () => {
    console.time("fetching family");
    // "/family" is a route in the server
    const response = await fetch("/family"); //wait for the response from server
    console.timeEnd("fetching family");
    console.log(response);
    const data = await response.json(); //wait for the data to be parsed
    console.log(data);
    document.querySelector("#rootFamily").innerHTML = data.family;
};
getFamily();