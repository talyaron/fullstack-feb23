console.log('index is ready');

const getTitle= async () => {
    console.time('fetcing title')
const response= await fetch('/title')
    console.timeEnd('fetcing title')
    const data = await response.json()
   const rootTitle= document.querySelector('#rootTitle') as HTMLDivElement
    rootTitle.innerHTML = data.title
    rootTitle.style.fontSize = 'x-large'
}
getTitle()
