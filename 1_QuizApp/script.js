// const questions = [
//     {
//         question: "Whick is largest animal in the world?",
//         answers: [
//             { text: "Shark", correct: false},
//             { text: "Blue whale", correct: true},
//             { text: "Elephant", correct: false},
//             { text: "Giraffe", correct: false},
//         ]
//     }, 

//     {
//         question:"Which is the smallest continent in the world? ",
//         answers: [
//             { text: "Asia", correct: false},
//             { text: "Australia", correct: true},
//             { text: "Arctic", correct: false},
//             { text: "Africa", correct: false},
//         ]
//     }, 

//     {
//         question: "Capital of India?",
//         answers: [
//             { text: "Delhi", correct: true},
//             { text: "Mumbai", correct: false},
//             { text: "UP", correct: false},
//             { text: "MP", correct: false},
//         ]
//     },
// ]

const questions = [
    {
        question: "What is the role of HTML in web development?",
        answers: [
            { text: "Handling server-side logic", correct: false },
            { text: "Styling web pages", correct: false },
            { text: "Defining the structure and content of web pages", correct: true },
            { text: "Managing databases", correct: false },
        ]
    }, 

    {
        question: "Which programming language is commonly used for building the front-end of web applications?",
        answers: [
            { text: "Java", correct: false },
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Ruby", correct: false },
        ]
    }, 

    {
        question: "What is the purpose of a CSS preprocessor like SASS or LESS in web development?",
        answers: [
            { text: "Handling server-side logic", correct: false },
            { text: "Styling web pages", correct: true },
            { text: "Defining the structure and content of web pages", correct: false },
            { text: "Managing databases", correct: false },
        ]
    },
    {
        question: "Which database technology is often used in the back-end of web applications?",
        answers: [
            { text: "NoSQL databases", correct: true },
            { text: "Front-end frameworks", correct: false },
            { text: "JavaScript libraries", correct: false },
            { text: "CSS frameworks", correct: false },
        ]
    },
    {
        question: "What does 'HTTP' stand for in the context of web development?",
        answers: [
            { text: "Hypertext Transfer Protocol", correct: true },
            { text: "High-Performance Technology Transfer Protocol", correct: false },
            { text: "Hyperlink Text Transfer Process", correct: false },
            { text: "Hyperspace Transfer Protocol", correct: false },
        ]
    },
    {
        question: "What is the purpose of a front-end framework like React or Angular in web development?",
        answers: [
            { text: "Storing and managing data", correct: false },
            { text: "Creating user interfaces and handling user interactions", correct: true },
            { text: "Defining server-side routes", correct: false },
            { text: "Optimizing database queries", correct: false },
        ]
    },
    {
        question: "What is 'REST' in the context of web services?",
        answers: [
            { text: "Representational State Transfer; a set of architectural principles for designing networked applications", correct: true },
            { text: "Remote Execution and State Transfer; a protocol for remote procedure calls", correct: false },
            { text: "Resourceful State Transfer; a database management technique", correct: false },
            { text: "Responsive Server Technology; a front-end development framework", correct: false },
        ]
    },
    {
        question: "What is the purpose of a back-end framework like Express.js or Ruby on Rails in web development?",
        answers: [
            { text: "Rendering web pages in the browser", correct: false },
            { text: "Creating user interfaces", correct: false },
            { text: "Handling server-side logic, routing, and database interactions", correct: true },
            { text: "Managing front-end assets", correct: false },
        ]
    },
];


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