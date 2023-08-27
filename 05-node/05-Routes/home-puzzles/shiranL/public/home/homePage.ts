import { User } from "../../API/users/usersModel";

// Function to fetch the logged-in user's information
async function GetUserIsLogIn(): Promise<User> {
    const response = await fetch('/API/users/get-user-is-log-in');
    const result = await response.json();
    console.log(result);
    const user = result.user;
    return user;
}

// Function to display a greeting message with the user's name
async function displayGreeting() {
    try {
        const user: User = await GetUserIsLogIn();
        const greetingElement = document.getElementById("greeting");
        if (greetingElement) {
            greetingElement.textContent = `Hello, ${user.userName}`;
        }
    } catch (error) {
        console.error(error);
    }
}

// Call the displayGreeting function to display the greeting
displayGreeting();
