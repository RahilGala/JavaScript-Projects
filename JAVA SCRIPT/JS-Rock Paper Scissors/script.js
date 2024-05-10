let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgCont = document.querySelector(".msg-container");
const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const drawGame = () => {
    msg.innerText = "Game Drawn, Play Again";
    msgCont.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userPara.innerText = userScore;
        msg.innerText = `You Win, Your ${userChoice} beats ${compChoice}`;
        msgCont.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compPara.innerText = compScore;
        msg.innerText = `You Lose, ${compChoice} beats your ${userChoice}`;
        msgCont.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user =",userChoice);
    const compChoice = genCompChoice();
    console.log("comp =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissor" ? false : true;
        }
        else if(userChoice === "scissor"){
            //rock,scissors
            userWin = compChoice === "rock" ? false : true;
        }

    showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})