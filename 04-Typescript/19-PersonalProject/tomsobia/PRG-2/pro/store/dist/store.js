var root = document.querySelector("#root");
var Detailsstring = localStorage.getItem("user");
var details = Detailsstring ? JSON.parse(Detailsstring) : { name: "" };
try {
    if (root) {
        root.innerHTML = "Hello " + details.name;
    }
    var addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", addToCart);
    });
}
catch (error) {
    console.error("An error occurred:", error);
}
function addToCart(event) {
    try {
        var product = event.target.getAttribute("data-product");
        alert("\u05D4\u05DE\u05D5\u05E6\u05E8 " + product + " \u05E0\u05D5\u05E1\u05E3 \u05DC\u05E1\u05DC \u05D4\u05E7\u05E0\u05D9\u05D5\u05EA");
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}
