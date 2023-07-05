
class Dish {
    constructor(public name: string, public price: number, public img: string, public description: string) { }
    setPrice(price: number) {
        this.price = price;
    }
}
const dishes: Dish[] = [];

const tea = new Dish("Tea", 8, "https://worldteadirectory.com/wp-content/uploads/2017/06/Image_1-1.jpg", "A cup of tea with flavors: mint, lemon-Louisa, passion fruit, almond")
const coffee = new Dish("Coffee", 10, "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg", "Instant Coffee")
const pasta = new Dish("Pasta", 45, "https://twoplaidaprons.com/wp-content/uploads/2022/09/gochujang-pasta-thumbnail.jpg", "Pasta with garlic and butter")
const pizza = new Dish("Pizza", 55, "https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg", "Toppings: onion, tomatoes, black olives, pineapple, mushrooms")
const soup = new Dish("Soup", 36, "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/430005-1-eng-GB_carrotsoup_00010_rt_.jpg", "Orange soup or vegetable soup")
const salad = new Dish("Sweet potato salad", 32, "https://www.tavshilim.co.il/wp-content/uploads/2015/05/IMG_8873.jpg", "Selected vegetables with baked sweet potato cubes")
dishes.push(coffee, pasta, pizza, tea, soup, salad)

const dishesJson = JSON.stringify(dishes);
localStorage.setItem('dishes', dishesJson);

const dishesString = localStorage.getItem('dishes');
if (dishesString) {
    const dishesArray = JSON.parse(dishesString);
   const dishes = dishesArray.map(dish => {return new Dish(dish.name, dish.price, dish.img, dish.description)});
    console.log(dishes);
    renderDishes(document.querySelector("#dishes"))
}


function renderMain(rootElement: HTMLElement | null) {
    try {
        const html = `<h1>Dish Managing</h1>
        <form>
        <input type="button" value="add dish" onclick="handleRenderAddDish()">
        <input type="button" value="set price" onclick="handleRenderSetPrice()">
        <input type="button" value="delete dish" onclick="handleRenderDeleteDish()">
    </form>`
        if (!rootElement) throw new Error("no root element");
        rootElement.innerHTML = html
    } catch (error) {
        console.error(error);

    }
}

function renderDishes(rootElement: HTMLElement | null) {
    try {
        let html = ``
        dishes.forEach((dish) => {
            html += `
<div class="dish" style="background-image: url(${dish.img});">
        <h2>${dish.name}</h2>
        <h3>${dish.description}</h3>
        <p>${dish.price} NIS</p>
    </div>`
        })
        if (!rootElement) throw new Error("no root element");
        rootElement.innerHTML = html
    } catch (error) {
        console.error(error);

    }
}


function renderAddDish(rootElement: HTMLElement | null, view: boolean) {
    try {
        let html = ``
        if (view) {
            html = `   <form onsubmit="handleAddDish(event)">
    <label for="name">The name of the new dish:</label>
    <input type="text" name="name" required>
    <label for="description">Write a description for the new dish:</label>
    <input type="text" name="description" required>
    <label for="price">Enter the price of the new dish:</label>
    <input type="number" name="price" required>
    <label for="img">Insert a link to a picture of the new dish:</label>
    <input type="text" name="img" required>
    <input type="submit" value="Add">
</form>`
        }
        if (!rootElement) throw new Error("no root element");
        rootElement.innerHTML = html

    } catch (error) {
        console.error(error);

    }
}

function renderSetPrice(rootElement: HTMLElement | null, view: boolean) {
    try {
        let html = ``
        if (view) {
            html = `<form onsubmit="handleSetPrice(event)">
        <select name="dishes">
        ${dishes.map((dish) => { return `<option  value="${dish.name}">${dish.name} ${dish.price} NIS</option>` })}
        </select>
        <label for="newPrice">Enter the new price of dish:</label>
        <input type="number" name="newPrice" required>
        <input type="submit" value="change the price">
        </form>`
        }

        if (!rootElement) throw new Error("no root element");
        rootElement.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}

function renderDeleteDish(rootElement: HTMLElement | null, view: boolean) {
    try {
        let html = ``
        if (view) {
            html = `<form onsubmit="handleDeleteDish(event)">
            <select name="dishes">
            ${dishes.map((dish) =>`<option>${dish.name}</option>`)}
            </select>
            <input type="submit" value="delete">
            </form>`
        }
        if (!rootElement) throw new Error("no root element");
        rootElement.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}

function handleRenderAddDish() {
    try {
        renderAddDish(document.querySelector("#addDish"), true)

    } catch (error) {
        console.error(error)
    }
}

function handleAddDish(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.name.value
        const description = ev.target.description.value
        const price = ev.target.price.value
        const img = ev.target.img.value
        const newDish = new Dish(name, price, img, description)
        dishes.push(newDish)
        const dishesJson = JSON.stringify(dishes);
        localStorage.setItem('dishes', dishesJson);
        renderDishes(document.querySelector("#dishes"))
        renderAddDish(document.querySelector("#addDish"), false)

    } catch (error) {
        console.error(error)

    }
}

function handleRenderSetPrice() {
    try {
        renderSetPrice(document.querySelector("#addDish"), true)
    } catch (error) {
        console.error(error)

    }

}

function handleSetPrice(ev: any) {
    try {
        ev.preventDefault();
        const thisDish = ev.target.dishes.value;
        const dishToChange = dishes.find((dish) => dish.name === thisDish);
        if (dishToChange) {
            dishToChange.setPrice(ev.target.newPrice.valueAsNumber)
        }
        const dishesJson = JSON.stringify(dishes);
        localStorage.setItem('dishes', dishesJson);
        renderDishes(document.querySelector("#dishes"))
        renderSetPrice(document.querySelector("#addDish"), false)

    } catch (error) {
        console.error(error)

    }
}

function handleRenderDeleteDish() {
    try {
        renderDeleteDish(document.querySelector("#addDish"), true)
    } catch (error) {
        console.error(error)

    }

}

function handleDeleteDish(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.dishes.value;
        const indexOfDish = dishes.findIndex((dish) => dish.name === name)
        dishes.splice(indexOfDish, 1)
        const dishesJson = JSON.stringify(dishes);
        localStorage.setItem('dishes', dishesJson);
        // renderDishes(document.querySelector("#dishes"))
        renderDeleteDish(document.querySelector("#addDish"), false)

    } catch (error) {
        console.error(error)

    }
}



renderMain(document.querySelector("#main"))
renderDishes(document.querySelector("#dishes"))
