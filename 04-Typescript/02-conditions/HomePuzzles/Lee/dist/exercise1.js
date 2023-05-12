var turn = true; // true = x
var btns = document.querySelectorAll(".btn");
btns.forEach(function (b) {
    b.addEventListener("click", btnClick);
});
function btnClick() {
    var _this = this;
    if (this.textContent !== "")
        return;
    if (turn)
        this.textContent = "x";
    else
        this.textContent = "o";
    if (checkWin()) {
        setTimeout(function () {
            alert(_this.textContent + " is Win");
        }, 100);
    }
    turn = !turn;
}
function checkWin() {
    var btns = document.querySelectorAll(".btn");
    if (btns[0].textContent == btns[1].textContent && btns[1].textContent == btns[2].textContent && btns[2].textContent !== "")
        return true;
    else if (btns[3].textContent == btns[4].textContent && btns[4].textContent == btns[5].textContent && btns[5].textContent !== "")
        return true;
    else if (btns[6].textContent == btns[7].textContent && btns[7].textContent == btns[8].textContent && btns[8].textContent !== "")
        return true;
    else if (btns[0].textContent == btns[3].textContent && btns[3].textContent == btns[6].textContent && btns[6].textContent !== "")
        return true;
    else if (btns[1].textContent == btns[4].textContent && btns[4].textContent == btns[7].textContent && btns[7].textContent !== "")
        return true;
    else if (btns[2].textContent == btns[5].textContent && btns[5].textContent == btns[8].textContent && btns[8].textContent !== "")
        return true;
    else if (btns[0].textContent == btns[4].textContent && btns[4].textContent == btns[8].textContent && btns[8].textContent !== "")
        return true;
    else if (btns[2].textContent == btns[4].textContent && btns[4].textContent == btns[6].textContent && btns[6].textContent !== "")
        return true;
}
