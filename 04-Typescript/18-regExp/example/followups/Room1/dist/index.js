var paragraphs = [];
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("שכל מה שאני עברת");
paragraphs.push("i love cheese");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שהשתגעתי");
paragraphs.push("אמרו עליי שאכלתי");
paragraphs.push("אמרו עליי ששתתיי");
paragraphs.push("אמרו עליי שלבשתי");
// const pattern = new RegExp('(אמ)', 'gi')
function handleSearch(ev) {
    try {
        var searchTerms = ev.target.value;
        var pattern_1 = new RegExp(searchTerms, 'i');
        var foundParagraphs = paragraphs.map(function (paragraph, i) {
            var isMatch = pattern_1.test(paragraph);
            if (isMatch) {
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
        return "<p class=\"found\">" + paragraph + "</p>";
    }
    catch (error) {
        console.error(error);
    }
}
