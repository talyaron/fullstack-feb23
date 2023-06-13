const root = document.querySelector("#root");
const imgPath = "./dog.png"
const dogNum = 3;

function renderDogs(root: Element | null, source: string, numOfDog: number) {
    try {
        if (!root) throw new Error("Error")
        for (let i = 0; i < numOfDog; i++) {
            root.innerHTML += `<img src="${source}">`
        }
        return root.innerHTML
    } catch (error) {
        console.error(error)
        return undefined
    }

}


renderDogs(root, imgPath, dogNum);

const img: NodeListOf<HTMLDivElement> = document.querySelectorAll("img");
img.forEach(dog => {
    dog.style.top = `${Math.floor(Math.random() * 70)}vh`
    dog.style.left = `${Math.floor(Math.random() * 70)}vw`
})

const images = document.querySelectorAll("img");

images.forEach(image => {
    image.addEventListener("mouseout", ev => {
        image.style.top = `${ev.pageY-100}px`;
        image.style.left = `${ev.pageX-100}px`;
        var audio = new Audio('dog_barking-6296.mp3');
        audio.play();
    })
})

