import mongoose from "mongoose";

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
export const CrossfitItem = mongoose.model('CrossfitItem', CrossfitSchema )