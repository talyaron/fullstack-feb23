var userScore = 0;
var compScore = 0;
var userScoreSpan = document.getElementById("playerScore");
var compScoreSpan = document.getElementById("compScore");
var scoreBoardDiv = document.getElementById("#scoreBoard");
var resultP = document.querySelector("#result > p");
var rockDiv = document.getElementById("r");
var paperDiv = document.getElementById("p");
var scissorsDiv = document.getElementById("s");
var movePlayer = document.querySelector("#playerMove");
var moveComp = document.querySelector("#compMove");
function changeImageUser(userChoise) {
    console.log("🚀 ~ file: index.ts:14 ~ changeImageUser ~ changeImageUser:");
    if (userChoise === "Rock" && movePlayer) {
        console.log("🚀 ~ file: index.ts:16 ~ changeImageUser ~ Rock:");
        movePlayer.src = "./dist/Rock.png";
    }
    else if (userChoise === "Paper" && movePlayer) {
        console.log("🚀 ~ file: index.ts:21 ~ changeImageUser ~ Paper:");
        movePlayer.src = "./dist/Paper.png";
    }
    else if (userChoise === "Scissors" && movePlayer) {
        console.log("🚀 ~ file: index.ts:26 ~ changeImageUser ~ Scissors:");
        movePlayer.src = "./dist/Scissors.png";
    }
}
function changeImageComp(compChoice) {
    if (compChoice === "Rock" && moveComp) {
        moveComp.src = "./dist/Rock.png";
    }
    else if (compChoice === "Paper" && moveComp) {
        moveComp.src = "./dist/Paper.png";
    }
    else if (compChoice === "Scissors" && moveComp) {
        moveComp.src = "./dist/Scissors.png";
    }
}
function getCompChoice() {
    try {
        var compChoices = ['Rock', 'Paper', 'Scissors'];
        var randomNum = Math.floor(Math.random() * 3);
        changeImageComp(compChoices[randomNum]);
        return compChoices[randomNum];
    }
    catch (error) {
        console.error(error);
    }
}
function win(userChoise, compChoice) {
    try {
        userScore++;
        var audio = new Audio("./dist/woohoo.mp3");
        userScoreSpan.innerHTML = userScore.toString();
        compScoreSpan.innerHTML = compScore.toString();
        if (resultP)
            resultP.innerHTML = userChoise + " beats " + compChoice + ". You Win! ";
        audio.play();
    }
    catch (error) {
        console.error(error);
    }
}
function lose(userChoise, compChoice) {
    try {
        compScore++;
        var audio = new Audio("./dist/8d82b5_Homer_Simpson_Doh_Sound_Effect.mp3");
        userScoreSpan.innerHTML = userScore.toString();
        compScoreSpan.innerHTML = compScore.toString();
        if (resultP)
            resultP.innerHTML = userChoise + " is beaten by " + compChoice + ". You Lose! ";
        audio.play();
    }
    catch (error) {
        console.error(error);
    }
}
function draw(userChoise, compChoice) {
    try {
        var audio = new Audio("./dist/girl-chucklewav-14669.mp3");
        userScoreSpan.innerHTML = userScore.toString();
        compScoreSpan.innerHTML = compScore.toString();
        if (resultP)
            resultP.innerHTML = userChoise + " is even to " + compChoice + ". Its a Draw. ";
        audio.play();
    }
    catch (error) {
        console.error(error);
    }
}
function game(userChoise) {
    var compChoice = getCompChoice();
    switch (userChoise + compChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoise, compChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoise, compChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoise, compChoice);
            break;
    }
}
rockDiv === null || rockDiv === void 0 ? void 0 : rockDiv.addEventListener('click', function () {
    game("Rock");
    changeImageUser("Rock");
});
paperDiv === null || paperDiv === void 0 ? void 0 : paperDiv.addEventListener('click', function () {
    game("Paper");
    changeImageUser("Paper");
});
scissorsDiv === null || scissorsDiv === void 0 ? void 0 : scissorsDiv.addEventListener('click', function () {
    game("Scissors");
    changeImageUser("Scissors");
});
