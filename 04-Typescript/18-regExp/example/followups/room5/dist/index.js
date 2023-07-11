var paragraphs = [
    "lorem impsum",
    "ziv",
    "jfjkf",
    "lorem impsum",
    "ziv",
    "jfjkf",
    "lorem impsum",
    "ziv",
    "jfjkf",
    "lorem impsum",
    "ziv",
    "jfjkf",
];
function handleSearch(ev) {
    try {
        var userSearch = ev.target.value;
        if (!userSearch)
            throw new Error("no userSearch");
        var pattern_1 = new RegExp(userSearch, "i");
        var found = paragraphs.map(function (paragraph, i) {
            var match = pattern_1.test(paragraph);
            if (match)
                return paragraph;
        }).filter(function (paragraph) { return paragraph !== undefined; });
        renderFound(found, document.querySelector("#root"));
        console.log(found);
    }
    catch (error) {
        console.error(error);
    }
}
try {
    var html = paragraphs.forEach(paragraph);
}
catch (error) {
    console.error(error);
}
