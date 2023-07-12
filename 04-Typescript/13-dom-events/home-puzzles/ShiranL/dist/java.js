var _this = this;
var dog = document.querySelector("#dog");
//Detect touch device
var move = function (e) {
    //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
    try {
        //PageX and PageY return the position of client's cursor from top left of screen
        var x = e.pageX;
        var y = e.pageY;
    }
    catch (e) { }
    //set left and top of div based on mouse position
    _this.style.left = x - 50 + "px";
    _this.style.top = y - 50 + "px";
};
//For mouse
dog2.addEventListener("mousemove", function (e) {
    try {
        //PageX and PageY return the position of client's cursor from top left of screen
        var x = e.pageX;
        var y = e.pageY;
        dog2.style.left = x - 50 + "px";
        dog2.style.top = y - 50 + "px";
    }
    catch (e) { }
    //set left and top of div based on mouse position
});
dog.addEventListener("mousemove", function (e) {
    try {
        //PageX and PageY return the position of client's cursor from top left of screen
        var xx = e.pageX;
        var yy = e.pageY;
        dog.style.left = xx - 50 + "px";
        dog.style.top = yy - 50 + "px";
    }
    catch (e) { }
    //set left and top of div based on mouse position
});
