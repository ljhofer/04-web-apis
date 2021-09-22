var questions = [
    {questionText:"Question 1: Which type of HTML tag to we use to connect a JavaScript file to our HTML?",
    options: ["header", "div", "script", "link"], 
    correctAnswer: "script"
    },
    
    {questionText:"Question 2: Which type of loop runs code until a set condition changes?", 
    options: ["while loop", "interval function", "for loop", "query selector"], 
    correctAnswer: "while loop"
    },

    {questiontext:"Question 3: Which of the following is the correct way to create a function in JavaScript?", 
    options: ["function functionName{}", "function functionName()", "function = functionName()", "function:function name"],
    correctAnswer: "function = functionName()"
    },

    {questionText:"Question 4: Which of the following is the correct way to start a \"for loop\"?", 
    options: ["for i + 0; i > 5; i++", "for {i + 0; i > 5; i++}", "for (i + 0; i > 5; i++)", "for ()"],
    correctAnswer: "for (i + 0; i > 5; i++)"
    }
]

var currentQuestionIndex = 0

// Global variables:
var numberCorrect = 0; 
var answerFirstQuestion = ""
var answerSecondQuestion = ""
var answerThirdQuestion = ""
var answerFourthQuestion = ""

//Variables for starting page text, button, and countdown:
var welcomePage = document.getElementById("welcomePage")
var welcomeBanner = document.getElementById("welcomeBanner");
var instructions = document.getElementById("instructions");
var startButton = document.getElementById("startButton");
var countdownClock = document.getElementById("countdownClock");

// Variables for text of questions:
var questionArea = document.getElementById("questionArea")
var questionText = document.getElementById("question-text");
var optionList = document.getElementById("possible-answers");
var optionOne = document.getElementById("li1");
var optionTwo = document.getElementById("li2");
var optionThree = document.getElementById("li3");
var optionFour = document.getElementById("li4");


var timeLeft


// starting page with click button to start
    //will need:
        //countdown in corner
        //welcome statement
        //quiz description
        //start buttom
// function start () {



// }

    
// load firstQuestion(); on click of button
function firstQuestion() {
    //Clear original text
    welcomePage.style.display = "none";

    // Loads question text:  
    var currentQuestion = questions[0];
    questionText.textContent = currentQuestion.questionText;
    optionOne.textContent = currentQuestion.options[0];
    optionTwo.textContent = currentQuestion.options[1];
    optionThree.textContent = currentQuestion.options[2];
    optionFour.textContent = currentQuestion.options[3];
    
        
    //This way works:
    // questionText.textContent = "Question 1: Which type of HTML tag to we use to connect a JavaScript file to our HTML?";
    // optionOne.textContent = "header";
    // optionTwo.textContent = "div"; 
    // optionThree.textContent = "script";
    // optionFour.textContent = "link";
       
} 

firstQuestion();

function secondQuestion() {

    var currentQuestion = questions[1];
    questionText.textContent = currentQuestion.questionText;
    optionOne.textContent = currentQuestion.options[0];
    optionTwo.textContent = currentQuestion.options[1];
    optionThree.textContent = currentQuestion.options[2];
    optionFour.textContent = currentQuestion.options[3];

}

secondQuestion();



 // Make UL visible again:
    // optionList.style.visibility = "visible";

    


    //Need to link this to user selection on click:
    //Change answer for each question:
    // if (correctAnswer === answer1) {
    //     numberCorrect++;
    //     console.log("good job!");  
    //     // correctAnswer +1
    // } else if (correctAnswer != answer1) {
    //     timeLeft -10;
    //     console.log("You'll get it next time!");
    // }

    // secondQuestion();

    