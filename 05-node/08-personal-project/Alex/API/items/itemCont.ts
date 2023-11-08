import  { ItemModel } from "./itemModel";


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
// export async function getItems(req: any, res: any) {
//   try {
//     // Specify the fields you want to include in the response
//     const fieldsToInclude = ['itemName', 'itemDesc', 'itemUrl'];

//     // Create a projection object based on the fields to include
//     const projection = fieldsToInclude.reduce((acc, field) => {
//       acc[field] = 1;
//       return acc;
//     }, {});

//     const itemsDB: any[] = await ItemModel.find({}, projection);
    

//     res.send({ items: itemsDB });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// }

export async function getItems(req: any, res: any) {
  try {
      const itemsDB = await ItemModel.find({});
      res.send({ items : itemsDB });
  } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
  }
}
