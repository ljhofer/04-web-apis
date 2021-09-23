var questions = [
    {questionText:"Which type of HTML tag do we use to connect a JavaScript file to our HTML?",
    options: ["header", "div", "script", "link"], 
    correctAnswer: "script"
    },
    
    {questionText:"Which type of loop runs code until a set condition changes?", 
    options: ["while loop", "interval function", "for loop", "query selector"], 
    correctAnswer: "while loop"
    },

    {questionText:"Which of the following is the correct way to create a function in JavaScript?", 
    options: ["function functionName{}", "function functionName()", "function = functionName()", "function:function name"],
    correctAnswer: "function = functionName()"
    },

    {questionText:"Which of the following is the correct way to start a \"for loop\"?", 
    options: ["for i + 0; i > 5; i++", "for {i + 0; i > 5; i++}", "for ()", "for (i + 0; i > 5; i++)"],
    correctAnswer: "for (i + 0; i > 5; i++)"
    }
];

// Global variables:
var numberCorrect = 0; 
var answerFirstQuestion = "";
var answerSecondQuestion = "";
var answerThirdQuestion = "";
var answerFourthQuestion = "";

//Variables for starting page text, button, and countdown:
var welcomePage = document.getElementById("welcomePage");
var welcomeBanner = document.getElementById("welcomeBanner");
var instructions = document.getElementById("instructions");
var startButton = document.getElementById("startButton");
var countdownClock = document.getElementById("countdownClock");

// Variables for text of questions:
var questionArea = document.getElementById("questionArea");
var questionText = document.getElementById("question-text");
var optionList = document.getElementById("possible-answers");
var optionOne = document.getElementById("li1");
var optionTwo = document.getElementById("li2");
var optionThree = document.getElementById("li3");
var optionFour = document.getElementById("li4");

var currentQuestionIndex = 0;
var timeLeft=60; 

//comment
function start() {
    countdown();
    quizQuestions();    
}

//Sets up click event listener for the start button
startButton.addEventListener("click", start);

//comment
function countdown() {
    var timerInterval = setInterval( function(){
        timeLeft--;
        countdownClock.textContent = timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            console.log("Your time is up!");
        }
    }, 1000);
}

// load quiz questions on click of button
function quizQuestions() {
    //Clear original text  //Unhide questionArea div
    welcomePage.style.display = "none";
    questionArea.style.display = "block";

    // Loads question text:  
    var currentQuestion = questions[0];
    questionText.textContent = currentQuestion.questionText;
    optionOne.textContent = currentQuestion.options[0];
    optionTwo.textContent = currentQuestion.options[1];
    optionThree.textContent = currentQuestion.options[2];
    optionFour.textContent = currentQuestion.options[3];
    
    //Event listener for click on answers:
    optionList.addEventListener("click", function(event){
        var userAnswer = event.target;  
        var currentQuestion = questions[currentQuestionIndex];
        currentQuestionIndex++;

        //comment
        if (userAnswer.textContent === currentQuestion.correctAnswer) {
            numberCorrect++;
        } else {
            timeLeft = timeLeft -10;
        }
        
        // comment
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

function endGame() {
    console.log("The game has ended.");
    


}

// function secondQuestion() {
//     var currentQuestion = questions[1];
//     questionText.textContent = currentQuestion.questionText;
//     optionOne.textContent = currentQuestion.options[0];
//     optionTwo.textContent = currentQuestion.options[1];
//     optionThree.textContent = currentQuestion.options[2];
//     optionFour.textContent = currentQuestion.options[3];

//      //Event listener for click on answers:
//      optionList.addEventListener("click", function(event){
//         var userAnswer = event.target;  
//         if (userAnswer === optionOne) {
//         numberCorrect++;
//         thirdQuestion();
//         } 
//         else {
//         timeLeft -10;
//         thirdQuestion();
//         }
//         console.log(numberCorrect);
//    })
     
// }

// function thirdQuestion() {
//     var currentQuestion = questions[2];
//     questionText.textContent = currentQuestion.questionText;
//     optionOne.textContent = currentQuestion.options[0];
//     optionTwo.textContent = currentQuestion.options[1];
//     optionThree.textContent = currentQuestion.options[2];
//     optionFour.textContent = currentQuestion.options[3];

//      //Event listener for click on answers:
//      optionList.addEventListener("click", function(event){
//         var userAnswer = event.target;  
//         if (userAnswer === optionThree) {
//         numberCorrect++;
//         fourthQuestion();  
//         } 
//         else {
//         timeLeft -10;
//         fourthQuestion();
//         }
//         console.log(numberCorrect);
//    })
        
// }
 
// function fourthQuestion() {
//     var currentQuestion = questions[3];
//     questionText.textContent = currentQuestion.questionText;
//     optionOne.textContent = currentQuestion.options[0];
//     optionTwo.textContent = currentQuestion.options[1];
//     optionThree.textContent = currentQuestion.options[2];
//     optionFour.textContent = currentQuestion.options[3];

//      //Event listener for click on answers:
//      optionList.addEventListener("click", function(event){
//         var userAnswer = event.target;  
//         if (userAnswer === optionFour) {
//         numberCorrect++;
//         endGame(); 
//         } 
//         else {
//         timeLeft -10;
//         endGame();
//         }
//         console.log(numberCorrect);
//    })
      
// }


    


    

    