var UserGame = /** @class */ (function () {
    function UserGame(userName, imageProfile) {
        this.userName = userName;
        this.imageProfile = imageProfile;
    }
    return UserGame;
}());
var characters = [
    new UserGame("Tricky", "../images/Tricky.png"),
    new UserGame("Jake", "../images/Jake.png"),
    new UserGame("Tony", "../images/Tony.png"),
    new UserGame("Rex", "../images/Rex.png")
];
var selectedCharacterIndex = 0;
function selectCharacter(index) {
    try {
        selectedCharacterIndex = index;
        generateImages();
        // Store selected index in localStorage
        localStorage.setItem("selectedCharacterIndex", String(selectedCharacterIndex));
    }
    catch (error) {
        console.error(error);
    }
}
function generateImages() {
    var imagesContainer = document.querySelector(".edit-page__all-characters");
    imagesContainer.innerHTML = "";
    characters.forEach(function (character, index) {
        try {
            var imageElement = document.createElement("img");
            imageElement.src = character.imageProfile;
            imageElement.alt = character.userName + "img";
            imageElement.addEventListener("click", function () { return selectCharacter(index); });
            var selectButton = document.createElement("button");
            selectButton.textContent = index === selectedCharacterIndex ? "Selected" : "Select";
            selectButton.addEventListener("click", function () { return selectCharacter(index); });
            var container = document.createElement("div");
            container.append(imageElement);
            container.append(selectButton);
            imagesContainer.append(container);
        }
        catch (error) {
            console.error(error);
        }
    });
}
window.addEventListener("DOMContentLoaded", function () {
    try {
        var storedIndex = localStorage.getItem("selectedCharacterIndex");
        if (storedIndex !== null) {
            selectedCharacterIndex = Number(storedIndex);
        }
        generateImages();
    }
    catch (error) {
        console.error(error);
    }
});
