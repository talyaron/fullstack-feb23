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
function handlesearch(ev) {
    var search = ev.target.value;
    var pattern = RegExp(search, "i");
    var foundParagraphs = paragraphs.map(function (papa) {
        var isMatch = pattern.test(papa);
        if (isMatch) {
            return papa;
        }
    }).filter(function (papa) { return papa != undefined; });
    renderParagraphs(foundParagraphs, document.querySelector("#pharagraphs"));
}
function renderParagraphs(paragraphs, htmlElement) {
    try {
        if (!htmlElement)
            throw new Error('htmlElement is required');
        var html = paragraphs.map(function (papa) { return renderParagraph(papa); }).join("");
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderParagraph(papa) {
    console.log("test");
    return "<p class=\"found\"> " + papa + "</p>";
}
