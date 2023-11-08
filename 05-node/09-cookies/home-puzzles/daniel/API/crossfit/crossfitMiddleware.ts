import {CrossfitItem} from "./crossfitModel"

export async function getUseritem(req: any, res: any, next: Function) {
  try {
    const itemId = req.cookies.item;

    const itemDB = await CrossfitItem.findById(itemId);

    if (!itemDB) {
      req.item = null;
    } else {
      req.item = itemDB;
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}