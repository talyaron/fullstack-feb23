for (var i = 1; i < 100; i++) {
    if (i % 7 === 0 || i % 10 === 7 || parseInt(i / 10) === 7) {
        document.write(i, " boom  ");
    }
}
