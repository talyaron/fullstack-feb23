const paragraphs:Vegetabel[] = [{name:"carrot", url:"carrot.jpg" },
    {name: "Garlic",url:"garlic.jpg" },
    { name:"mushroom",url: "mushroom.jpg" },
    { name:"tomato",url: "tomato.jpg" },
    { name: "sweetYam", url: "sweetYam.jpg" },
    { name: "shomar", url: "shomar.jpg" },
    { name: "spicy pepper", url: "spicy pepper.jpg" },
    { name: "yellow pepper", url: "yellow pepper.jpg" },
    { name: "eggplanet", url: "eggplanet.jpg" },
    { name: "cucumber", url: "cucumber.jpg" },
    { name:"onion",url: "onion.jpg" }

];

interface Vegetabel{
    name: string;
    url: string;
}


const pattern = new RegExp('(em)', 'i');

function handleSearch(ev: any) {
    try {
        debugger;
        const searchTerms = ev.target.value;
        const pattern = new RegExp(searchTerms, 'i');
        debugger;
        if (!pattern.test("/(?:)/i")) {
            
            const foundParagraphs: (Vegetabel | undefined)[] = paragraphs.map((paragraph, i) => {
                const isMatch = pattern.test(paragraph.name)
                if (isMatch) {
                    return paragraph
                }
            }).filter((paragraph) => paragraph !== undefined);
    
            renderParagraphs(foundParagraphs, document.querySelector('#paragraphs'))
        }
        else {
            renderParagraphs([], document.querySelector('#paragraphs'))
        }
        

    } catch (error) {
        console.error(error)
    }
}

function renderParagraphs(paragraphs: (Vegetabel | undefined)[], htmlElement: HTMLElement | null) {
    try {
        if (!htmlElement) throw new Error('htmlElement is required');
        const html = paragraphs.map(paragraph => renderParagraph(paragraph)).join(' ');
        htmlElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}

function renderParagraph(paragraph: Vegetabel | undefined) {
    try {
        if (!paragraph) throw new Error('paragraph is required');
        debugger;
        return `<img src="./dist/${paragraph.url}">`
    } catch (error) {
        console.error(error)
    }
}
