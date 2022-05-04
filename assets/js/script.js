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

const welcomeArea = document.getElementById("welcome-area");
const startButton = document.getElementById("start-button");
const quizArea = document.getElementById("quiz-area");
const resultArea = document.getElementById("result-area");
let question = document.getElementById("quiz-question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
let choice = document.getElementsByClassName("answer-text");
const playAgain = document.getElementById("play-again");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0; 
let questionCounter = 0;
let availableQuestions = [];

const correctBonus = 1;
const maxQuestions = 10;

//Functions

//Get buttons and add event listeners
startButton.addEventListener("click", function startQuiz() {
    welcomeArea.style.display="none";
    quizArea.style.display="flex"
}
)

playAgain.addEventListener("click", function startQuiz(){
    welcomeArea.style.display="flex";
    quizArea.style.display="none";
    resultArea.style.display="none"
})

//Starts the quiz

function startQuiz() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...myQuestions];
  console.log(availableQuestions);
  generateRandomQuestion();
};

//Generates a random question and the corresponding 4 answers

function generateRandomQuestion() {
    
    if(availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        quizArea.style.display="none";
        resultArea.style.display="flex";
    }
    
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;
  console.log(availableQuestions);

  answers.forEach( answer => {
    const number = answer.dataset['number'];
    answers.innerText = currentQuestion['answer'+ number];
})

availableQuestions.splice(questionIndex, 1);

acceptingAnswers = true;
};

answers.forEach(answer => {
    answer.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        generateRandomQuestion();
        });
})

// Checks if the user's answer is right or wrong

function checkAnswer() {

}

//Increases the user's score on a correct answer

function incrementScore() {

}

//Show's the user's final score out of ten

function showFinalScore() {

}

startQuiz();