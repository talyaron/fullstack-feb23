var paragraphs = [];
paragraphs.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
paragraphs.push('Sed cursus et nisi at vestibulum.');
paragraphs.push('Quisque et euismod ligula, semper facilisis elit.');
paragraphs.push('Nunc eleifend euismod elementum.');
paragraphs.push('Morbi rutrum erat vel libero viverra elementum.');
paragraphs.push('Donec accumsan tincidunt tellus et gravida.');
paragraphs.push('Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;');
paragraphs.push('Nam blandit, felis ut dapibus tempus, dui massa luctus purus, quis congue purus metus ultricies tellus.');
paragraphs.push('Ut eu vehicula urna.');
paragraphs.push('Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;');
var pattern = new RegExp('(em)', 'i');
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
