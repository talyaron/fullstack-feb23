var Player = /** @class */ (function () {
    function Player(name, points) {
        this.name = name;
        this.points = points;
    }
    return Player;
}());
function renderMain(rootElement) {
    try {
        if (!rootElement)
            throw new Error("can not find root elemnt");
        var html = "\n       \n        <button onclick=\"handleRenderInstructions()\">HOW TO PLAY</button>\n        <form onsubmit=\"handleStartGame(event)\">\n        <input type=\"text\" name=\"name\" placeholder=\"Enter your name\" required>\n        <input type=\"submit\" value=\"START\">\n    </form>\n        ";
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleRenderInstructions() {
    try {
        var root = document.querySelector("#main");
        if (!root)
            throw new Error("can not find root elemnt");
        var html = "\n        <h3>\n        You have to make ice cream cones for the customers who come to your ice cream van. <br>\n        Use the arrows right or left to select the desired flavor. <br>\n        Press arrow up to add an ice cream scoop to the cone. <br>\n        Press arrow down to remove all ice cream balls from the cone.<br>\n        To give ice cream to the customer, press enter <br>\n    Be careful! <br>\n    Customers aren't very patient!<br>\n        Work quickly and accurately! </h3>\n    <button onclick=\"handleRenderMain()\">BACK</button>\n        ";
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleRenderMain() {
    renderMain(document.querySelector("#main"));
}
function handleStartGame(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var player = new Player(name, 0);
        var playerToString = JSON.stringify(player);
        localStorage.setItem("player", playerToString);
        window.open("../Ice_Cream_Truck/pages/TheGame.html", "_self");
    }
    catch (error) {
        console.error(error);
    }
}
renderMain(document.querySelector("#main"));
