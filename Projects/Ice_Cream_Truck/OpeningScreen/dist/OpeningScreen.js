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
        var html = "\n        <h3>\n        You have to make ice cream cones for the <br> customers who come to your ice cream truck. <br>\n        Use the arrows to select the desired flavor. <br>\n        Press enter to add an ice cream scoop to the cone. <br>\n        To go to customer selection press the space bar, <br> select the appropriate customer <br>\n        and press enter to deliver the ice cream. <br>\n    </h3>\n    <h2>Be careful! </h2>\n    <h3>Customers are not so patient.\n        Work quickly and accurately! </h3>\n    <button onclick=\"handleRenderMain()\">BACK</button>\n        ";
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
    }
    catch (error) {
        console.error(error);
    }
}
renderMain(document.querySelector("#main"));
