function drawGallow() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.fillStyle = "#333";
        ctx.fillRect(0, 0, 1 * canvas.width, 1 * canvas.height);
        ctx.closePath();

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#FFF";
        ctx.moveTo(0, canvas.height);
        ctx.lineTo(canvas.width / 4, canvas.height);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.strokeStyle = "#FFF";
        ctx.moveTo((canvas.width / 10), canvas.height);
        ctx.lineTo((canvas.width / 10), (canvas.height / 20));
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.strokeStyle = "#FFF";
        ctx.moveTo((canvas.width / 10), (canvas.height / 20));
        ctx.lineTo((canvas.width / 10) * 4, (canvas.height / 19));
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.strokeStyle = "#FFF";
        ctx.moveTo((canvas.width / 10) * 4, (canvas.height / 19));
        ctx.lineTo((canvas.width / 10) * 4, (canvas.height / 19) * 3);
        ctx.stroke();
        ctx.closePath();
    }
}

function drawHang() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        /*HEAD*/
        if (1 == 1) {
            ctx.beginPath();
            ctx.strokeStyle = "#FFF";
            ctx.arc((canvas.width / 10) * 4, (canvas.height / 19) * 4 + 1, 10, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();
        }

        /*CHEST*/
        if (2 == 2) {
            ctx.beginPath();
            ctx.strokeStyle = "#FFF";
            ctx.moveTo((canvas.width / 10) * 4, (canvas.height / 19) * 5 + 2);
            ctx.lineTo((canvas.width / 10) * 4, (canvas.height / 19) * 10);
            ctx.stroke();
            ctx.closePath();
        }

        /*LEFT ARM*/
        if (3 == 3) {
            ctx.beginPath();
            ctx.strokeStyle = "#FFF";
            ctx.moveTo((canvas.width / 10) * 4, (canvas.height / 19) * 5 + 4.5);
            ctx.lineTo((canvas.width / 10) * 3.5, (canvas.height / 19) * 8);
            ctx.stroke();
            ctx.closePath();
        }

        /*RIGHT ARM*/
        if (4 == 4) {
            ctx.beginPath();
            ctx.strokeStyle = "#FFF";
            ctx.moveTo((canvas.width / 10) * 4, (canvas.height / 19) * 5 + 4.5);
            ctx.lineTo((canvas.width / 6) * 2.75, (canvas.height / 19) * 8);
            ctx.stroke();
            ctx.closePath();
        }

        /*LEFT LEG*/
        if (5 == 5) {
            ctx.beginPath();
            ctx.strokeStyle = "#FFF";
            ctx.moveTo((canvas.width / 10) * 4, (canvas.height / 19) * 10);
            ctx.lineTo((canvas.width / 10) * 3.5, (canvas.height / 19) * 14);
            ctx.stroke();
            ctx.closePath();
        }

        /*RIGHT LEG*/
        if (6 == 6) {
            ctx.beginPath();
            ctx.strokeStyle = "#FFF";
            ctx.moveTo((canvas.width / 10) * 4, (canvas.height / 19) * 10);
            ctx.lineTo((canvas.width / 6) * 2.75, (canvas.height / 19) * 14);
            ctx.stroke();
            ctx.closePath();
        }
    }
}