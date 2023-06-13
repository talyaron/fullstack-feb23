//1

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const box = document.querySelectorAll(".box");

box.forEach(box => {
  box.addEventListener("click", (ev:any) => {
    ev.target.style.backgroundColor = "red";
    audio.play();
  });
});

//2) Create images of calm faces on the screen. --> boximg with calm face
//   When clicked, change the face into to a frighting clown. --> chang background image
//   when the mouse leaves, change back to the nice face.

const boximg: Element | null = document.querySelector(".boximg");
if(boximg){
boximg.addEventListener("click", (ev:any) => {
  ev.target.style.backgroundimage = `url("https://cdn.xxl.thumbs.canstockphoto.co.il/%D7%9B%D7%95%D7%A2%D7%A1-%D7%90%D7%A8%D7%99%D7%94-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%9E%D7%A0%D7%99%D7%95%D7%AA_csp2173500.jpg")`;
})}



//3) Create images of dogs on the screen. when the mouse leave the dog, the dog follows the mouse.