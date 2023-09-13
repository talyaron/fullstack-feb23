//import { Recipe, recipes } from "../API/recipes/recipesModel";

interface Recipe {
    title: string;
    description: string;
    urlImg?: string
    _id: string;
}

const recipes: Recipe[] = [];

// a function which get the email from the url query
function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}

//hendel
function handelGetUserRecipes() {
    const email = getEmailFromQuery();
    console.log(email)
    GetUserRecipe(email)
}

async function hendelDeleteUser(){
    try {
        const email = getEmailFromQuery();
        if (!email) throw new Error("no email");
        console.log(email)
        const response = await fetch('/API/users/delete-user'
            , {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
        //convert response to join data
        const { users } = await response.json();
        console.log(users);
        window.location.href = "/index.html"
    } catch (error) {
        console.error(error)
    }
}

async function hendelAddRecipe(ev: any) {
    try {
        ev.preventDefault();
        console.dir(ev)
        //identify the user by email 
        const email = getEmailFromQuery();
        if (!email) throw new Error("no email");
        console.log(email)
        //create the new recipe of the user
        const title = ev.target.title.value
        console.log(title)
        const description = ev.target.description.value
        console.log(description)
        const urlImg = ev.target.querySelector('[name="imgUrl"]').value;
        console.log(urlImg)
        const newRecipe = { title, description, urlImg, email }
        console.log(newRecipe);
        //send the new recipe to the server/DB
        const response = await fetch('/API/recipes/add-recipe', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe)  //the data that send to the DB server in json-formatted string
        });
        const { recipes } = await response.json(); //and get the new recipes array from the server
        renderRecipes(recipes, document.querySelector("#userRecipes"))
        document.querySelector("form").reset();

    } catch (error) {
        console.error(error)
    }

}

async function hendelDeleteRecipe(id: string) {
    try {
        console.log(id)
        const email = getEmailFromQuery();
        if (!email) throw new Error("no email");
        console.log(email)
        const response = await fetch('/API/recipes/delete-recipe'
            , {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, email })
            });
        //convert response to join data
        const { recipes } = await response.json();
        console.log(recipes);
        renderRecipes(recipes, document.querySelector('#userRecipes'))
    } catch (error) {

    }
}

function hendelUpdate(id: string){
    window.location.href = `/updateRecipe.html?recipeId=${id}`;  //query
}

//render
function renderRecipe(recipe: Recipe) {
    try {
        if (!recipe) throw new Error("error geting recipe");
        
        const html =  `<div class="recipe_div">
                        <h3>${recipe.title}</h3>
                        <br>
                        <p>${recipe.description}</p>
                        <img src='${recipe.urlImg}'>
                        <br>
                        <button onclick="hendelDeleteRecipe('${recipe._id}')">Delet Recipe</button>
                        <button onclick="hendelUpdate('${recipe._id}')">Update Recipe</button>
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

        // Debugging: Check the type and content of 'recipes'
        console.log("Type of recipes:", typeof recipes);
        console.log("Content of recipes:", recipes);

        let html = "<ul>";
        html += recipes.map(recipe => renderRecipe(recipe)).join("");
        html += "<ul>";

        root.innerHTML = html;

    } catch (error) {
        console.error(error);
        return "";
    }
}

//controllers
async function GetUserRecipe(email: string) {
    try {
        const response = await fetch(`/API/userRecipes/get-user-recipes?email=${email}`);
        const data = await response.json();
        console.log("data:", data)
        renderRecipes(data.recipes, document.querySelector("#userRecipes"))
    } catch (error) {

    }

}
