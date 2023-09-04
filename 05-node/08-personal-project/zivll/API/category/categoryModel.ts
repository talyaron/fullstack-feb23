// these class is used to devide all expences into categories
class Category {
  categoryName: string;
  categoryId: number | void;
  constructor(categoryName: string) {
    this.categoryName = categoryName;
    this.categoryId = this.id();
  }
  id() {
    const getCategoriesFromLocalStorage =
      localStorage.getItem(`userCategories`);

    if (getCategoriesFromLocalStorage) {
      const catchedCategoriesFromLocalStorage = JSON.parse(
        getCategoriesFromLocalStorage
      );
      const categoryId = catchedCategoriesFromLocalStorage.find(
        (category) => category.categoryName === this.categoryName
      )?.categoryId;
      return categoryId;
    }

    const categoryId = Math.round(Math.random() * 1000000);
    return categoryId;
  }
}
// these array contains all categories subjects
const Categorys: Category[] = [
  new Category(`תקשורת`),
  new Category(`תרומות`),
  new Category(`ביטוחים`),
  new Category(`חינוך`),
  new Category(`תחבורה`),
  new Category(`הלוואות`),
  new Category(`דיור`),
  new Category(`נופש`),
  new Category(`הוצאות מזדמנות`),
];
