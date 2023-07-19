// Think of a project
var _a;
// 1) 1 entity, CRUD, make it betfull with CSS.
// 2) 2 eneties ,with joins, CRUD, two pages that share the model.
// 3) Amazing game, with result panel and admin (CRUD players, and scores). at least 2 entites
// # Points
// 10 points for good BEM model
// 10 beutifull and accurate design
// 10 reponsive
// 10 points for clear code
// 10 points for clear structure.
// 20 using MVC
// 10 trycatch with good exceptions
// 10 error free
// --
// Level 1 = 0 points
// level 2 = 5 points
// level 3 = 10 points
// amaze me! 10 points
// Model - entities: UserGame, Coins
var UserGame = /** @class */ (function () {
    function UserGame(userName, imageProfile) {
        this.userName = userName;
        this.imageProfile = imageProfile;
    }
    return UserGame;
}());
var jake = new UserGame("Jake", "../images/Jake.png");
var tricky = new UserGame("Tricky", "../images/Tricky.png");
var tony = new UserGame("Tony", "../images/Tony.png");
var rex = new UserGame("Rex", "../images/Rex.png");
var characters = [tricky, jake, tony, rex];
var btnList = document.querySelector(".btn-list");
var tapToPlayLink = document.querySelector("#tap-to-play");
var inputText = document.querySelector("#name");
var userList = document.querySelector(".details__container ul");
var submitBtn = document.querySelector("#submit");
var isSubmitClicked = false;
var userNames = [];
tapToPlayLink.addEventListener("click", function (e) {
    if (!isSubmitClicked) {
        e.preventDefault();
        alert("Please enter a name and click 'submit' before starting the game.");
    }
});
function addNameToList(name) {
    var nameItem = document.createElement("li");
    nameItem.textContent = name;
    // Create the 'x' span for deleting the name
    var deleteSpan = document.createElement("span");
    deleteSpan.textContent = "x";
    deleteSpan.addEventListener("click", function deleteName(event) {
        // Stop the event from propagating to the list item
        event.stopPropagation();
        var indexToRemove = userNames.indexOf(name);
        if (indexToRemove !== -1) {
            userNames.splice(indexToRemove, 1);
            userList.removeChild(nameItem);
            // Re-add the 'btnList' click event listener when the name list is empty
            if (userNames.length === 0) {
                btnList.addEventListener("click", handleAddName);
            }
        }
    });
    nameItem.appendChild(deleteSpan);
    userList.appendChild(nameItem);
}
function handleNameClick(e) {
    if (e.target instanceof HTMLLIElement) {
        var selectedNames = Array.from(userList.querySelectorAll("li"));
        if (selectedNames.length === 1) {
            var selectedName = selectedNames[0].textContent;
            // Enable to click on "Tap to play"
            isSubmitClicked = true;
            // Proceed with the submission using the selectedName
            alert("You submitted: " + selectedName);
        }
        else if (selectedNames.length > 1) {
            e.preventDefault();
            alert("You can only choose one Name. Delete the others to continue.");
        }
    }
}
function handleAddName(e) {
    try {
        e.preventDefault();
        if (inputText.value.trim() !== "") {
            var name = inputText.value.trim();
            userNames.push(name);
            addNameToList(name);
            inputText.value = "";
            // Remove the 'btnList' click event listener to prevent duplication
            btnList.removeEventListener("click", handleAddName);
        }
    }
    catch (error) {
        console.error(error);
    }
}
btnList.addEventListener("click", handleAddName);
userList.addEventListener("click", handleNameClick);
(_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) { return e.preventDefault(); });
// updating the character image from the edit page to this page
function updateCharacterImage() {
    var characterContainer = document.querySelector("#character-image");
    var selectedCharacterIndex = localStorage.getItem("selectedCharacterIndex");
    try {
        if (selectedCharacterIndex !== null) {
            var index = Number(selectedCharacterIndex);
            if (index >= 0 && index < characters.length) {
                var selectedCharacter = characters[index];
                characterContainer.src = selectedCharacter.imageProfile;
                localStorage.setItem("selectedCharacterIndex", index.toString());
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
window.addEventListener("DOMContentLoaded", updateCharacterImage);
// class Coins {
//     private coinsValue: number;
//     constructor() {
//       this.coinsValue = 0;
//     }
//     addCoins(count: number) {
//       this.coinsValue += count;
//     }
//     getCoinsValue() {
//       return this.coinsValue;
//     }
//   }
//   const coins = new Coins();
//   function updateCoinsValue(coins: number) {
//     const coinsValueSpan = document.querySelector("#coinsValue") as HTMLElement;
//     coinsValueSpan.textContent = coins.toString();
//   }
