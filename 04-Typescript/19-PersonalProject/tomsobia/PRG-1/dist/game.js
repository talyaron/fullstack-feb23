function gamepad() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var context = canvas.getContext("2d");
        context.strokeStyle = "black";
        var w = 300;
        var h = 150;
        draw_lines(context, w, h);
        write_numbers(context);
        draw_x(context, 0, 0, w, h);
        draw_x(context, w / 3, 0, w, h);
        draw_x(context, (w * 2) / 3, 0, w, h);
        draw_x(context, 0, h / 3, w, h);
    }
}
function draw_lines(context, w, h) {
    context.strokeRect(0, 0, w, h);
    context.beginPath();
    context.moveTo(w / 3, 0);
    context.lineTo(w / 3, h);
    context.stroke();
    context.beginPath();
    context.moveTo(w * (2 / 3), 0);
    context.lineTo(w * (2 / 3), h);
    context.stroke();
    context.beginPath();
    context.moveTo(0, h / 3);
    context.lineTo(w, h / 3);
    context.stroke();
    context.beginPath();
    context.moveTo(0, h / 3);
    context.lineTo(w, h / 3);
    context.stroke();
    context.beginPath();
    context.moveTo(0, (h * 2) / 3);
    context.lineTo(w, (h * 2) / 3);
    context.stroke();
}
function write_numbers(context) {
    context.fillText("1", 50, 25);
    context.fillText("2", 150, 25);
    context.fillText("3", 250, 25);
    context.fillText("4", 50, 75);
    context.fillText("5", 150, 75);
    context.fillText("6", 250, 75);
    context.fillText("7", 50, 125);
    context.fillText("8", 150, 125);
    context.fillText("9", 250, 125);
}
function draw_x(context, x, y, w, h) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + w / 3, y + h / 3);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y + h / 3);
    context.lineTo(x + w / 3, y);
    context.stroke();
}
