// Think of a project

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


class UserGame {
    constructor(public userName: string, public imageProfile: string) {}
}

const jake = new UserGame("Jake", "../images/Jake.png");
const tricky = new UserGame("Tricky", "../images/Tricky.png");
const tony = new UserGame("Tony", "../images/Tony.png");
const rex = new UserGame("Rex", "../images/Rex.png");

const characters: UserGame[] = [tricky, jake, tony, rex];



const btnList = document.querySelector(".btn-list") as HTMLButtonElement;
const tapToPlayLink = document.querySelector("#tap-to-play") as HTMLAnchorElement;
const inputText = document.querySelector("#name") as HTMLInputElement;
const userList = document.querySelector(".details__container ul") as HTMLUListElement;
const submitBtn = document.querySelector("#submit") as HTMLButtonElement;

let isSubmitClicked = false;
const userNames: string[] = [];

tapToPlayLink.addEventListener("click", (e) => {
  if (!isSubmitClicked) {
    e.preventDefault();
    alert("Please enter a name and click 'submit' before starting the game.");
  }
});




function addNameToList(name: string) {
    const nameItem = document.createElement("li");
    nameItem.textContent = name;
  
     // Create the 'x' span for deleting the name
  const deleteSpan = document.createElement("span");
  deleteSpan.textContent = "x";
  deleteSpan.addEventListener("click", function deleteName(event) {
    // Stop the event from propagating to the list item
    event.stopPropagation(); 
    const indexToRemove = userNames.indexOf(name);
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

function handleNameClick(e: Event) {
  if (e.target instanceof HTMLLIElement) {
    const selectedNames = Array.from(userList.querySelectorAll("li"));
    if (selectedNames.length === 1) {
      const selectedName = selectedNames[0].textContent;
      // Enable to click on "Tap to play"
      isSubmitClicked = true;
      // Proceed with the submission using the selectedName
      alert(`You submitted: ${selectedName}`);
    } else if (selectedNames.length > 1) {
      e.preventDefault();
      alert("You can only choose one Name. Delete the others to continue.");
    }
  }
}

function handleAddName(e: Event) {
  try {
    e.preventDefault();

    if (inputText.value.trim() !== "") {
      const name = inputText.value.trim();
      userNames.push(name);
      addNameToList(name);

      inputText.value = "";

      // Remove the 'btnList' click event listener to prevent duplication
      btnList.removeEventListener("click", handleAddName);
    }
  } catch (error) {
    console.error(error);
  }
}

btnList.addEventListener("click", handleAddName);
userList.addEventListener("click", handleNameClick);

  document.querySelector("form")?.addEventListener("submit", (e) => e.preventDefault());






// updating the character image from the edit page to this page
function updateCharacterImage(): void {
  const characterContainer = document.querySelector("#character-image") as HTMLImageElement;


  const selectedCharacterIndex = localStorage.getItem("selectedCharacterIndex");
  try {
    if (selectedCharacterIndex !== null) {
      const index = Number(selectedCharacterIndex);
      if (index >= 0 && index < characters.length) {
        const selectedCharacter = characters[index];
        characterContainer.src = selectedCharacter.imageProfile;
        localStorage.setItem("selectedCharacterIndex", index.toString());
      }
    }
  } catch (error) {
    console.error(error);
  }

  
}

window.addEventListener("DOMContentLoaded", updateCharacterImage)




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