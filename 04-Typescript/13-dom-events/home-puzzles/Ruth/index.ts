const dog = document.querySelector(".dog") as HTMLImageElement;
const melona = document.querySelector(".melona") as HTMLImageElement;

melona.style.left = `calc(${Math.random()*100}% - 100px)`
melona.style.top = `calc(${Math.random()*100}% - 100px)`


dog.addEventListener("click", onClick);

let isClick = false;
function onClick(e) {
  if (isClick == false) {
    document.addEventListener("mousemove", onMouseMove);
    isClick = true;
  } else {
    document.removeEventListener("mousemove", onMouseMove);
    isClick = false;
    checkArrived();
  }
}

const onMouseMove = (e: any) => {
  dog!.style.left = e.pageX - 40 + "px";
  dog!.style.top = e.pageY - 50 + "px";
};



function checkArrived() {
  const melonaSize = melona?.getBoundingClientRect();
  const dogSize = dog.getBoundingClientRect();
  if (
    melonaSize.left <= dogSize.right &&
    melonaSize.right >= dogSize.left &&
    melonaSize.top <= dogSize.bottom &&
    melonaSize.bottom >= dogSize.top
  ) {
    alert("congratulation!");
    location.reload();
  }
}
