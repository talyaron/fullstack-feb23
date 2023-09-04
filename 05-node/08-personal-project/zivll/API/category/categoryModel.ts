import { Schema, model } from "mongoose";
// these schema is used to devide all expences into categories
export const CategorySchema = new Schema({
  categoryName: String,
  userName: String,
});
export const CategoryModel = model("Categories", CategorySchema);

// these array contains all categories subjects
// const Categorys: Category[] = [
//   new Category(`תקשורת`),
//   new Category(`תרומות`),
//   new Category(`ביטוחים`),
//   new Category(`חינוך`),
//   new Category(`תחבורה`),
//   new Category(`הלוואות`),
//   new Category(`דיור`),
//   new Category(`נופש`),
//   new Category(`הוצאות מזדמנות`),
// ];
