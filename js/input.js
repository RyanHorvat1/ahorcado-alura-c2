const inputAdd = document.getElementById("input-add-words");
const inputAddDash = inputAdd.value;

inputAdd.addEventListener("input", () => {
    inputAdd.value = inputAdd.value.toUpperCase();
});

btnStart.addEventListener("click", () => {
    var split = /[ ,]+/g;
    var newWordsArray = "";
    if (inputAdd.value.length > 0) {
        var inputWords = inputAdd.value;
        var wordsArray = inputWords.split(split);
        for (i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i] == "") {
                Array.prototype.remove = function(from, to) {
                    var rest = this.slice((to || from) + 1 || this.length);
                    this.length = from < 0 ? this.length + from : from;
                    return this.push.apply(this, rest);
                };

                wordsArray.remove(i);
                newWordsArray = wordsArray;

            }
        }
        wordsArrayAdd = wordsArray;
        wordsArrayAdd.forEach(element => {
            console.log(element + ": " + element.length);
        });
        window.newWordsArray = newWordsArray;
    } else {
        console.log("Vacío");
    }
});

document.onkeydown = function(e) {
    e = e || window.event;
};