import {Schema, model} from "mongoose";

export const CrossfitSchema = new Schema({
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
    email: {
        type: String,
        required: false
    }
},
// {
//     // to create two fileds: create & update
//     timestamps:true
// }
) 

// model
export const CrossfitItem = model('items', CrossfitSchema )