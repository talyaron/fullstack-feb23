const paragraphs: string[] = [];

paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("שכל מה שאני עברת")
paragraphs.push("i love cheese")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שהשתגעתי")
paragraphs.push("אמרו עליי שאכלתי")
paragraphs.push("אמרו עליי ששתתיי")
paragraphs.push("אמרו עליי שלבשתי")



// const pattern = new RegExp('(אמ)', 'gi')


function handleSearch(ev:any){
    try {
        const searchTerms = ev.target.value;
        const pattern = new RegExp(searchTerms, 'i');
        const foundParagraphs: (string | undefined)[] = paragraphs.map((paragraph, i) => {
            const isMatch = pattern.test(paragraph)
            if (isMatch) {
                return paragraph
            }
        }).filter((paragraph) => paragraph !== undefined);

        renderParagraphs(foundParagraphs, document.querySelector('#paragraphs'))

    } catch (error) {
        console.error(error)
    }
}

function renderParagraphs(paragraphs: (string | undefined)[], htmlElement: HTMLElement | null) {
    try {
        if (!htmlElement) throw new Error('htmlElement is required');
        const html = paragraphs.map(paragraph => renderParagraph(paragraph)).join(' ');
        htmlElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}

function renderParagraph(paragraph: string | undefined) {
    try {
        if (!paragraph) throw new Error('paragraph is required');
        return `<p class="found">${paragraph}</p>`
    } catch (error) {
        console.error(error)
    }
}