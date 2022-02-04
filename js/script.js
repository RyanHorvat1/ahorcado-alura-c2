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
const playing = document.querySelector(".mar-ls");
const inputTry = document.getElementById("input-try");
const btnManGroup = document.getElementById("manual-buttons");
const scndRestart = document.querySelector(".scnd");
const autValidation = document.getElementById("automatic-validation");
const manValidation = document.getElementById("manual-validation");

/*
var userAgent = window.navigator.userAgent;
var platform = window.navigator.platform;*/
/*var platform = navigator.userAgentData.platform || navigator.platform || 'unknown';*/
/*var macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
var windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
var iosPlatforms = ['iPhone', 'iPad', 'iPod'];
var os = null;

function getOS() {
    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}
*/
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

/*function mobile() {
    getOS();
    if (os != "Android" || os != "iOS") {
        alert("Yup");
    } else {
        alert("Nope");
    }
}*/

btnStart.addEventListener("click", function() {
    /*mobile();*/
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // true for mobile device
        alert("mobile device");
    } else {
        // false for not mobile device
        alert("not mobile device");
    }
    canvas.style.display = "block";
    playing.style.display = "block";
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