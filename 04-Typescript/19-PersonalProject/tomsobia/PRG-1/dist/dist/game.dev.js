"use strict";

function draw_gamepad() {
  var canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    var context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.strokeRect(0, 0, 200, 100);
  }
}