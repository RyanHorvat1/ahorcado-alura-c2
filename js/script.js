const btnStart = document.getElementById("btn-start");
const addedWords = document.getElementById("input-add-words");
const startZone = document.querySelector("#start-settings");
const predWords = document.getElementById("use-predetermined-words");
const ownWords = document.getElementById("use-own-words");
const errorPalabras = document.getElementById("error-palabras");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.fillStyle = "#333";
context.fillRect(0, 0, 1 * canvas.width, 1 * canvas.height);
const mobilePlaying = document.querySelector(".mar-ls");
const desktopPlaying = document.querySelector(".mar-ls-2")
const inputTry = document.getElementById("input-try");
const btnManGroup = document.getElementById("manual-buttons");
const scndRestart = document.querySelector(".scnd");
const autValidation = document.getElementById("automatic-validation");
const manValidation = document.getElementById("manual-validation");

function checkInitSelection() {
    var o = ownWords.checked;
    var p = predWords.checked;
    if ((o && p) || (o && !p)) {
        addedWords.style.display = "block";
        btnStart.style.display = "block";
        btnStart.style.transform = "translateX(0%)";
        errorPalabras.style.display = "none";
    } else if (!o && p) {
        addedWords.style.display = "none";
        btnStart.style.display = "block";
        btnStart.style.transform = "translateX(90%)";
        errorPalabras.style.display = "none";
    } else {
        addedWords.style.display = "none";
        btnStart.style.display = "none";
        errorPalabras.style.display = "block";
    }
}

predWords.addEventListener("change", function() {
    checkInitSelection();
});

ownWords.addEventListener("change", function() {
    checkInitSelection();
});

btnStart.addEventListener("click", function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mobilePlaying.style.display = "block";
    } else {
        desktopPlaying.style.display = "block";
    }

    canvas.style.display = "block";
    btnStart.style.display = "none";
    addedWords.style.display = "none";
    startZone.style.display = "none";
});

manValidation.addEventListener("change", function() {
    if (manValidation.checked) {
        autValidation.checked = false;
        inputTry.placeholder = "Ingrese una letra o una palabra para comprobar.";
        btnManGroup.style.display = "block";
        scndRestart.style.display = "none";
    } else {
        autValidation.checked = true;
        btnManGroup.style.display = "none";
        scndRestart.style.display = "block";
    }
})

autValidation.addEventListener("change", function() {
    if (autValidation.checked) {
        manValidation.checked = false;
        inputTry.placeholder = "Ingrese letras para comprobar.";
        btnManGroup.style.display = "none";
        scndRestart.style.display = "block";
    } else {
        manValidation.checked = true;
        btnManGroup.style.display = "block";
        scndRestart.style.display = "none";
    }
})