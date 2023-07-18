var starsList = getStarsFromStorage();
function getStarsFromStorage() {
    try {
        var storageString = localStorage.getItem("stars");
        if (!storageString)
            throw new Error("No such name in local storage");
        var storageArray = JSON.parse(storageString);
        var stars = storageArray.map(function (star) {
            return { name: star.name, imageUrl: star.imageUrl, value: star.value, functionDuration: star.functionDuration };
        });
        return stars;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
var instructionsList = [
    "'←': Move left",
    "'→': Move right",
    "'Space bar': Use space bar to hit with your sword",
    "'Shift': While holding shift, you can Move faster ",
    "Game Length: 60s"
];
function renderInstructionsList(root) {
    try {
        if (!root)
            throw new Error("No root for instructionsList");
        var htmlText_1 = "<p style=\"color: rgb(106, 139, 157);\">Control</p>";
        instructionsList.forEach(function (instruction) {
            htmlText_1 += "<p>" + instruction + "</p>";
        });
        root.innerHTML += htmlText_1;
    }
    catch (error) {
        console.error(error);
    }
}
function renderStarsList(root) {
    try {
        if (!root)
            throw new Error("No root for instructionsList");
        var htmlText_2 = " <p style=\"color: rgb(106, 139, 157);\">Charecters</p>\n        <table>";
        if (!starsList)
            throw new Error("No stars");
        starsList.forEach(function (star) {
            htmlText_2 += "<tr>\n            <th>\n                <img src=\"" + star.imageUrl + "\" alt=\"\">\n            </th>\n            <th>" + star.name + "</th>\n            <th>" + star.value + " points</th>\n        </tr>";
        });
        root.innerHTML += htmlText_2 + " +</table>";
    }
    catch (error) {
        console.error(error);
    }
}
renderInstructionsList(document.querySelector("#text"));
renderStarsList(document.querySelector("#stars"));
