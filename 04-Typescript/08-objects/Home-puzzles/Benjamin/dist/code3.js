var historysub = {
    info: "history",
    grades: [94, 86, 85, 57, 78, 68],
    calculateaverage: function () {
        var len = (this.grades).length;
        var c = 0;
        for (var i = len - 1; i >= 0; i--) {
            c = c + this.grades[i];
        }
        return Math.floor(c / len);
    }
};
var mathsub = {
    info: "math",
    grades: [92, 84, 82, 37, 68, 100, 98],
    calculateaverage: function () {
        var len = (this.grades).length;
        var c = 0;
        for (var i = len - 1; i >= 0; i--) {
            c = c + this.grades[i];
        }
        return Math.floor(c / len);
    }
};
var englishsub = {
    info: "english",
    grades: [95, 83, 82, 56],
    calculateaverage: function () {
        var len = (this.grades).length;
        var c = 0;
        for (var i = len - 1; i >= 0; i--) {
            c = c + this.grades[i];
        }
        return Math.floor(c / len);
    }
};
var literaturesub = {
    info: "literature",
    grades: [94, 86, 85],
    calculateaverage: function () {
        var len = (this.grades).length;
        var c = 0;
        for (var i = len - 1; i >= 0; i--) {
            c = c + this.grades[i];
        }
        return Math.floor(c / len);
    }
};
var finalAvg = (historysub.calculateaverage() + mathsub.calculateaverage() + englishsub.calculateaverage() + literaturesub.calculateaverage()) / 4;
console.log("your current semister average is:", finalAvg);
console.log("History Avg:", historysub.calculateaverage());
console.log("math Avg:", mathsub.calculateaverage());
console.log("english Avg:", englishsub.calculateaverage());
console.log("literature Avg:", literaturesub.calculateaverage());
var finalAvgAsString = String(finalAvg);
var historyavgg = document.getElementById('history');
if (historyavgg != null) {
    historyavgg.textContent = historysub.calculateaverage();
}
var mathavgg = document.getElementById('math');
if (mathavgg != null) {
    mathavgg.textContent = mathsub.calculateaverage();
}
var englishavgg = document.getElementById('english');
if (englishavgg != null) {
    englishavgg.textContent = englishsub.calculateaverage();
}
var literatureavgg = document.getElementById('literature');
if (literatureavgg != null) {
    literatureavgg.textContent = literaturesub.calculateaverage();
}
var finalavgg = document.getElementById('finavg');
if (finalavgg != null) {
    finalavgg.textContent = finalAvgAsString;
}
var historyallgrades = document.getElementById('historyall');
if (historyallgrades != null) {
    historyallgrades.textContent = historysub.grades;
}
var mathallgrades = document.getElementById('mathall');
if (mathallgrades != null) {
    mathallgrades.textContent = mathsub.grades;
}
var englishallgrades = document.getElementById('englishall');
if (englishallgrades != null) {
    englishallgrades.textContent = englishsub.grades;
}
var literatureallgrades = document.getElementById('literatureall');
if (literatureallgrades != null) {
    literatureallgrades.textContent = literaturesub.grades;
}
