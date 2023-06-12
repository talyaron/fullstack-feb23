class People {
  name: string;
  image: string;
  constructor(name: string, image: string) {
    this.name = name;
    this.image = image;
  }
}

const people: People[] = [
  new People("mor", "dist/img/images.jpg"),
  new People("shir", "dist/img/הורדה (1).jpg"),
  new People("or", "dist/img/הורדה.jpg"),
  new People("avi", "dist/img/הורדה (2).jpg"),
];
const div = document.querySelector("#div");

let imgDiv: string = `<div class='img'>`;
imgDiv += people
  .map((peoplee) => {
    return `<div class="info"><img src="${peoplee.image}"><br>
    ${peoplee.name}</div>`;
  })
  .join(" ");
imgDiv += `<div>`;

if (div) {
  div.innerHTML = imgDiv;
}
