import { Recipe, recipes } from "../API/recipes/recipesModel";

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

function hendelUpdateRecipe(ev) {
   try {
    ev.preventDefault();
    
   } catch (error) {
    
   }
}

//render
function renderRecipe(recipe: Recipe) {
    try {
        const html = `<div id="updateRecipe">
                      <h3>${recipe.title}</h3>
                      <br>
                      <p>${recipe.description}</p>
                      <img url="${recipe.urlImg}">
                      <br>
                      <button onclick="hendelDeleteRecipe()">Delet Recipe</button>
                      <button onclick="renderUpdateForm()">Update Recipe</button>
                      </div>`
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

        root.innerHTML = html;

    } catch (error) {
        console.error(error);
        return "";
    }
}

function renderUpdateForm(DivEl: HTMLDivElement){
try {
    if (!DivEl) throw new Error("no div element");
    const html = `<form id="recipe_update" onsubmit="hendelUpdateRecipeForm(event)">
                  <input type="text" name="title" placeholder="Recipe title">
                  <input type="text" name="description" placeholder="Recipe Instructions">
                  <input type="url" name="imgUrl" placeholder="image">
                  <button type="submit">Update Recipe now</button>
                  </forn>`
    DivEl.innerHTML = html;
} catch (error) {
    console.error(error)
}

}

async function hendelDeleteRecipe(){
    try {
        const response = await fetch('/API/recipes/delete-recipe');
        //convert response to join data
        const {recipes} = await response.json();
        console.log(recipes);
        renderRecipes(recipes, document.querySelector('#userRecipes'))
    } catch (error) {
        
    }
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
