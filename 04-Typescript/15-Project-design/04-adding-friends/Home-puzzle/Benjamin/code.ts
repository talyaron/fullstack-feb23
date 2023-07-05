class vegies {
    constructor(public name: string, public img: string, public amount: number) { }
}
const vegiesArr: vegies[] = [
    new vegies("Tomato", "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg", 0),
    new vegies("Cucamber", "https://fruitfortheoffice.co.uk/pub/media/catalog/product/cache/118fd06640efc949eafa2123c39b08e3/1/9/1918.jpg", 0),
    new vegies("Onion", "https://produits.bienmanger.com/36700-0w470h470_Organic_Red_Onion_From_Italy.jpg", 0),
    new vegies("Garlic", "https://www.realsimple.com/thmb/zjJYhj0AXTu8Ndio6-Hl2NzSicY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/health-benefits-of-garlic-2000-482c21fd2d154102a9b7a46ccb34e70a.jpg", 0),
    new vegies("Cabbage", "https://upload.wikimedia.org/wikipedia/commons/6/6f/Cabbage_and_cross_section_on_white.jpg", 0),
    new vegies("Broccoli", "https://cdn.britannica.com/25/78225-050-1781F6B7/broccoli-florets.jpg", 0),
    new vegies("Pepper", "https://i5.walmartimages.com/asr/7be94a8e-9a5d-4f87-842f-5fe4084138ba.c95d36e140f5e0d492ca632b42e4543c.jpeg", 0),
    new vegies("Potato", "https://m.media-amazon.com/images/I/313dtY-LOEL.jpg", 0)

]
let root = document.querySelector(".root") as HTMLDivElement;
vegiesArr.forEach((vegie, index) => {
    let vegHTML = `<div class="root__veggie">
    <h1 class="root__veggie__name">${vegie.name}</h1>
    <img class="root__veggie__img" src="${vegie.img}" alt="">
    <h2 class="root__veggie__amount">${vegie.amount}</h2>
    <div class="root__veggie__btns">
    <button class="btnp" onclick="plusAmount(${vegiesArr.indexOf(vegie)})">+</button>
    <button class="btnm" onclick="minusAmount(${vegiesArr.indexOf(vegie)})">-</button>
      <form onsubmit="handleInput(event, ${index})">
        <input type="text" name="amount" placeholder="desirable amount">
        <input type="submit">
      </form>
    </div>
  </div>`;

    if (root) {
        root.innerHTML += vegHTML;
    }
});

function handleInput(event: any, index: number) {
    event.preventDefault();
    const newAmount = parseInt(event.target.amount.value);

    if (!isNaN(newAmount)) {
        vegiesArr[index].amount = newAmount;

        const amountElement = event.target.closest(".root__veggie")!.querySelector(".root__veggie__amount");
        if (amountElement) {
            amountElement.textContent = newAmount.toString();
        }
    }

    event.target.amount.value = "";
}
function plusAmount(index: number) {
    if (index >= 0 && index < vegiesArr.length) {
        vegiesArr[index].amount += 1;
        const amountElement = document.querySelector(`.root__veggie:nth-child(${index + 1}) .root__veggie__amount`);
        if (amountElement) {
            amountElement.textContent = vegiesArr[index].amount.toString();
        }
    }
}

function minusAmount(index: number) {
    if (index >= 0 && index < vegiesArr.length) {
        if (vegiesArr[index].amount > 0) {
            vegiesArr[index].amount -= 1;
            const amountElement = document.querySelector(`.root__veggie:nth-child(${index + 1}) .root__veggie__amount`);
            if (amountElement) {
                amountElement.textContent = vegiesArr[index].amount.toString();
            }
        }
    }
}


function proceed(){
    window.location.href = "proceed.html";
}