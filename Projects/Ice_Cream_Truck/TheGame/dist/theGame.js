var p2 = localStorage.getItem("player");
if (p2) {
    console.log(p2);
    var y = JSON.parse(p2);
    console.log(y);
    var name = y.name;
    console.log(name);
    var p3 = new Player(name, 0);
    console.log(p3);
}
