

class UserGame {
    constructor(public userName: string, public imageProfile: string) {}
}

const characters: UserGame[] = [
    new UserGame("Tricky", "../images/Tricky.png"),
    new UserGame("Jake", "../images/Jake.png"),
    new UserGame("Tony", "../images/Tony.png"),
    new UserGame("Rex", "../images/Rex.png")
];

let selectedCharacterIndex: number = 0;

function selectCharacter(index: number): void {
    try {
        selectedCharacterIndex = index;
        generateImages();
         // Store selected index in localStorage
        localStorage.setItem("selectedCharacterIndex", String(selectedCharacterIndex));
    } catch (error) {
        console.error(error);
    }
}

function generateImages(): void {
    const imagesContainer = document.querySelector(".edit-page__all-characters") as HTMLDivElement;
    imagesContainer.innerHTML = "";

    characters.forEach((character, index) => {
        try {
            const imageElement = document.createElement("img");
            imageElement.src = character.imageProfile;
            imageElement.alt = character.userName + "img";
            imageElement.addEventListener("click", () => selectCharacter(index));
    
            const selectButton = document.createElement("button");
            selectButton.textContent = index === selectedCharacterIndex ? "Selected" : "Select";
            selectButton.addEventListener("click", () => selectCharacter(index));
    
            const container = document.createElement("div");
            container.append(imageElement);
            container.append(selectButton);
            imagesContainer.append(container);
        } catch (error) {
            console.error(error);
        }
    });
}

window.addEventListener("DOMContentLoaded", () => {
    try {
        const storedIndex = localStorage.getItem("selectedCharacterIndex");
        if (storedIndex !== null) {
            selectedCharacterIndex = Number(storedIndex);
        }
        generateImages();
    } catch (error) {
        console.error(error);
    }
});
