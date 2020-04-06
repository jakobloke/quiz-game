var startButton = document.getElementById('start-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var questionElement = document.getElementById('question');
var bannerElement = document.getElementById('banner');

let shuffledQuestions, currentQuestionIndex

var count = 0;
var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answer: [
            {text: 'strings', correct: false },
            {text: 'booleans', correct: false },
            {text: 'alerts', correct: true },
            {text: 'numbers', correct: false}
        ]
    },
    {
        question: "The condition of an if/else statement is enclosed within ____.",
        answer: [
            {text: 'quotes', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'parenthesis', correct: true},
            {text: 'square brackets', correct: false}
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store:',
        answer: [
            {text: 'numbers and strings', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'booleans', correct: false},
            {text: 'all the above', correct: true}
        ]
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to vaiables',
        answer: [
            {text: 'commas', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'quotes', correct: true},
            {text: 'parenthesis', correct: false}
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer: [
            {text: 'JavaScript', correct: false},
            {text: 'terminal/bash', correct: false},
            {text: 'for loops', correct: false},
            {text: 'console.log', correct: true}
        ]
    }
];

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    answerButtonsElement.classList.remove('hide')
    bannerElement.classList.add('hide')
    currentQuestionIndex = 0
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    setNextQuestion()

}


function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
}