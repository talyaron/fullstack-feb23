var paragraphs = [];
paragraphs.push('Cristiano Ronaldo');
paragraphs.push('Google');
paragraphs.push('Twiter');
paragraphs.push('Tal Yaron');
paragraphs.push('Benjamin');
paragraphs.push('Shiran');
function handleReg(ev) {
    try {
        var searchItems_1 = ev.target.value;
        var pattern_1 = new RegExp(searchItems_1, 'i');
        var foundParagraphs = paragraphs.map(function (paragraph, i) {
            var isMatch = pattern_1.test(paragraph);
            if (isMatch && searchItems_1 != "") {
                return paragraph;
            }
        }).filter(function (paragraph) { return paragraph !== undefined; });
        renderParagraphs(foundParagraphs, document.querySelector('#paragraphs'));
    }
    catch (error) {
        console.error(error);
    }
}
function renderParagraphs(paragraphs, htmlElement) {
    try {
        var html = paragraphs.map(function (paragraph) { return renderParagraph(paragraph); }).join(' ');
        if (htmlElement)
            htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderParagraph(paragraph) {
    try {
        return "<p class=\"found\">" + paragraph + "</p>";
    }
    catch (error) {
        console.error(error);
    }
}
