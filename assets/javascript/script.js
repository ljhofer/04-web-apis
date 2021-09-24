var questions = [
    {questionText:"Which type of HTML tag do we use to connect a JavaScript file to our HTML?",
    options: ["header", "div", "script", "link"], 
    correctAnswer: "script"
    },
    
    {questionText:"Which type of loop runs code until a set condition changes?", 
    options: ["while loop", "interval function", "for loop", "query selector"], 
    correctAnswer: "while loop"
    },

    {questionText:"Which of the following do you need at the end of every statement in JavaScript?", 
    options: ["a semitrailer", "an angle bracket", "a semicolon", "a nap"],
    correctAnswer: "a semicolon"
    },

    {questionText:"Which of the following is NOT a primitive data type?", 
    options: ["boolean", "number", "string", "function"],
    correctAnswer: "function"
    }
];

//Variables for starting page text, button, and countdown
var startButton = document.getElementById("startButton");

// Variables for text of questions
var questionArea = document.getElementById("questionArea");
var questionText = document.getElementById("question-text");
var optionList = document.getElementById("possible-answers");
var optionOne = document.getElementById("li1");
var optionTwo = document.getElementById("li2");
var optionThree = document.getElementById("li3");
var optionFour = document.getElementById("li4");

// Variables for the final page 
var endPage = document.getElementById("endPage");
var gameOverMessage = document.getElementById("gameOver");
var initialsBox = document.getElementById("initialsBox");
var userInitials = document.getElementById("initialsInput");
var submitInitialsButton = document.getElementById("enter");

// Global variables:
var numberCorrect = 0; 
var currentQuestionIndex = 0;
var timeLeft=60; 
var finalScore = "";
var timerInterval = "";
var currentUserInitials = "";
var timeAtEnd = "";
var highScore = "";

//comment
function start() {
    countdown();
    quizQuestions();    
}

//Sets up click event listener for the start button
startButton.addEventListener("click", start);

//comment
function countdown() {
    var countdownClock = document.getElementById("countdownClock");
    countdownClock.style.display = "block"
    timerInterval = setInterval( function(){
        
        timeLeft--;
        countdownClock.textContent = timeLeft + " seconds left";

        if(timeLeft === 0) {
            endGame();
            // clearInterval(timerInterval);
        }
    }, 1000);
}

// load quiz questions on click of button
function quizQuestions() {
    //Clear original text  //Unhide questionArea div
    var welcomePage = document.getElementById("welcomePage");
    welcomePage.style.display = "none";
    questionArea.style.display = "block";
    
    // Loads question text:  
    var currentQuestion = questions[0];
    questionText.textContent = currentQuestion.questionText;
    optionOne.textContent = currentQuestion.options[0];
    optionTwo.textContent = currentQuestion.options[1];
    optionThree.textContent = currentQuestion.options[2];
    optionFour.textContent = currentQuestion.options[3];
    
    //Event listener for click on answers
    optionList.addEventListener("click", function(event){
        var userAnswer = event.target;  
        var currentQuestion = questions[currentQuestionIndex];
        
        //Checks to see if the user answer matches the correct answer
        if (userAnswer.textContent === currentQuestion.correctAnswer) {
            numberCorrect++;
        } else {
            timeLeft = timeLeft -10;
        }

        //Changes to the next question
        currentQuestionIndex++;

        // Changes text to the next question and loads final page if all questions have been answered
        if (currentQuestionIndex < questions.length){ 
            currentQuestion = questions[currentQuestionIndex];
            questionText.textContent = currentQuestion.questionText;
            optionOne.textContent = currentQuestion.options[0];
            optionTwo.textContent = currentQuestion.options[1];
            optionThree.textContent = currentQuestion.options[2];
            optionFour.textContent = currentQuestion.options[3];
        } else {
            endGame();
        }   
        
        console.log(numberCorrect);
        
   })       
} 

//Calculates the score and add it to local storage if it is the high score
function calculateScore() {
    finalScore = (numberCorrect * 25 + timeLeft);
    console.log(finalScore);
}

function checkHighScore() {
    if (localStorage.getItem("currentHighScore") < finalScore || localStorage.getItem("currentHighScore" == null)) {
        currentHighScore = finalScore;
        localStorage.setItem("currentHighScore", currentHighScore);
        
        currentUserInitials = userInitials.value;
        localStorage.setItem("userInitials", currentUserInitials);
    }


} 

// Loads the text for the final page, calculates and displays final score
function endGame() {
    calculateScore();
    clearInterval(timerInterval);
    questionArea.style.display = "none";
    endPage.style.display = "block";
    gameOverMessage.textContent = "Your final score is " + finalScore + "!"; 

    
    //Listens for a click on the button to save user game data
    submitInitialsButton.addEventListener("click", function(e) {
        e.preventDefault();
        checkHighScore();
        window.open("./highscore.html", "_self");
    });
        
}

