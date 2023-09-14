// these class is used to devide all expences into categories
class Category {
    constructor(categoryName) {
        this.categoryName = categoryName;
        this.categoryId = this.id();
    }
    id() {
        var _a;
        const getCategoriesFromLocalStorage = localStorage.getItem(`userCategories`);
        if (getCategoriesFromLocalStorage) {
            const catchedCategoriesFromLocalStorage = JSON.parse(getCategoriesFromLocalStorage);
            const categoryId = (_a = catchedCategoriesFromLocalStorage.find((category) => category.categoryName === this.categoryName)) === null || _a === void 0 ? void 0 : _a.categoryId;
            return categoryId;
        }
        const categoryId = Math.round(Math.random() * 1000000);
        return categoryId;
    }
}
// these array contains all categories subjects
const Categorys = [
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
//# sourceMappingURL=categoryModel.js.map