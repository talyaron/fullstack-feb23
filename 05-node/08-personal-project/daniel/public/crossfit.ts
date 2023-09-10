import mongoose from 'mongoose';
export const CrossfitSchema = new mongoose.Schema({
    name: {
        type:String,
        require: [true, "Please enter a crossfit item name"] 
    },
    quantity: {
        type: Number,
        required: true,
        default:0
    },
    price: {
        type: Number,
        required: true
    },
    imgItem: {
        type: String,
        required: false
    },
    email: String
},
{
    // to create two fileds: create & update
    timestamps:true
}
) 

// model
const CrossfitItem = mongoose.model('CrossfitItem', CrossfitSchema )


async function handleAddItem(ev:any) {
    try {
        ev.preventDefault();
        const name = ev.target.name.value;
        const image = ev.target.image.value;
        const price = ev.target.image.value;
        const newItem = { name, image, price};
        if(!name || !image || !price) throw new Error("Please fill all fileds");
        const response = await fetch("/API/crossfit/add-item", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newItem)
        })
        
        const result = await response.json();
        console.log(result)

    } catch (error) {
        console.error
    }
}

async function getItems(){
    try {
        const response = await fetch('/API/crossfit/get-user-items')
        const result = await response.json();
        const { CrossfitItem } = result;
        if(!Array.isArray(CrossfitItem)) throw new Error("Items are not array")
        console.log(CrossfitItem)
        console.log(result)
        return CrossfitItem;

    } catch (error) {
        console.error(error);
        return []
    }
}

function renderItemHtml(CrossfitItem) {
    try {
        const html = `<div class="item-container">
        <h2>name = "${CrossfitItem.name}">
        <h2>quantity = "${CrossfitItem.quantity}"</h2>
        <p>price = "${CrossfitItem.price}"</p>
        <img src = "${CrossfitItem.imgItem}">
        <form id="${CrossfitItem.id}" onsubmit="handleUpdatePrice(event)">
           <input type="number" name="price" value="${CrossfitItem.price}" placeholder="price">
           <button type="submit">Update</button>
        </form>
        <button onclick="handleDeleteItem('${CrossfitItem.id}')">Delete</button>
        `
        return html;
    } catch (error) {
        console.error(error);
        return ""
    }
}

// function renderItems(CrossfitItem, HTMLElement:HTMLDivElement) {
//     try {
//         if(!HTMLElement) throw new Error("HTMLElement not found")
//         console.log(CrossfitItem)
//     if(!Array.isArray(CrossfitItem)) throw new Error("items are not array");
//     const CrossfitItemHTML = 
//     } catch (error) {
//         console.error(error)
//     }
// }