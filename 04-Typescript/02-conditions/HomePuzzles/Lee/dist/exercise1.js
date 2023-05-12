var turn = true; // true = x
var btnClicked = 0;
var btns = document.querySelectorAll(".btn");
btns.forEach(function (b) {
    b.addEventListener("click", btnClick);
});
function btnClick() {
    var _this = this;
    if (this.textContent !== "")
        return;
    btnClicked++;
    if (turn)
        this.textContent = "x";
    else
        this.textContent = "o";
    var obj = checkWin();
    if (obj.win) {
        var btns_1 = document.querySelectorAll(".btn");
        btns_1[obj.pos[0]].style.color = "red";
        btns_1[obj.pos[1]].style.color = "red";
        btns_1[obj.pos[2]].style.color = "red";
        setTimeout(function () {
            alert(_this.textContent + " is Win");
            reset();
        }, 100);
    }
    else if (obj === null || obj === void 0 ? void 0 : obj.isTie) {
        setTimeout(function () {
            alert(" is a Tie");
            reset();
        }, 100);
    }
    turn = !turn;
}
function reset() {
    var btns = document.querySelectorAll(".btn");
    turn = !turn;
    btnClicked = 0;
    btns.forEach(function (b) {
        b.textContent = "";
        b.style.color = "";
    });
}
function checkWin() {
    var btns = document.querySelectorAll(".btn");
    var obj = { win: false, isTie: false, pos: [] };
    if (btns[0].textContent == btns[1].textContent && btns[1].textContent == btns[2].textContent && btns[2].textContent !== "")
        obj = { win: true, isTie: false, pos: [0, 1, 2] };
    else if (btns[3].textContent == btns[4].textContent && btns[4].textContent == btns[5].textContent && btns[5].textContent !== "")
        obj = { win: true, isTie: false, pos: [3, 4, 5] };
    else if (btns[6].textContent == btns[7].textContent && btns[7].textContent == btns[8].textContent && btns[8].textContent !== "")
        obj = { win: true, isTie: false, pos: [6, 7, 8] };
    else if (btns[0].textContent == btns[3].textContent && btns[3].textContent == btns[6].textContent && btns[6].textContent !== "")
        obj = { win: true, isTie: false, pos: [0, 3, 6] };
    else if (btns[1].textContent == btns[4].textContent && btns[4].textContent == btns[7].textContent && btns[7].textContent !== "")
        obj = { win: true, isTie: false, pos: [1, 4, 7] };
    else if (btns[2].textContent == btns[5].textContent && btns[5].textContent == btns[8].textContent && btns[8].textContent !== "")
        obj = { win: true, isTie: false, pos: [2, 5, 8] };
    else if (btns[0].textContent == btns[4].textContent && btns[4].textContent == btns[8].textContent && btns[8].textContent !== "")
        obj = { win: true, isTie: false, pos: [0, 4, 8] };
    else if (btns[2].textContent == btns[4].textContent && btns[4].textContent == btns[6].textContent && btns[6].textContent !== "")
        obj = { win: true, isTie: false, pos: [2, 4, 6] };
    else if (btnClicked === 9)
        obj.isTie = true;
    return obj;
}
