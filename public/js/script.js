const startBtn = document.getElementById("start-btn");
const popupInfo = document.getElementById("popup-info");
const exitBtn = document.getElementById("exit-btn");

startBtn.onclick = () => {
    // make popup-info visible by adding the active class
    // and removing the hidden class
    popupInfo.classList.add('active');
    popupInfo.classList.remove('hidden');
}

exitBtn.onclick = () => {
    // make popup-info visible by adding the active class
    // and removing the hidden class
    popupInfo.classList.add('hidden');
    popupInfo.classList.remove('active');
}
