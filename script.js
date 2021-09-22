var questions = [
    {
    questionText:"Question 1: Which type of HTML tag to we use to connect a JavaScript file to our HTML?",
    options: ["header", "div", "script", "link"], 
    correctAnswer: "script"
    },
    {
    questionText:"Question 2: Which type of loop runs code until a set condition changes?", 
    options: ["while loop", "interval function", "for loop", "query selector"], 
    correctAnswer = "while loop"
    },
    {question = {text: "Question 3: Which of the following is the correct way to create a function in JavaScript?", option1 = "function functionName{}", option2 = "function functionName()", option3 = "function = functionName()", option4 = "function:function name", correctAnswer = ""}
    {question = {text: "Question 4: Which of the following is the correct way to start a \"for loop\"?", 
    options = ("for i + 0; i > 5; i++", "for {i + 0; i > 5; i++}", "for (i + 0; i > 5; i++)", "for ()",) 
    correctAnswer = ""}
]

// Global variables:
var numberCorrect = 0; 
var answerFirstQuestion = ""
var answerSecondQuestion = ""
var answerThirdQuestion = ""
var answerFourthQuestion = ""

//Variables for starting page text, button, and countdown:
var welcomeBanner = document.getElementById("welcomeBanner");
var instructions = document.getElementById("instructions");
var startButton = document.getElementById("startButton");
var countdownClock = document.getElementById("countdownClock");

// Variables for text of questions:
// var questionText = document.getElementById("question-text");
// var optionList = document.getElementById("possible-answers");
// var optionOne = document.getElementById("li1");
// var optionTwo = document.getElementById("li2");
// var optionThree = document.getElementById("li3");
// var optionFour = document.getElementById("li4");


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
    welcomeBanner.style.display = "none";
    instructions.style.display = "none";
    startButton.style.display = "none";
    
    // Make UL visible again:
    // optionList.style.visibility = "visible";

    // Loads question text:
    // questionText.textContent = "Question 1: Which type of HTML tag to we use to connect a JavaScript file to our HTML?";
    // optionOne.textContent = "header";
    // optionTwo.textContent = "div"; 
    // optionThree.textContent = "script";
    // optionFour.textContent = "link";


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
} 

firstQuestion();




//also needs:
        //check if correct -- deduct 10 sec if wrong

    