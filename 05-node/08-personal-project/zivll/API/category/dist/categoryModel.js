// these class is used to devide all expences into categories
var Category = /** @class */ (function () {
    function Category(categoryName) {
        this.categoryName = categoryName;
        this.categoryId = this.id();
    }
    Category.prototype.id = function () {
        var _this = this;
        var _a;
        var getCategoriesFromLocalStorage = localStorage.getItem("userCategories");
        if (getCategoriesFromLocalStorage) {
            var catchedCategoriesFromLocalStorage = JSON.parse(getCategoriesFromLocalStorage);
            var categoryId_1 = (_a = catchedCategoriesFromLocalStorage.find(function (category) { return category.categoryName === _this.categoryName; })) === null || _a === void 0 ? void 0 : _a.categoryId;
            return categoryId_1;
        }
        var categoryId = Math.round(Math.random() * 1000000);
        return categoryId;
    };
    return Category;
}());
// these array contains all categories subjects
var Categorys = [
    new Category("\u05EA\u05E7\u05E9\u05D5\u05E8\u05EA"),
    new Category("\u05EA\u05E8\u05D5\u05DE\u05D5\u05EA"),
    new Category("\u05D1\u05D9\u05D8\u05D5\u05D7\u05D9\u05DD"),
    new Category("\u05D7\u05D9\u05E0\u05D5\u05DA"),
    new Category("\u05EA\u05D7\u05D1\u05D5\u05E8\u05D4"),
    new Category("\u05D4\u05DC\u05D5\u05D5\u05D0\u05D5\u05EA"),
    new Category("\u05D3\u05D9\u05D5\u05E8"),
    new Category("\u05E0\u05D5\u05E4\u05E9"),
    new Category("\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05DE\u05D6\u05D3\u05DE\u05E0\u05D5\u05EA"),
];