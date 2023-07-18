const starsList: Star[] | undefined = getStarsFromStorage();

function getStarsFromStorage(): Star[] | undefined {
    try {

        const storageString = localStorage.getItem("stars");
        if (!storageString) throw new Error("No such name in local storage");
        const storageArray = JSON.parse(storageString);
        const stars: Star[] = storageArray.map((star: Star) => {

            return { name: star.name, imageUrl: star.imageUrl, value: star.value, functionDuration: star.functionDuration };
        });
        return stars;

    } catch (error) {
        console.error(error)
        return [];
    }

}

const instructionsList: string[] = [  
    "'←': Move left",
    "'→': Move right",
    "'Space bar': Use space bar to hit with your sword",
    "'Shift': While holding shift, you can Move faster ",
    "Game Length: 60s"
]

function renderInstructionsList(root: HTMLElement | null) {
    try {
        if (!root) throw new Error("No root for instructionsList");
        let htmlText = `<p style="color: rgb(106, 139, 157);">Control</p>`
        instructionsList.forEach(instruction => {
            htmlText += `<p>${instruction}</p>`;
        })
        root.innerHTML += htmlText;
    } catch (error) {
        console.error(error)
    }
}

function renderStarsList(root: HTMLElement | null) {
    try {
        if (!root) throw new Error("No root for instructionsList");
        let htmlText = ` <p style="color: rgb(106, 139, 157);">Charecters</p>
        <table>`
        if (!starsList) throw new Error("No stars");
        starsList.forEach(star => {
            htmlText += `<tr>
            <th>
                <img src="${star.imageUrl}" alt="">
            </th>
            <th>${star.name}</th>
            <th>${star.value} points</th>
        </tr>`;
        })
        root.innerHTML += `${htmlText} +</table>`;
    } catch (error) {
        console.error(error)
    }
}
renderInstructionsList(document.querySelector("#text"));
renderStarsList(document.querySelector("#stars"));