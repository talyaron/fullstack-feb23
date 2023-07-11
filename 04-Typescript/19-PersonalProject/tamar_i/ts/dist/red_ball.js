var redBall;
//draw the red ball
function red_ball() {
    var canvas = document.querySelector('#canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); //outer citcle
        ctx.moveTo(110, 75);
    }
}
