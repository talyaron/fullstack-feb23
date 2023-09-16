import {  ItemModel } from "./itemModel";


// Add Item
export const addItem = async (req: any, res: any) => {
  try {
    const { itemName, itemDesc , itemUrl} = req.body;
    if(!itemName || !itemDesc || !itemUrl) throw new Error("Please complete all fields");
    const item = new ItemModel({ itemName, itemDesc , itemUrl});
    const itemDB = await item.save();
    console.log(itemDB);

    res.send({ ok:true , itemDB});
    console.log(item)

  } catch (error) {
    console.error(error);
    res.send({ error:error.message });
  }
}

// get items
export function getItems(req: any, res: any) {
  try {
      res.send({ ItemModel });
  } catch (error) {
      console.error(error);
  }
}
