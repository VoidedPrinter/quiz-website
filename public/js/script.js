const startBtn = document.getElementById("start-btn");
const popupInfo = document.getElementById("popup-info");
const exitBtn = document.getElementById("exit-btn");
const main = document.getElementById("main");

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