class Food{
    name:string;
    image:string;
    constructor(name:string, image:string){
        this.name= name
        this.image = image
    }
}

const foods: Food[] = [
    new Food("Pizza", "https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg"),
    new Food("Burger", "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1288_1_1434099660.jpg?tr=w-800,h-600"),
    new Food("sushi", "https://media.istockphoto.com/id/1053854126/photo/all-you-can-eat-sushi.jpg?s=1024x1024&w=is&k=20&c=pX-CcpoU1hARXKEKIDjm8XFkHqSCZ8kDFziERFHMMg0="),
    new Food("Fries", "https://www.recipetineats.com/wp-content/uploads/2022/09/Crispy-Fries_8.jpg?w=500&h=500&crop=1")
]

const container = document.querySelector("#container");

const foodsHtml = foods
.map((food) => {
    return `<h2>${food.name}</h2>
    <img src="${food.image}" />`
}).join(" ")

if (container) container.innerHTML = foodsHtml;