const paragraphs: string[] = [];

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

function handlesearch(ev: any) {
    const search = ev.target.value
    const pattern = RegExp(search, "i");
    
    const foundParagraphs: (string | null) = paragraphs.map((papa) => {
        const isMatch = pattern.test(papa);
        if (isMatch) {
            return papa
        }
    }).filter((papa) => papa != undefined)

    renderParagraphs(foundParagraphs, document.querySelector("#pharagraphs"))

}

function renderParagraphs(paragraphs: (string | null)[], htmlElement: HTMLElement | null ) {
    try {
        if (!htmlElement) throw new Error('htmlElement is required');
        const html = paragraphs.map(papa=> renderParagraph(papa)).join("")
        htmlElement.innerHTML= html
          
    } catch (error) {
        console.error(error)
    }
}

function renderParagraph (papa: string | null) {
    console.log("test")  
    return `<p class="found"> ${papa}</p>`

}
