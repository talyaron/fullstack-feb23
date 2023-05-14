let temp: number = 0;
debugger;
for (let i = 0; i < 100; i++) {
  if (i % 7 == 0) {
    console.log(i + " - BOOM");
  } else if (i >= 0) {
    temp = i / 10;
    if (i % 10 == 7) {
      console.log(i + " - BOOM");
    } else if (temp == 7) {
      console.log(i + " - BOOM");
    }
  }
}
