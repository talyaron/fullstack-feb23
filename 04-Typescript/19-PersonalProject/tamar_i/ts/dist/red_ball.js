"use strict";
exports.__esModule = true;
exports.redBall = void 0;
//draw the red ball
function redBall(xPosition, yPositin) {
    var canvas = document.querySelector('#canvas');
    if (canvas.getContext !== null) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(xPosition, yPositin, 50, 0, Math.PI * 2, true); //outer citcle
        ctx.stroke();
    }
}
exports.redBall = redBall;
