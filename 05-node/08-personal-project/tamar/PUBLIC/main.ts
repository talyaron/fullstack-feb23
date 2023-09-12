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

async function hendlUpdateRecipe(ev: any, id: string) {
    try {
        ev.preventDefault();
        // const email = getEmailFromQuery();
        // if (!email) throw new Error("no email");
        // console.log(email)
        const bodyID = { id };
        if (!id) throw new Error("no recipe id");
        console.log(bodyID)
        //get the updated data
        const title = ev.target.title.value
        const description = ev.target.description.value
        const urlImg = ev.target.urlImg.value;
        const updatRecipe = { title, description, urlImg }
        console.log(updatRecipe);
        //send the updated recipe to the server/DB
        const response = await fetch('/API/recipes/update-recipe', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatRecipe)
        });
        const { recipes } = await response.json(); //and get the new recipes array from the server
        console.log(recipes)

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

//render
function renderRecipe(recipe: Recipe) {
    try {
        const recipeJson = JSON.stringify(recipe);
        console.log("recipeJson in renderRecipe:", recipeJson)
        if (recipeJson === "") throw new Error("the resipeJson string is empty");
        
        const html = `<div class="recipe">
                        <h3>${recipe.title}</h3>
                        <br>
                        <p>${recipe.description}</p>
                        <img src='${recipe.urlImg}'>
                        <br>
                        <button onclick="hendelDeleteRecipe('${recipe._id}')">Delet Recipe</button>
                        <button onclick="renderUpdateForm('${recipeJson}', document.querySelector('#updateRecipe'))">Update Recipe</button>
                        <div id="updateRecipe"></div>
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

function renderUpdateForm(recipeJSON:string, DivEl: HTMLDivElement) {
    try {
        console.log("recipeJSON in renderUpdateForm:", recipeJSON)
        if (!DivEl || !recipeJSON) throw new Error("no div element or recipe");

        const recipe = JSON.parse(recipeJSON); // Parse the JSON string to get the recipe object
        console.log(recipe); // Now you should see the recipe object correctly

        const html = `<form id="recipe_update" onsubmit="hendlUpdateRecipe(event,'${recipe._id}')">
                        <input type="text" name="title" placeholder="${recipe.title}">
                        <textarea  type="text" rows="20" cols="30" name="description" placeholder="${recipe.description}"></textarea>
                        <input type="url" name="imgUrl" placeholder="${recipe.urlImg}">
                        <button type="submit">Update Recipe now</button>
                      </form>`
        DivEl.innerHTML = html;
    } catch (error) {
        console.error(error)
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
