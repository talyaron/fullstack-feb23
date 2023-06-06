class People {
    name: string;
    imgg: string;
    constructor(name: string, imgg: string) {
        this.name = name;
        this.imgg = imgg;
    }
}

const people: People[] = [
    new People("mor", ' <img src="dist/img/images.jpg">'),
    new People("shir", '<img src="dist/img/הורדה (1).jpg">'),
    new People("or", ' <img src="dist/img/הורדה.jpg">'),
    new People("avi", '<img src="dist/img/הורדה (2).jpg">'),
];
const div = document.querySelector("#div");

let imgDiv: string = `<div class='img'>`;
imgDiv += people.map((peoplee) => {
    return `<div class="info">  ${peoplee.imgg}
    ${peoplee.name
        }</div>`;
})
    .join(" ");
imgDiv += `<div>`;


if (div) {
    div.innerHTML = imgDiv;
}
