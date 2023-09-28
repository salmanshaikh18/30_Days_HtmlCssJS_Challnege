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
            { text: "MP", correct: false},
        ]
    },
    {
        question: "Capital of India?",
        ansers: [
            { text: "Delhi", correct: true},
            { text: "Mumbai", correct: false},
            { text: "UP", correct: false},
            { text: "MP", correct: false},
        ]
    }
]

const questionElement = document.getElementById('question');
const answerBtn = document.getElementById('answerButtons');
const nextBtn = document.getElementById('nextBtn');

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next"
    showQuestion();
}

const showQuestion = () => {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}

const resetState = () => {
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild) {
       answerBtn.removeChild(answerBtn.firstChild)
    }
}

const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    nextBtn.style.display = 'block';
}

const showScore = () => {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = 'Play Again';
    nextBtn.style.display = 'block';
}

const handleNextButton = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextBtn.addEventListener('click', () => {
    if ( currentQuestionIndex < questions.length) {
        handleNextButton()
    } else {
        startQuiz()
    }
})

startQuiz()