const dog = document.querySelector(".dog") as HTMLImageElement;
const kennel = document.querySelector(".kennel") as HTMLImageElement;

kennel.style.left = `calc(${Math.random()*100}% - 100px)`
kennel.style.top = `calc(${Math.random()*100}% - 100px)`


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
  const kannelSize = kennel?.getBoundingClientRect();
  const dogSize = dog.getBoundingClientRect();
  if (
    kannelSize.left <= dogSize.right &&
    kannelSize.right >= dogSize.left &&
    kannelSize.top <= dogSize.bottom &&
    kannelSize.bottom >= dogSize.top
  ) {
    alert("congratulation!");
    location.reload();
  }
}
