console.log('index is ready');

const getTitle= async () => {
    console.time('fetching title')
const response= await fetch('/title')
    console.timeEnd('fetching title')
    const data = await response.json()
   const rootTitle= document.querySelector('#rootTitle') as HTMLDivElement
    rootTitle.innerHTML = data.title
    rootTitle.style.fontSize = 'x-large'
}
getTitle()

const getDscrpt=async()=>{
    console.time('fetching description')
    const response = await fetch('/dscrpt')
    console.timeEnd('fetching description')
    const data = await response.json()
    const rootDscrpt = document.querySelector('#rootDscrpt') as HTMLDivElement
    rootDscrpt.innerHTML = data.description
}
getDscrpt()

const postAnimal=async()=>{
    console.time('fetching animal')
    const response = await fetch('/animal')
    console.timeEnd('fetching animal')
    const data = await response.json()
    const rootDscrpt = document.querySelector('#rootAnimal') as HTMLDivElement
    rootDscrpt.innerHTML = data.animal
}
postAnimal()