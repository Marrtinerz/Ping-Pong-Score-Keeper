// Form selection
const form = document.querySelector("form");

// Data inputs selection
let nameOne = document.querySelector("#playerone");
let nameTwo = document.querySelector("#playertwo");
let roundsNum = document.querySelector("select");

// Pages selection
const dataEntry = document.querySelector("#dataentry");
const scoring = document.querySelector("#scoring");
const winner = document.querySelector("#winner");

// Buttons selection
const nameOnePlus = document.querySelector("#playeroneplus");
const nameTwoPlus = document.querySelector("#playertwoplus");
const reset = document.querySelector("#reset");
const initial = document.querySelector("#initial");
const end = document.querySelector("#finish");

// Span selection
const scoreOne = document.querySelector("#scoreone");
const scoreTwo = document.querySelector("#scoretwo");
const playerOneName = document.querySelector("#p_onename");
const playerTwoName = document.querySelector("#p_twoname");
const rounds = document.querySelector("#roundno");
const winnerName = document.querySelector("#winnername");

// Variable dec
let i = 0;
let j = 0;

// Functions
const showScoringPage = (e) => {
    e.preventDefault();
    dataEntry.classList.add("hide");
    scoring.classList.remove("hide");

    // Showing the number of rounds
    rounds.innerText = roundsNum.value;
    rounds.style.color = "red";

    // Showing the player names
    playerOneName.innerText = nameOne.value;
    playerTwoName.innerText = nameTwo.value;

    // Initialization for when the Change name button is clicked.
    i = 0; j = 0;
    scoreOne.innerText = i;
    scoreTwo.innerText = i;
}
const showWinnerPage = (e) => {
    scoring.classList.add("hide");
    winner.classList.remove("hide");
    if (scoreOne.style.color == "green") {
        winnerName.innerText = nameOne.value;
    } else { winnerName.innerText = nameTwo.value };
}
const changePlayerName = (e) => {
    e.preventDefault();
    dataEntry.classList.remove("hide");
    scoring.classList.add("hide");
}

const colorChange = () => {
    if (i == roundsNum.value || j == roundsNum.value) {
        if (i == roundsNum.value) {
            scoreOne.style.color = "green";
        } else { scoreOne.style.color = "red" };

        if (j == roundsNum.value) {
            scoreTwo.style.color = "green";
        } else { scoreTwo.style.color = "red" };

        nameOnePlus.setAttribute("disabled", true);
        nameOnePlus.style.transform = "none";
        nameTwoPlus.setAttribute("disabled", true);
        nameTwoPlus.style.transform = "none";
        reset.setAttribute("disabled", true);
        reset.style.transform = "none";
        setTimeout(showWinnerPage, 3000);
    }
}

const nameOneAdd = () => {
    i++;
    scoreOne.innerText = i;
    colorChange();
}
const nameTwoAdd = () => {
    j++;
    scoreTwo.innerText = j;
    colorChange();
}

const gameOver = () => {
    alert("Game Over");
}

// Events and function calls
form.addEventListener("submit", showScoringPage);
nameOnePlus.addEventListener("click", nameOneAdd);
nameTwoPlus.addEventListener("click", nameTwoAdd);
reset.addEventListener("click", changePlayerName);
end.addEventListener("click", gameOver);
