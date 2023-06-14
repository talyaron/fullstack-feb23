// 1) create boxes on the screen. when clicking on a button, play sound.

const mySound = new Audio(["http://soundbible.com/grab.php?id=1619&type=mp3"]);
const boxes = document.querySelectorAll(".box");
console.log(boxes)
boxes.forEach(box => {
    box.addEventListener('click', () => {
        mySound.play()

    });
});

// 2) Create images of calm faces on the screen. When clicked, change the face into to a frighting clown. when the mouse leaves, change back to the nice face.
const clownUrl = "https://img.freepik.com/premium-vector/scary-red-clown-logo_43623-926.jpg?w=740";
const calmFace = "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cfit=cover%2Cheight=650%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/smile-day1.jpg";
const pics:any = document.querySelectorAll(".pic");

pics.forEach((pic) => {
    pic.style.backgroundImage = `url("${calmFace}")`
    pic.addEventListener('click', () => {
        pic.style.backgroundImage = `url("${clownUrl}")`

    });
    pic.addEventListener('mouseleave', () => {
        pic.style.backgroundImage = `url("${calmFace}")`

    });


});
// console.log(pics)
// 3) Create images of dogs on the screen. when the mouse leave the dog, the dog follows the mouse.

const dogUrl = "https://easydrawingguides.com/wp-content/uploads/2022/06/how-to-draw-an-easy-dog-featured-image-1200-662x1024.png"
const dogs:any = document.querySelectorAll('.dog');
dogs.forEach(dog => {
    dog.style.backgroundImage = `url("${dogUrl}")`;
    dog.addEventListener('mouseleave', (elm) => {
        dog.style.left = elm.pageX + 'px';
        dog.style.top = elm.pageY + 'px';
        console.log(elm)


    });
    dog.addEventListener('click', (elm) => {
        dog.style.display = "none"
        
        

    });
});


