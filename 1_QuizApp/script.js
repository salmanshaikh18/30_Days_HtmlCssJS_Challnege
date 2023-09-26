const questions = [
    {
        question: "Whick is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    }, 

    {
        question:"Which is the smallest continent in the world? ",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    }, 

    {
        question: "Capital of India?",
        ansers: [
            { text: "Delhi", correct: true},
            { text: "Mumbai", correct: false},
            { text: "UP", correct: false},
            { text: "MP", correct: false}
        ]
    }
]

const questionElement = document.getElementById('question');
const answerBtn = document.getElementById('answerButtons');
const nextBtn = document.getElementById('nextBtn');

let currentQuestionIndex = 0;

let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score: 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

const showQuestion = () => {
    let currentQuestion = questions[currentQuestionIndex]
    console.log(currentQuestion)
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHtml = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerBtn.appendChild(button)
    })
}

startQuiz()