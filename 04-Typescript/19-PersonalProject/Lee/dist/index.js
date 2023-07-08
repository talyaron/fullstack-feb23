var _a, _b;
var date = new Date();
var renderCalendar = function () {
    var _a, _b;
    date.setDate(1);
    var monthDays = document.querySelector(".days");
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    var prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    var firstDayIndex = date.getDay();
    var lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    var nextDays = 7 - lastDayIndex - 1;
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    (_a = document.querySelector(".date h1")) === null || _a === void 0 ? void 0 : _a.innerHTML = months[date.getMonth()];
    (_b = document.querySelector(".date p")) === null || _b === void 0 ? void 0 : _b.innerHTML = date.toDateString();
    var days = "";
    for (var x = firstDayIndex; x > 0; x--) {
        days += "<div class=\"prev-date\">" + (prevLastDay - x + 1) + "</div>";
    }
    for (var i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += "<div class=\"today\">" + i + "</div>";
        }
        else {
            days += "<div>" + i + "</div>";
        }
    }
    for (var j = 1; j <= nextDays; j++) {
        days += "<div class=\"next-date\">" + j + "</div>";
        monthDays.innerHTML = days;
    }
};
(_a = document.querySelector('.prev')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});
(_b = document.querySelector('.next')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});
renderCalendar();
