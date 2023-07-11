const paragraphs: string[] = [
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
function handleSearch(ev: any) {
  try {
    const userSearch = ev.target.value;
    if (!userSearch) throw new Error("no userSearch");
    const pattern = new RegExp(userSearch, "i");

    const found:(string|undefined) [] = paragraphs.map((paragraph, i) => {
      const match = pattern.test(paragraph);
      if (match) return paragraph;
      
    }).filter((paragraph) => paragraph !== undefined);
    renderFound(found, document.querySelector("#root"))

    console.log(found);
  } catch (error) {
    console.error(error);
  }
}
function renderFound(paragraphs:string|undefined[], htmlelement:HTMLElement|null)
try {
   const html = paragraphs.forEach(paragraph)=>
   
} catch (error) {
   console.error(error);
}