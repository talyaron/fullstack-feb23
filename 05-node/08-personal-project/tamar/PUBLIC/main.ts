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

//render
function renderRecipe(recipe: Recipe){
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

function renderRecipes(recipes:Recipe[], root:HTMLDivElement){
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

//controllers
async function GetUserRecipe(email:string) {
    try {
        const response = await fetch(`/API/users/get-user-recipes?email=${email}`);
        const data = await response.json();
        console.log(data)
        renderRecipes(data.recipes, document.querySelector("#userRecipes"))
    } catch (error) {

    }

}
