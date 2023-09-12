
interface CrossfitItem {
    name: string;
    quantity:number;
    price: number;
    imgItem: string;
    email?: string;
    _id?: string;
}



async function handleAddItem(ev:any) {
    try {
        ev.preventDefault();
        const name = ev.target.name.value;
        const quantity = ev.target.quantity.value;
        const imgItem = ev.target.imgItem.value;
        const price = ev.target.price.value;
        if(!name || !quantity || !imgItem || !price) throw new Error("Please fill all fileds");

        const item:CrossfitItem = { name,quantity, imgItem, price};
        const response = await fetch("/API/crossfit/add-item", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(item)
        })
        
        const result = await response.json();
        console.log(result)

    } catch (error) {
        console.error(error.message);
    }
}

async function getItems(){
    try {
        const response = await fetch('/API/crossfit/get-item')
        const result = await response.json();
        const { items } = result;
        if(!Array.isArray(items)) throw new Error("Items are not array")
        console.log(items)
        console.log(result)
        return items;

    } catch (error) {
        console.error(error);
        return []
    }
}

function renderItemHtml(item:CrossfitItem ) {
    try {
        const html = `<div class="item-container">
        <h2>name = "${item.name}"</h2>
        <h2>quantity = "${item.quantity}"</h2>
        <p>price = "${item.price}"</p>
        <img src = "${item.imgItem}">
        </div>
        <form id="${item._id}" onsubmit="handleUpdatePrice(event)">
           <input type="number" name="price" value="${item.price}" placeholder="price">
           <button type="submit">Update</button>
        </form>
        <button onclick="handleDeleteItem('${item._id}')">Delete</button>
        `
        return html;
    } catch (error) {
        console.error(error);
        return ""
    }
}

function renderItems(items:CrossfitItem[] , HTMLElement:HTMLDivElement) {
    try {
        if(!HTMLElement) throw new Error("HTMLElement not found")
        console.log(items)
    if(!Array.isArray(items)) throw new Error("items are not array");
    const itemsHTML = items.map(item=> renderItemHtml(item)).join("")
    HTMLElement.innerHTML = itemsHTML;
    } catch (error) {
        console.error(error)
    }
}

async function handleGetItem(){
    const items = await getItems();

    const rootitem = document.querySelector("#rootitem");
    renderItems(items, rootitem as HTMLDivElement)
}

async function handleDeleteItem(itemId:string) {
    try {
        console.log(itemId)
        const response = await fetch('/API/crossfit/delete-item',{
            method:'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({itemId})
        });
        const result = await response.json();
        const { items } = result;

        renderItems(items, document.querySelector("#rootitem"))

    } catch (error) {
        console.error(error)
    }
}