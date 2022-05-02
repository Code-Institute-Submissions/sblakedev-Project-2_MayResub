//Questions

let myQuestions = [
    {
        question: "What was the name of Uncle Vernon's company?",

        answers: {
            a:'Drills n Things',
            b:'Dursley\'s Drills',
            c:'Grunnings',
            d:'Masons'
        },

        correctAnswer: 'c'
    },
    
    {
        question: "Who was headmaster of Hogwarts when Tom Riddle attended",

        answers: {
            a:'Albus Dumbledore',
            b:'Armando Dippet',
            c:'Dilys Derwent',
            d:'Phineas Nigellus Black'
        },

        correctAnswer: 'b'
    },

    {
        question: "How many Horcruxes did Lord Voldemort intend to make?",

        answers: {
            a:'5',
            b:'6',
            c:'7',
            d:'8'
        },

        correctAnswer: 'b'
    },

    {
        question: "What was Lord Voldemort's first Horcrux?",

        answers: {
            a:'Marvolo Gaunt\'s ring',
            b:'Helga Hufflepuff\'s cup',
            c:'Tom Riddle\'s diary',
            d:'Nagini',
        },

        correctAnswer: 'c'
    },

    {
        question: "Who revealed the existence of Dumbledore\'s Army to Dolores Umbridge?",

        answers: {
            a:'Marietta Edgecomb',
            b:'Cho Chang',
            c:'Michael Corner',
            d:'Terry Boot',
        },

        correctAnswer: 'a'
    },

    {
        question: "What does Harry do with the Elder Wand at the end of Deathly Hallows?",

        answers: {
            a:'He throws it away',
            b:'He breaks it in half',
            c:'He hides it behind Dumbledore\'s portrait',
            d:'He keeps it to use himself',
        },

        correctAnswer: 'd'
    },

    {
        question: "Who was the announcer at the Quidditch World Cup?",

        answers: {
            a:'Barty Crouch Sr',
            b:'Cornelius Fudge',
            c:'Rufus Scrimgeour',
            d:'Ludo Bagman'
        },

        correctAnswer: 'd'
    },

    {
        question: "How did Romilda Vane first try to give Harry a love potion?",

        answers: {
            a:'She spiked his evening pumpkin juice',
            b:'She gave him a box of spiked chocolate cauldrons',
            c:'She offered him spiked gillywater',
            d:'She spiked a chocolate frog and sent it to him'
        },

        correctAnswer: 'c'
    },

    {
        question: "Who was the Professor of Muggle Studies?",

        answers: {
            a:'Charity Burbage',
            b:'Dolores Umbridge',
            c:'Rolanda Hooch',
            d:'Aurora Sinistra'
        },

        correctAnswer: 'a'
    },

    {
        question: "Which member of the Peverell family is Harry descended from?",

        answers: {
            a:'Antioch Peverell',
            b:'Cadmus Peverell',
            c:'Ignotus Peverell',
            d:'Percival Peverell',
        },

        correctAnswer: 'c'
    },
]

const startButton = document.querySelector("#start-button");
const quizArea = document.querySelector("#quiz-area");
const quizQuestion = quizArea.querySelector("#quiz-question");
const answerDiv = quizArea.querySelector("#answer-div");
const answerA = answerDiv.querySelector("#answer-a");
const answerB = answerDiv.querySelector("#answer-b");
const answerC = answerDiv.querySelector("#answer-c");
const answerD = answerDiv.querySelector("#answer-d");
const quizScore = quizArea.querySelector("#quiz-score");
const resultArea = document.querySelector("result-area");
const finalResult = resultArea.querySelector("#final-result");
const showResult = resultArea.querySelector("#show-result");
const showScore = resultArea.querySelector("#show-score");
const playAgain = resultArea.querySelector("#play-again");


//Functions

//Get buttons and add event listeners

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

//Starts the quiz

function startQuiz() {
  
}

function showQuiz(){
    document.getElementById("quiz-area").style.display = "block";
    document.getElementById("welcome-area").style.display = "none";
    document.getElementById("result-area").style.display = "none";
}

}



//Generates a random question

function generateRandomQuestion() {

}

//Displays the question and the corresponding 4 answers

function showQuestionAndAnswers() {

}

// Checks if the user's answer is right or wrong

function checkAnswer() {

}

//Increases the user's score on a correct answer

function incrementScore() {

}

//Show's the user's final score out of ten

function showFinalScore() {

}
}
)