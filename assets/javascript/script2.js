//Global variables
var highestScore = document.getElementById("highest-score");
var playAgain = document.getElementById("play-again");

currentHighestScore ="";
currentHighestScoreInitials ="";

// Checks local storage for current high score data displays results
if (localStorage.getItem("currentHighScore") !== null) {
    currentHighestScore = localStorage.getItem("currentHighScore");
    currentHighestScoreInitials = localStorage.getItem("userInitials");

    highestScore.textContent = currentHighestScoreInitials + " - " + currentHighestScore;
    } else {
    highestScore.textContent = "No high score yet."
}


playAgain.addEventListener("click", function(e) {
    window.open("./index.html", "_self");
        
})


