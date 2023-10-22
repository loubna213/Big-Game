// Big Game - Dice

const newGameElement = document.querySelector(".new-game");
const diceElement = document.querySelector(".dice");
const rollDiceElement = document.querySelector(".roll-dice");
const holdElement = document.querySelector(".hold");
const playersElement = document.querySelectorAll(".player");
let currentScore = 0;
let activePlayer = 0;

function rollDice(randomRoll) {
    diceElement.innerHTML = `<img src="./images/dice-${randomRoll}.png" alt="dice ${randomRoll}">`;
    currentScore += randomRoll;
    switchPlayer(randomRoll);
}

function switchPlayer(randomRoll) {
    if (randomRoll !== 1) {
        document.querySelector(`.current-score-${activePlayer}`).innerHTML =
        currentScore;
    } else {
        currentScore = 0;
        document.querySelector(`.current-score-${activePlayer}`).innerHTML =
        currentScore;
        document.querySelector(`.player-${activePlayer}`).classList.remove('active');
        activePlayer = activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        document.querySelector(`.player-${activePlayer}`).classList.add('active');
        document.querySelector(`.current-score-${activePlayer}`).innerHTML =
        currentScore;
    }
}


rollDiceElement.addEventListener("click", () => {
    let randomRoll = Math.floor(Math.random() * 6) + 1;

    rollDice(randomRoll);
});


holdElement.addEventListener("click", () => {
    holdCurrentScore();
});

let scoreArr = [0, 0];


function holdCurrentScore() {
    if (Number(document.querySelector(`.current-score-${activePlayer}`).innerHTML) < 100) {
        scoreArr[activePlayer] += currentScore
        document.querySelector(`.score-${activePlayer}`).innerHTML = scoreArr[activePlayer];
        currentScore = 0;
        document.querySelector(`.current-score-${activePlayer}`).innerHTML =
        currentScore;
        document.querySelector(`.player-${activePlayer}`).classList.remove('active');
        activePlayer = activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        document.querySelector(`.player-${activePlayer}`).classList.add('active');
    } else {
        console.log("current player win!");
    }
}


newGameElement.addEventListener('click', () => {
    activePlayer = 0;
    currentScore = 0;
    scoreArr[0] = 0;
    scoreArr[1] = 0;
    document.querySelector(`.score-0`).innerHTML = scoreArr[0];
    document.querySelector(`.score-1`).innerHTML = scoreArr[1];
});




var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; i < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};
