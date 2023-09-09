// TypeScript (homePage.js)

// Function to handle logout
async function handleLogout() {
    try {
        const response = await fetch("API/user/log-out", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
        if (!data.ok) {
            throw new Error(data.message);
        }
        BackHome();
    } catch (error) {
        console.error(error);
    }
}

function BackHome() {
    location.href = "/index.html";
}
//get all not Admin users
async function getAllUsers() {
    try {
        const response = await fetch("API/user/get-all-users");
        const data = await response.json();
        if (!data.ok) {
            throw new Error(data.message);
        }
        const { users } = data;
        return users;
    } catch (error) {
        console.error(error);  
    }
}

// Render "Hello User" for logged-in user
async function renderHelloUser() {
    try {
        const logInUser = await getCurrentUser();
        if (!logInUser) {
            throw new Error("User Not Found");
        }
        const helloUser = document.querySelector("#helloUser") as HTMLDivElement;
        if (!helloUser) throw new Error("helloUser root not found");
        helloUser.innerHTML = `Hello ${logInUser.email}`;
        // if user isAdmin create button to show all users and can updte admin
        if (logInUser.isAdmin) {
            const showAllUsersButton = document.createElement('button');
            showAllUsersButton.className = 'showAllUsers';
            showAllUsersButton.textContent = 'Show All Users';
            showAllUsersButton.onclick = async () => await renderAllUsers();
            helloUser.appendChild(showAllUsersButton);
        }   
       
    } catch (error) {
        console.error(error);
    }
}

async function getCurrentUser() {
    try {
        const response = await fetch("API/user/get-log-in-user");
        const data = await response.json();
        if (!data.ok) {
            throw new Error(data.message);
        }
        const { logInUser } = data;
        return logInUser;
    } catch (error) {
        console.error(error);
    }
}

// Function to handle adding a recipe
async function handleAddRecipe(event: any) {
    try {
        event.preventDefault();
        const recipeName = event.target.recipeName.value;
        const recipeIngredients = event.target.recipeIngredients.value;
        const recipeInstructions = event.target.recipeInstructions.value;
        const imageUrl = event.target.imageUrl.value;
        const category = event.target.recipeCategory.value;
        const user = await getCurrentUser();
        const userEmail = user.email;

        const response = await fetch("API/recipe/add-recipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ recipeName, recipeIngredients, recipeInstructions, imageUrl, category, userEmail }),
        });
        const data = await response.json();

        console.log(data);
        if (!data.ok) {
            throw new Error(data.message);
        }
        alert("Recipe added");
    } catch (error) {
        console.error(error);
    }
}

// Function to render a recipe
async function renderRecipe(recipe, isEmailExist, isAdmin,fromWhereICome) {
    try {
        if (!recipe) throw new Error("Recipe does not exist");
        const recipeContainer = document.querySelector("#recipeContainer") as HTMLDivElement;
        if (!recipeContainer) throw new Error("recipeContainer root not found");

        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = `
            <h2 class="recipeName">${recipe.recipeName}</h2>
            <img src="${recipe.imageUrl}" alt="recipe image" class="recipeImage">
            <div class="recipeIngredients">${recipe.recipeIngredients}</div>
            <div class="recipeInstructions">${recipe.recipeInstructions}</div>
            <div class="recipeCategory">${recipe.category}</div>
        
        `;

        if (isEmailExist || isAdmin) {
            const deleteButton = document.createElement('button');
            deleteButton.className = 'deleteRecipe';
            deleteButton.textContent = 'Delete';
            deleteButton.onclick =async () => await handleDeleteRecipe(recipe._id,fromWhereICome); // Pass the recipe ID to the function
            recipeElement.appendChild(deleteButton);  
        }
     

        recipeContainer.appendChild(recipeElement);
    } catch (error) {
        console.error(error);
    }
}
async function handleDeleteRecipe(recipeId,fromWhereICome) {
    try {
        const response = await fetch("API/recipe/delete-recipe", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ recipeId }),
        });
        const data = await response.json();
        if (!data.ok) {
            throw new Error(data.message);
        }
        alert("Recipe deleted");
        if(fromWhereICome==="myRecipe"){
            renderMyRecipes();

        }
        else{
            renderAllRecipes();
        }

    } catch (error) {
        console.error(error);
    }   
}
// Function to render all recipes
async function renderAllRecipes() {
    try {
        const recipeListContainer = document.querySelector("#recipeContainer") as HTMLDivElement;
        if (!recipeListContainer) throw new Error("recipeContainer root not found");
        recipeListContainer.innerHTML = "";
        const response = await fetch("API/recipe/get-all-recipes");
        const data = await response.json();
        if (!data.ok) {
            throw new Error(data.message);
        }
        const { recipeList } = data;
        const user = await getCurrentUser();
        if (!user) {
            throw new Error("User Not Found");
        }

        recipeList.forEach((recipe) => {
            renderRecipe(recipe, false, user.isAdmin,'AllRecipes'); 
        });
    } catch (error) {
        console.error(error); 
    }
}

// Function to render user-specific recipes
async function renderMyRecipes() {
    try {
        // Get the currently logged-in user's email
        const user = await getCurrentUser();
        if (!user || !user.email) {
            throw new Error("User email not found.");
        }

        // Send the user's email to the server to get their recipes 
        const response = await fetch(`API/recipe/get-My-recipes?userEmail=${encodeURIComponent(user.email)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        if (!data.ok) {
            throw new Error(data.message);
        }
        const { recipeList } = data;
        const recipeListContainer = document.querySelector("#recipeContainer") as HTMLDivElement;
        if (!recipeListContainer) throw new Error("recipeContainer root not found");
        recipeListContainer.innerHTML = "";
        recipeList.forEach((recipe) => {
            renderRecipe(recipe, true, user.isAdmin,'myRecipe');
        });
    } catch (error) {
        console.error(error);
    } 
}

// You can continue to define your other functions as needed.
