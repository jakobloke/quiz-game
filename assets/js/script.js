var startButton = document.getElementById('start-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var questionElement = document.getElementById('question');
var bannerElement = document.getElementById('banner');
var timeClockElement = document.getElementById('timer');
var quizTimer, display, score;

let shuffledQuestions, currentQuestionIndex;

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

startButton.addEventListener('click', startGame);
answerButtonsElement.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    //answerButtonsElement.classList.remove('hide')
    bannerElement.classList.add('hide');
    currentQuestionIndex = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    setNextQuestion();
}

function setNextQuestion() {
    count++
    if (count > 4) {
        clearInterval();
        score = timer.innerText;
    }
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.lastChild)
    };
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answer.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
};

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    timeBank(selectedButton);
};

function timeBank(selected) {
     var answerCheck;
    for(i = 0; i < questions.length; i++){
        if(questionElement.innerText == questions[i].question){{
            for(j = 0; j < questions[i].answer.length; j++){
                if(selected.innerText == questions[i].answer[j].text){
                    answerCheck = questions[i].answer[j].correct;
                }
             }
        }}
    }
//     if(answerCheck == false) {
        
// };
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
      let  minutes = parseInt(timer / 60, 10);
      let  seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer == 0) {
            stopQuiz();
        }
    }, 1000);
};

window.onload = function () {
    quizTimer = 60 * 1.25,
    display = timeClockElement;
    startTimer(quizTimer, display);
};

function stopQuiz () {    
    document.getElementById('timer').style.display = "none";
    document.getElementById('question container').style.display = "none";
    document.getElementById('start-btn').style.display = "none";
    document.getElementById('myText').style.display = "";
    window.open("highscores.html?timer="+score+"&name="+myText.innerText);
}