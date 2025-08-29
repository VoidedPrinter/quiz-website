const startBtn = document.getElementById("start-btn");
const popupInfo = document.getElementById("popup-info");
const exitBtn = document.getElementById("exit-btn");
const main = document.getElementById("main");
const continueBtn = document.getElementById("continue-btn");
const quizSection = document.getElementById("quiz-section");
const quizBox = document.getElementById("quiz-box");

const nextBtn = document.getElementById("next-btn");
const optionList = document.getElementById("option-list");

function showElement(element) {
    // make element visible by adding the active class
    // and removing the hidden class
    element.classList.add('active');
    element.classList.remove('hidden');
}

function hideElement(element) {
    // make element not visible by adding the hidden class
    // and removing the active class
    element.classList.add('hidden');
    element.classList.remove('active');
}

startBtn.onclick = () => {
    showElement(popupInfo);
    showElement(main);
}

exitBtn.onclick = () => {
    hideElement(popupInfo);
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    hideElement(popupInfo);
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
}

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
    } else {
        console.log("Quiz Completed!");
    }
}

// Quiz
let questionCount = 0;

function showQuestions(index) {
    const questionText = document.getElementById("question-text");
    questionText.textContent = `${questions[index].number}. ${questions[index].question}`;

    const option1 = document.getElementById("option-1");
    option1.textContent = `${questions[index].options[0]}`;

    document.getElementById("option-2").textContent = `${questions[index].options[1]}`;
    document.getElementById("option-3").textContent = `${questions[index].options[2]}`;
    document.getElementById("option-4").textContent = `${questions[index].options[3]}`;
}