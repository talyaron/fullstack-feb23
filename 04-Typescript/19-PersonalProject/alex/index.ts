let userScore = 0;
let compScore = 0;
const userScoreSpan:any = document.getElementById("playerScore");
const compScoreSpan:any = document.getElementById("compScore");
const scoreBoardDiv = document.querySelector(".scoreBoard");
const resultP:any = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function getCompChoice(){
    try {

        const compChoices = ['Rock','Paper','Scissors'];
        const randomNum = Math.floor(Math.random() *3);
        return compChoices[randomNum];
        
    } catch (error) {
        console.error(error)
    }
}

function win(userChoise,compChoice) {
    try {
        userScore++;
        const audio = new Audio("./dist/woohoo.mp3");
        userScoreSpan.innerHTML = userScore;
        compScoreSpan.innerHTML = compScore;
        resultP?.innerHTML = `${userChoise} beats ${compChoice}. You Win! `;
        audio.play();

    } catch (error) {
        console.error(error)
    }


}

function lose(userChoise,compChoice) {
    
    try {
        compScore++;
        const audio = new Audio("./dist/8d82b5_Homer_Simpson_Doh_Sound_Effect.mp3")dio = new Audio("./dist/8d82b5_Homer_Simpson_Doh_Sound_Effect.mp3")
        userScoreSpan.innerHTML = userScore;
        compScoreSpan.innerHTML = compScore;
        resultP?.innerHTML = `${userChoise} is beaten by ${compChoice}. You Lose! `;
        audio.play();
    } catch (error) {
        console.error(error)
    }
}

function draw(userChoise,compChoice) {
    try {
        const audio = new Audio("./dist/girl-chucklewav-14669.mp3");
        userScoreSpan.innerHTML = userScore;
        compScoreSpan.innerHTML = compScore;
        resultP?.innerHTML = `${userChoise} is even to ${compChoice}. Its a Draw. `;
        audio.play();
    } catch (error) {
        console.error(error)
    }
    
}

function game(userChoise) {
    const compChoice = getCompChoice();
    switch(userChoise + compChoice){
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
            break                   
}}



rockDiv?.addEventListener('click', function(){
    game("Rock");
})

paperDiv?.addEventListener('click', function(){
    game("Paper");
})

scissorsDiv?.addEventListener('click', function(){
    game("Scissors");
})