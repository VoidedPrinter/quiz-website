const startBtn = document.getElementById("start-btn");
const popupInfo = document.getElementById("popup-info");
const exitBtn = document.getElementById("exit-btn");
const main = document.getElementById("main");
const continueBtn = document.getElementById("continue-btn");
const quizSection = document.getElementById("quiz-section");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");

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

// Info ------------------------------------------------ //
exitBtn.onclick = () => {
    hideElement(popupInfo);
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    hideElement(popupInfo);
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(questionCount);
    questionCounter(questionCount);
}

// Quiz ------------------------------------------------ //
let questionCount = 0;
let userScore = 0;

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionCounter(questionCount);

        // Disable the button for the next question
        nextBtn.classList.remove('active');
    } else {
        console.log("Quiz Completed!");
        showResultBox();
    }
}

function showQuestions(index) {
    // Set the question text
    const questionText = document.getElementById("question-text");
    questionText.textContent = `${questions[index].number}. ${questions[index].question}`;

    // Generate the option-list HTML
    const option1 = document.getElementById("option-list");
    let optionTag = "";
    for (let i = 0; i < questions[index].options.length; i++) {
        optionTag += `<div class="option" onclick="optionSelected(this)">
                        <span>${questions[index].options[i]}</span>
                    </div>`;
    }
    option1.innerHTML = optionTag;
}

function optionSelected(answer) {
    let userAnswer = answer.textContent.trim(); // It adds a bunch of whitespace in front
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer === correctAnswer) {
        answer.classList.add('correct');
        userScore++;
        updateUserScore();
    } else {
        answer.classList.add('incorrect');

        // Show the correct answer
        for (let i = 0; i < allOptions; i++) {
           if (optionList.children[i].textContent.trim() === correctAnswer) {
                optionList.children[i].classList.add('correct');
           }
        }
    }

    // Only get to pick an option once. Disable all when done.
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    // Only go to next question after picking an option
    nextBtn.classList.add('active');
}

function updateUserScore() {
    const headerScore = document.getElementById("header-score");
    headerScore.textContent = `Score ${userScore} / ${questions.length}`;
}

function questionCounter(index) {
    const questionTotal = document.getElementById("question-total");
    questionTotal.textContent = `${questions[index].number} / ${questions.length} Questions`;
}

/** Result Box adn Hide QuizBox */
function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add("active");
}