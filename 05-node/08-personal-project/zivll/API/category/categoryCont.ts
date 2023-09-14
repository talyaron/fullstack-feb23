import { CategoryModel } from "./categoryModel";

export const addCategoey = async (req: any, res: any) => {
  try {
    const { categoryName, userName } = req.body;
    if (!categoryName || !userName)
      throw new Error(`category name or user name are missing`);
    // if (!genericCategory) {
    //   genericCategory: false;
    // }
    await CategoryModel.create({
      categoryName: categoryName,
      userName: userName,
    });
    res.send({ message: `category created` });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
export const getCategories = async (req: any, res: any) => {
  try {
    const allCategories = await CategoryModel.find({});
    res.send({ allCategories });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
