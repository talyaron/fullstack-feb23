console.log('index.ts online');
//Age
const getAge = async () => {
    try {
        console.time('fetching age');
        const response = await fetch('/myAge');
        console.timeEnd('fetching age');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

        //render age
        let userAge = document.querySelector('#age') as HTMLElement;
        userAge.innerHTML = data.myAge; 

    } catch (error) {
        console.error('Error:', error);
    }
}
getAge();

// Create a function to get the name from the server and populate the input field
const getName = async () => {
    try {
        console.time('fetching name');
        const response = await fetch('/firstName');
        console.timeEnd('fetching name');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

        //render name
        const userInput = document.querySelector('.userName') as HTMLInputElement;
        userInput.value = data.firstName; 

    } catch (error) {
        console.error('Error:', error);
    }
}
getName();

//Description
const myDescription = async () => {
    try {
        console.time('fetching description');
        const response = await fetch('/myDescription');
        console.timeEnd('fetching description');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

        //render name
        const userDescription = document.querySelector('#description') as HTMLElement;
        userDescription.innerHTML = data.myDescription; 

    } catch (error) {
        console.error('Error:', error);
    }
}
myDescription();
