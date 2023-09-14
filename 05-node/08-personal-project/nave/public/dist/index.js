function toggleMenu() {
    var popup = document.querySelector("#popup");
    renderpopUpMenu(popup);
}
function renderpopUpMenu(rootElement) {
    try {
        var menu_button = document.querySelector(".menu-button");
        var html = "";
        if (menu_button.getAttribute("active") == "false") {
            html = "\n        <ul dir=\"rtl\" id=\"popupList\">\n        <li><a href=\"../home-page/homepage.html\">\u05E2\u05DE\u05D5\u05D3 \u05D4\u05D1\u05D9\u05EA</a></li>\n        <li> <a href=\"../home/Income.html\">\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA</a></li>\n        <li> <a href=\"../home/expenses.html\">\u05D4\u05DB\u05E0\u05E1\u05D5\u05EA</a></li>\n        <li> <a href=\"../home/profit.html\">\u05D4\u05E8\u05D5\u05D5\u05D7 \u05E9\u05DC\u05D9</a></li>\n        <li> <a href=\"../home-page/homepage.html#about-us\">\u05E7\u05E6\u05EA \u05E2\u05DC\u05D9\u05E0\u05D5</a></li>\n        <li> <a href=\"../home-page/homepage.html#contact\">\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</a></li>\n      </ul>\n           ";
            menu_button.setAttribute("active", "true"); //chenge the attribute to "true"
        }
        else {
            html = "";
            menu_button.setAttribute("active", "false");
        }
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
