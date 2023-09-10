import { CrossfitItem } from './crossfitModel'

export const getItem = async(req:any, res:any)=>{
    try {
        const itemDB = await CrossfitItem.find({});
        res.send({CrossfitItem:itemDB})
    } catch (error) {
        console.error(error)
    }
}

export const addItem = async(req:any, res:any)=>{
    try {
        const { name, quantity, price, imgItem, email } = req.body;
        console.log({name, quantity, price, imgItem, email});
        if(!name || !quantity || !price || !imgItem) throw new Error("Please fill all fileds");
        if(!email) throw new Error("No email");

        const crossfitItem = new CrossfitItem({name, quantity, price, imgItem, email});
        const itemDB = await crossfitItem.save();
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

export const deleteItem = async(req:any,res:any)=>{
    try {
        const { id } = req.body;
        const itemDB = await CrossfitItem.findByIdAndDelete(id);

        res.send({ itemDB });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export const updateItem = async(req:any,res:any)=> {
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