console.log('index is ready')


const getName = async () => {
    console.time('fetching name')
    const response = await fetch('/name') 
    console.timeEnd('fetching name')
    console.log(response)
    const data = await response.json() 
    console.log(data)
    document.querySelector('#root').innerHTML = data.name
}

getName();