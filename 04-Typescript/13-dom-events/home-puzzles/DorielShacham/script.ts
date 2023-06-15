// 3) Create images of dogs on the screen. when the mouse leave the dog, the dog follows the mouse.

const dogs = document.querySelectorAll('.dog') as NodeListOf<HTMLDivElement>;

dogs.forEach(moveDogRandomly);

setInterval(() => {
  dogs.forEach(moveDogRandomly);
}, 6000); 

function moveDogRandomly(dog: HTMLDivElement) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const randomX = getRandomNumber(0, screenWidth - dog.offsetWidth);
  const randomY = getRandomNumber(0, screenHeight - dog.offsetHeight);

  dog.style.left = `${randomX}px`;
  dog.style.top = `${randomY}px`;
}

function getRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function sound(surl) {
    dogs.innerHTML =
    "<embed src="+surl+" hidden=true autostart=true loop=false>";
}