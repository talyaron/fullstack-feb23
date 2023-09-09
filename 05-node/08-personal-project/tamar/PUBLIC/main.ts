import { Recipe } from "../API/recipes/recipesModel";

// a function which get the email from the url query
function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}

const email = getEmailFromQuery();
console.log(email)

//hendel
function handelGetUserRecipe(){
    GetUserRecipe(email)
}

async function hendelAddRecipe(ev) {
    try {
        ev.preventDefault();
        //adentify the user by email 
        const email = getEmailFromQuery();
        if (!email) throw new Error("no email");
        console.log(email)
        //create the new recipe of the user
        const title = ev.target.element.title.value
        const description = ev.target.element.description.value
        const urlImg = ev.target.element.urlImg.value;
        const newRecipe = { title, description, urlImg, email }
        console.log(newRecipe);
        //send the new recipe to the server/DB
        const response = await fetch('/API/recipes/add-recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        });
        const { recipes } = await response.json(); //and get the new recipes array from the server
        console.log(recipes)

        renderRecipes(recipes, document.querySelector("#userRecipes"))
        document.querySelector("form").reset();

    } catch (error) {
        console.error(error)
    }

}

function hendelUpdateRecipe() {
    renderUpdateForm(email)
}

//render
function renderRecipe(recipe: Recipe) {
    try {
        const html = `<h3>${recipe.title}</h3>
                        <br>
                      <p>${recipe.description}</p>`
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}

function renderRecipes(recipes: Recipe[], root: HTMLDivElement) {
    try {
        if (!root) throw new Error("no div element");
        let html = "<ul>";
        html += recipes.map(recipe => renderRecipe(recipe)).join("");
        html += "<ul>";
        html += `<button onclick="hendelUpdateRecipe()">Update Recipe</button>;
                <div id="renderUpdateForm"></div>
                `

        root.innerHTML = html;

    } catch (error) {
        console.error(error);
        return "";
    }
}

function renderUpdateForm(email){
    
}

//controllers
async function GetUserRecipe(email: string) {
    try {
        const response = await fetch(`/API/users/get-user-recipes?email=${email}`);
        const data = await response.json();
        console.log(data)
        renderRecipes(data.recipes, document.querySelector("#userRecipes"))
    } catch (error) {

    }

}
