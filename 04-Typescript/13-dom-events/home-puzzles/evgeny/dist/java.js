var dog = document.querySelector(".box");
function test(event) {
    // console.log(event.clientY)
    debugger;
    var Xline = dog.style.left = event.clientX + "px";
    var Yline = dog.style.top = event.clientY + "px";
    console.log(event.clientX);
    console.log(Xline);
    dog.style.transition = "all 3s";
    if (Xline > event.clientX) {
        dog.style.transform = "scale(-1, 1)";
    }
}
