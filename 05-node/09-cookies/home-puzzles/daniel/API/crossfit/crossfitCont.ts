import { CrossfitItem } from './crossfitModel'

export const getItem = async(req:any, res:any)=>{
    try {
        // const {email} = 
        const itemDB = await CrossfitItem.find({});
        res.send({items:itemDB})
    } catch (error) {
        console.error(error)
    }
}


export const addItem = async(req:any, res:any)=>{
    try {
        const { name, quantity, price, imgItem} = req.body;
        console.log({name, quantity, price, imgItem});
        if(!name || !quantity || !price || !imgItem) throw new Error("Please fill all fileds");
        // if(!email) throw new Error("No email");
   
        // Add item using mongoose
        const item = new CrossfitItem({name, quantity, price, imgItem});
        const itemDB = await item.save();
        console.log(itemDB)
        
        res.send({ ok:true })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export const getUserItems = async(req:any, res:any)=>{
    try {
        const { email } = req.query;
        if(!email) {
            throw new Error("email is required");
        }
        
        const itemsDB = await CrossfitItem.find({ email });
        res.send({CrossfitItem:itemsDB })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

// export const getItem = async(req:any, res:any)=>{
//     try {
//         const {id} = req.query;
//         const itemDB = await CrossfitItem.findById(id);
//         // res.send({CrossfitItem:itemDB})
//         res.status(200).json(itemDB);
//     } catch (error) {
//         console.error(error)
//     }
// }
// export const getUserItems = async(req:any, res:any)=>{
//     try {
//         const items = await CrossfitItem.find({});
//         res.send(200).json(items)
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ error: error.message });
//     }
// }


export const deleteItem = async(req:any,res:any)=>{
    try {
        //  const { email } = req.query;
        //  console.log(email)
        const { itemId } = req.body;
       
        const itemDB = await CrossfitItem.findByIdAndDelete(itemId);

        // console.log(itemDB)

        const items = await CrossfitItem.find({});

        res.send({items})
        // res.send({ itemDB });
        // res.send("drgh")
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export const updateItemPrice = async(req:any,res:any)=> {
    try {
        const { price, id } = req.body;
        const itemDB = await CrossfitItem.findById(id);
        if(!itemDB) throw new Error("Item not found");

        itemDB.price = await CrossfitItem.findByIdAndUpdate(id, {price}) ;
        res.send({ CrossfitItem })
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}