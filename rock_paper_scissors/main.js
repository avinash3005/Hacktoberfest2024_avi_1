let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result");

const scissor_div = document.getElementById("s");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = "<p style='text-align: center; font-family: \"Press Start 2P\", cursive; font-weight: bold;'>You win!</p>";
    checkGameOver();
}
function lose() {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = "<p style='text-align: center; font-family: \"Press Start 2P\", cursive; font-weight: bold;'>You Lose!</p>";
    checkGameOver();
}
function draw() {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = "<p style='text-align: center; font-family: \"Press Start 2P\", cursive; font-weight: bold;'>Its a Draw!</p>";
    checkGameOver();
}
function checkGameOver() {
    if (userScore === 5 || compScore === 5) {
        setTimeout(function() {
            if (userScore === 5) {
                alert("You win the game!");
            } else {
                alert("You lose the game!");
            }
            userScore = 0;  // Reset user score
            compScore = 0;  // Reset computer score
            userScore_span.innerHTML = userScore;  // Update the user score on screen
            compScore_span.innerHTML = compScore;  // Update the computer score on screen
        }, 100);
    }
}
function game(userChoice) {
    const compChoice = getCompChoice();
    if(userChoice == compChoice) {
        console.log("It's a draw");
        draw();
    }
    else if((userChoice == 'r' && compChoice == 'p') || (userChoice == 'p' && compChoice == 's') || (userChoice == 's' && compChoice == 'r')) {
        console.log("You lose");
        lose();
    }
    else if((userChoice == 'p' && compChoice == 'r') || (userChoice == 's' && compChoice == 'p') || (userChoice == 'r' && compChoice == 's')) {
        console.log("You win");
        win();
    }

}

function main() {
    rock_div.addEventListener('click', function () {
        game("r")
    })
    paper_div.addEventListener('click', function () {
        game("p")
    })
    scissor_div.addEventListener('click', function () {
        game("s")
    })
}

document.addEventListener('DOMContentLoaded', main);

