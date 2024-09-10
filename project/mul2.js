let currentQuestionIndex = 0;
let score = 0;
let timer;
const totalTime = 1 * 60; // 10 minutes in seconds
let timeLeft = totalTime;
const questions = [
    {
        question: " sum of 2+3+4+5",
        options: ["10", "14", "13", "12"],
        answer: "14"
    },
    {
        question: " 110 divided by 10",
        options: ["11", "10", "5", "8"],
        answer: "11"
    },
    {
        question: "20+(90÷2) is equal to:",
        options: ["50", "55", "65", "60"],
        answer: "65"
    },
    {
        question: "The product of 82 and 5 is:",
        options: ["400", "410", "420", "540"],
        answer: "410"
    },
    {
        question: " Find the missing terms in multiple of 3: 3, 6, 9, __, 15",
        options: ["10", "11", "12", "13"],
        answer: "12"
    },
    {
        question: " Solve 24÷8+2.",
        options: ["5", "6", "8","12"],
        answer: "5"
    },
    {
        question: 'Solve: 300 – (150×2)',
        options: ['150', '100', '50', '0'],
        answer: '0'
    },
    {
        question: "The product of 121 x 0 x 200 x 25 is",
        options: ["1500", "00", "4000", "5000"],
        answer: "00"
    },
    {
        question: "When JS develope?",
        options: ["1990", "1995", "1999", "1892"],
        answer: "1995"
    },
    {
        question: " What is the next prime number after 5?",
        options: ["6", "7", "9", "11"],
        answer: "7"
    }

    
];

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    startTimer();
});
function loadQuestion() {

    const Question = document.getElementById("question");
    const Options = document.getElementById("options");
     Options.innerHTML = '';
    const question = questions[currentQuestionIndex];
    Question.innerText = question.question;

    question.options.forEach((option, index) => {
        const Option = document.createElement("div");
        Option.innerHTML = `<input type="radio" name="option" id="option${index}" value="${option}">
        <label for="option${index}">${option}</label>`;
         Options.appendChild(Option);
    });

    document.getElementById("next-button").disabled = false;
}
function nextQuestion() {
    const selectOption = document.querySelector('input[name="option"]:checked');
    if (selectOption) {
        if (selectOption.value === questions[currentQuestionIndex].answer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    } else {
        alert("Please select any option");
    }
}
function startTimer() {
    const timeElement = document.getElementById("time");
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeElement.innerText =` ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}
function endQuiz() {
    document.getElementById("question").innerText = "Quiz Over!";
    document.getElementById("options").innerHTML = '';
    document.getElementById("next-button").style.display = 'none';
    document.getElementById("score-value").innerText = score;
    document.getElementById("timer").style.display = 'none';
}