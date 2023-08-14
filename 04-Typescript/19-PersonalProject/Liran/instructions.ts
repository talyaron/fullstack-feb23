const starsList: Star[] | undefined = getStarsFromStorage();

function getStarsFromStorage(): Star[] | undefined {
    try {

        const storageString = localStorage.getItem("stars");
        if (!storageString) throw new Error("No such name in local storage");
        //convert string to array of objects
        const storageArray = JSON.parse(storageString);
        //convert array of objects to array of Card | Player
        const stars: Star[] = storageArray.map((star: Star) => {

            return { name: star.name, imageUrl: star.imageUrl, value: star.value, functionDuration: star.functionDuration };
        });
        return stars;

    } catch (error) {
        console.error(error)
        return [];
    }

}

const instructions: string[] = [
    "'←': Move left",
    "'→': Move right",
    "'Space bar': Use space bar to hit with your sword",
    "'Shift': While holding shift, you can Move faster "


]

function renderInstructions() {
    try {
        debugger
        const root = document.querySelector("#text");
        if (!root) throw new Error("No root for instructions");
        let htmlText = `<p style="color: rgb(106, 139, 157);">Control</p>`
        instructions.forEach(instruction => {
            htmlText += `<p>${instruction}</p>`;
        })
        root.innerHTML += htmlText;
    } catch (error) {
        console.error(error)
    }
}

function renderStarsList() {
    try {
        debugger
        const root = document.querySelector("#stars");
        if (!root) throw new Error("No root for instructions");
        let htmlText = ` <p style="color: rgb(106, 139, 157);">Charecters</p>
        <table>`
        if (!starsList) throw new Error("No stars");
        starsList.forEach(star => {
            htmlText += `<tr>
            <th>
                <img src="./dist/${star.imageUrl}" alt="">
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
renderInstructions();
renderStarsList();