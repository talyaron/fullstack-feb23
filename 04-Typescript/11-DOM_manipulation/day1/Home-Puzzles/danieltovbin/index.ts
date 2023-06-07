// create car class (or any other class you like, flowers, houses, movise...);

// the class should have name, imgSrc (link to an image).

// create an array of this class.

// 1) Render the names on the screen (DOM).
// 2) Render images and texts to the screen.
// 3) create instegram/pinterst/other-app, based on the class.

// Use scss in all cases

class Flowers {
    name: string;
    imgSrc: string;

    constructor(
        name: string,
        imgSrc: string,
    
        ){
        this.name = name;
        this.imgSrc = imgSrc;
    }
}

const flowers :Flowers[] = [
    new Flowers('Lavender', 'https://i.pinimg.com/236x/5a/41/bc/5a41bc8ab7bab930abfd46e3f66b6180.jpg'),
    new Flowers('Rose', 'https://i.pinimg.com/236x/7b/3d/cf/7b3dcfe6f9f0bc5fc60651103afbad3c.jpg'),
    new Flowers('Sunflower', 'https://i.pinimg.com/236x/33/ff/ab/33ffab677055df2cf4585881b52eb7f7.jpg'),
    new Flowers('White Tulips', 'https://i.pinimg.com/474x/44/a6/9e/44a69e756e1b5dd1b72837e4ec6b7513.jpg'),
    new Flowers('flowerFive', 'https://i.pinimg.com/564x/39/da/a6/39daa6e9a23d95e8fcd89ac5d84fc67a.jpg'),
    new Flowers('flowerSix','https://i.pinimg.com/564x/99/93/2b/99932bb691426c5c7ca01fb6529c797f.jpg')
];



const root = document.querySelector('#root');
if(root) {
    flowers.forEach((flower) => {
        const imageContainer = document.createElement('div');
        imageContainer.className = `flowers-${flower.name.toLowerCase().replace(' ', '-')}`;
        
        const p = document.createElement('p');
    p.innerText = flower.name;

    const img = document.createElement('img');
    img.src = flower.imgSrc;
    img.alt = flower.name;
    
    imageContainer.appendChild(p);
    imageContainer.appendChild(img);
    root.appendChild(imageContainer);
    
});
}


// function renderFlowers(flowers :Flower[]) {
    //     let html = '';
    
    //     flowers.forEach(flower => {
        //         html +=`
        //         <div class="flower">
        //         <img src="${flower.imgSrc}" alt="${flower.name}">
        //         </div>
        //         `;
        //     });
        // }
        
        
        
        
        // const flowersHTML = flowers
        // .map (flower => { 
            //     return `
            //         <div class="container">
            //             <p>${flower.name}</p>
            //             <img src="${flower.imgSrc}" />
            //         </div>`
            //     }) 
            //     .join("");   
            
            // if(root) {
                //     root.innerHTML = flowersHTML;
                // }
                
                
                // const pageContainer = document.querySelector('#page');
                