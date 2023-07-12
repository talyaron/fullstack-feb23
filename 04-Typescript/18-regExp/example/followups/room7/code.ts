const paragraphs: string[] = [];

paragraphs.push('Cristiano Ronaldo');
paragraphs.push('Google');
paragraphs.push('Twiter');
paragraphs.push('Tal Yaron');
paragraphs.push('Benjamin');
paragraphs.push('Shiran');

function handleReg(ev:any){
    
    try {
        const searchItems = ev.target.value;
        const pattern = new RegExp(searchItems, 'i')

        const foundParagraphs = paragraphs.map((paragraph , i)=>{
            const isMatch = pattern.test(paragraph)
            if(isMatch && searchItems!=""){
                return paragraph
            }
        }).filter((paragraph)=>paragraph !== undefined);
        renderParagraphs(foundParagraphs, document.querySelector('#paragraphs'))
    } catch (error) {
        console.error(error);
    }
}

function renderParagraphs(paragraphs: (string | undefined)[], htmlElement:HTMLElement | null ) {
    try {
        const html = paragraphs.map(paragraph => renderParagraph(paragraph)).join(' ')
        if(htmlElement)
        htmlElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}

function renderParagraph(paragraph: string | undefined) {
    try {
        return `<p class="found">${paragraph}</p>`
    } catch (error) {
        console.error(error)
    }
}