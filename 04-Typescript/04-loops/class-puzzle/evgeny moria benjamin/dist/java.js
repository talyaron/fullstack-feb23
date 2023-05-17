for (var x = 1; x < 100; x++) {
    var y = x + "";
    if (x % 7 == 0) {
        console.log(x, "divide");
    }
    if (y.includes("7")) {
        console.log(x, "boom");
    }
    else {
        console.log(x);
    }
}
