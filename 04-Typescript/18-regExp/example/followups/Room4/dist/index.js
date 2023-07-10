var paragraphs = [{ name: "carrot", url: "carrot.jpg" },
    { name: "Garlic", url: "garlic.jpg" },
    { name: "mushroom", url: "mushroom.jpg" },
    { name: "tomato", url: "tomato.jpg" },
    { name: "sweetYam", url: "sweetYam.jpg" },
    { name: "shomar", url: "shomar.jpg" },
    { name: "spicy pepper", url: "spicy pepper.jpg" },
    { name: "yellow pepper", url: "yellow pepper.jpg" },
    { name: "eggplanet", url: "eggplanet.jpg" },
    { name: "cucumber", url: "cucumber.jpg" },
    { name: "onion", url: "onion.jpg" }
];
var pattern = new RegExp('(em)', 'i');
function handleSearch(ev) {
    try {
        debugger;
        var searchTerms = ev.target.value;
        var pattern_1 = new RegExp(searchTerms, 'i');
        debugger;
        if (!pattern_1.test("/(?:)/i")) {
            var foundParagraphs = paragraphs.map(function (paragraph, i) {
                var isMatch = pattern_1.test(paragraph.name);
                if (isMatch) {
                    return paragraph;
                }
            }).filter(function (paragraph) { return paragraph !== undefined; });
            renderParagraphs(foundParagraphs, document.querySelector('#paragraphs'));
        }
        else {
            renderParagraphs([], document.querySelector('#paragraphs'));
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderParagraphs(paragraphs, htmlElement) {
    try {
        if (!htmlElement)
            throw new Error('htmlElement is required');
        var html = paragraphs.map(function (paragraph) { return renderParagraph(paragraph); }).join(' ');
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderParagraph(paragraph) {
    try {
        if (!paragraph)
            throw new Error('paragraph is required');
        debugger;
        return "<img src=\"./dist/" + paragraph.url + "\">";
    }
    catch (error) {
        console.error(error);
    }
}
