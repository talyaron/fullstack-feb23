function addScore() {
  try {
    scoreInterval++;
    if (scoreInterval % 1 === 0) {
      score++;
    }
    ctx.font = "20px Arial";
    ctx.fillStyle = "blueviolet";
    ctx.fillText("Score: " + score, 5, 30);

  } catch (error) {
    if (!addScore) throw new Error("Score has stopped working");
    console.error(error);
  }
}
