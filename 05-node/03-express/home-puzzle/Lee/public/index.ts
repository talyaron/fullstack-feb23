console.log('index is ready')


const getSlogan = async () => {
    console.time('fetching slogan')
    const response = await fetch('/slogan')
    console.timeEnd('fetching slogan')
    console.log(response)
    const data = await response.json()
    console.log(data)
    document.querySelector('#root').innerHTML = data.slogan
}

getSlogan();



const sendNameToServer = async () => {
    try {
        const userInput = document.querySelector('.userName') as HTMLInputElement;
        const name = userInput.value;


        console.time('sending name')
        const response = await fetch('/name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name})
        });
        console.timeEnd('sending name')

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.error(error)
    }
}

sendNameToServer ();

const sendNameButton = document.querySelector('#sendNameButton');

if (sendNameButton) {
    sendNameButton.addEventListener('click', sendNameToServer);
}