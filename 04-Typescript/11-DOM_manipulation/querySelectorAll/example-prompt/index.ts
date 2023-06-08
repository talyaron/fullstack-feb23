function getDimantions() {
  try {
    const width: number | null = Number(prompt("what is the width"));
    const height: number | null = Number(prompt("what is the height"));
    const color: string|null = prompt("which color?");

    const box: HTMLDivElement | null = document.querySelector("#box");

    if (width && box) {
      box.style.width = `${width}px`;
    }

  

    if (height && box) {
      box.style.height = `${height}px`;
    }

    if(color && box){
        box.style.backgroundColor = color;
    }
  } catch (error) {
    console.error(error)
  }
}

getDimantions();
