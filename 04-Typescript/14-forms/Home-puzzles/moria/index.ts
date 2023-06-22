// const root = document.querySelector('#root');
// class img {
//     image: string;
//     width: number;
//     amount: number;


//     constructor(
//         image: string,
//         width: number,
//         amount: number,

//     ) {
//         this.image = image;
//         this.width = width;
//         this.amount = amount;

//     }
// }
// function imgInput(event: any) {

//     console.log(event.target.value);

// }
// function imageInput(event) {
//     const root = document.querySelector('#root');

// // // }

// function imgInput(ev: any) {
//     try {
//         ev.preventDefault();
//         console.dir(ev);
//         const imgIn = ev.target.imgIn.value;
//         var width: number = ev.target.width.value;
//         var amount: number = ev.target.amount.value;
//         var result = { imgIn, width, amount, };
//         console.log(result)

//     }
//     catch (error) {
//         console.error(error);
//     }
// }
// }

// if (root) {
//     for (let i = amount; i > 0; i--)
//         root.innerHTML = `<img src="${imgIn}" width="${width}" >`
//     console.dir(amount)
//     console.log(amount)
// }

// const image = new Car("Opel", "Coursa", "Blue", 2018);
function handleSubmit(event) {
    event.preventDefault();
    const imageUrl = event.target.imgIn.value;
    const imageWidth = event.target.width.value;
    const amountImage = event.target.amount.valueAsNumber;
    renderImages(imageUrl, imageWidth, amountImage);
}

// this function render to ducument recording user's DATA

function renderImages(
    imageUrl: string,
    imageWidth: number,
    amountImage: number
) {
    const imageDiv = document.querySelector(`#root`) as HTMLElement;
    if (imageDiv) {
        for (let i = 0; i < amountImage; i++) {
            imageDiv.innerHTML += `<img src="${imageUrl}" width=" ${imageWidth.toString()}vw">`;
        }
    }
}
