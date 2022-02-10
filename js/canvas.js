var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

//FUNCTION TO COVER THE CANVAS BACKGROUND
function drawBackground() {
    if (canvas.getContext) {
        ctx.beginPath();
        ctx.fillStyle = "#333";
        ctx.fillRect(0, 0, 1 * canvas.width, 1 * canvas.height);
        ctx.closePath();
    }
}

//FUNCTION TO DRAW LINES ON CANVAS
function drawLine(w, color, x, y, xl, yl) {
    if (canvas.getContext) {
        ctx.beginPath();
        ctx.lineWidth = w;
        ctx.strokeStyle = color;
        ctx.moveTo(x, y);
        ctx.lineTo(xl, yl);
        ctx.stroke();
        ctx.closePath();
    }
}

//FUNCTION TO DRAW THE GALLOW
function drawGallow() {
    drawLine(2, "#FFF", 0, ((canvas.height / 10) * 9.9), canvas.width / 4, ((canvas.height / 10) * 9.9));
    drawLine(2, "#FFF", (canvas.width / 10), canvas.height, (canvas.width / 10), (canvas.height / 20));
    drawLine(2, "#FFF", (canvas.width / 10), (canvas.height / 20), (canvas.width / 10) * 4, (canvas.height / 19));
    drawLine(2, "#FFF", (canvas.width / 10) * 4, (canvas.height / 19), (canvas.width / 10) * 4, (canvas.height / 19) * 3);
}

//FUNCTION TO DRAW THE HANGED MAN
function drawHang() {
    if (canvas.getContext) {
        //HEAD
        if (1 == 1) {
            ctx.beginPath();
            ctx.strokeStyle = "#FFF";
            ctx.arc((canvas.width / 10) * 4, (canvas.height / 19) * 4 + 1, 10, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();
        }

        //CHEST
        if (2 == 2) {
            drawLine(1.5, "#FFF", (canvas.width / 10) * 4, (canvas.height / 19) * 5 + 2, (canvas.width / 10) * 4, (canvas.height / 19) * 10);
        }

        //LEFT ARM
        if (3 == 3) {
            drawLine(1.5, "#FFF", (canvas.width / 10) * 4, (canvas.height / 19) * 5 + 4.5, (canvas.width / 10) * 3.5, (canvas.height / 19) * 8);
        }

        //RIGHT ARM
        if (4 == 4) {
            drawLine(1.5, "#FFF", (canvas.width / 10) * 4, (canvas.height / 19) * 5 + 4.5, (canvas.width / 6) * 2.75, (canvas.height / 19) * 8);
        }

        //LEFT LEG
        if (5 == 5) {
            drawLine(1.5, "#FFF", (canvas.width / 10) * 4, (canvas.height / 19) * 10, (canvas.width / 10) * 3.5, (canvas.height / 19) * 14);
        }

        //RIGHT LEG
        if (6 == 6) {
            drawLine(1.5, "#FFF", (canvas.width / 10) * 4, (canvas.height / 19) * 10, (canvas.width / 6) * 2.75, (canvas.height / 19) * 14);
        }
    }
}

const btnReinit = document.getElementById("reinit");

btnReinit.addEventListener("click", () => {
    cleanLine();
    drawDashes();
    showWord();
});

const btnMobReinit1 = document.getElementById("mobile-reinit-1");

btnMobReinit1.addEventListener("click", () => {
    cleanLine();
    drawDashes();
    showWord();
});

const btnMobReinit2 = document.getElementById("mobile-reinit-2");

btnMobReinit2.addEventListener("click", () => {
    cleanLine();
    drawDashes();
    showWord();
});

//FUNCTION TO CLEAN LINE
function cleanLine() {
    ctx.clearRect((canvas.width / 10) * 1.1, (canvas.height / 10) * 8, (canvas.width), (canvas.height / 10) * 1.25);
    ctx.fillStyle = "#333"
    ctx.fillRect((canvas.width / 10) * 1.1, (canvas.height / 10) * 8, (canvas.width), (canvas.height / 10) * 1.3);
}

//FUNCTION TO DRAW THE DASHES
function drawDashes() {
    if (true) {
        var arr = Math.floor(Math.random() * 5);
        window.arr = arr;
        var s = Math.floor(Math.random() * 26);
        window.s = s;
        var l = selWords[arr][s].length;
        window.l = l;
        var i = (15.4065 * (Math.exp((-0.0957 * l))));
        window.i = i;
        var z = l + i;
        window.z = z;
        while (i < z) {
            ctx.moveTo((canvas.width / 10) * 4, (canvas.height / 10) * 9);
            ctx.font = "10px sans-serif";
            ctx.fillStyle = "#FFF";
            ctx.textAlign = "center";
            ctx.fillText("__", (canvas.width / 20) * i, (canvas.height / 10) * 9);
            i++;
        }
    }
}

function showWord() {
    let p = 0;
    while (p < l && i < z) {
        ctx.moveTo((canvas.width / 10) * 3.5, (canvas.height / 10) * 9);
        ctx.font = "10px serif";
        ctx.fillStyle = "#FFF";
        ctx.textAlign = "center";
        ctx.fillText(selWords[arr][s].charAt(p), (canvas.width / 20) * i, (canvas.height / 10) * 9);

        i++
        p++;
    }
}