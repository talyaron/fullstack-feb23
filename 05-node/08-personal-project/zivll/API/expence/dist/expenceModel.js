// this class used to create and define expence entitie
var Expence = /** @class */ (function () {
    function Expence(name, category, categoryId, amount) {
        this.name = name;
        this.category = category;
        this.categoryId = categoryId;
        this.amount = amount;
        this.expenseId = "id-" + this.id();
    }
    Expence.prototype.id = function () {
        var expenseId = Math.round(Math.random() * 1000000);
        return expenseId;
        // const categoryId = userCategories.find(
        //   (category) => category.categoryName === this.category
        // )?.categoryId;
        // return categoryId;
        // delete() {}
    };
    return Expence;
}());
//   // these array contains all user expences
//   const expences: Expence[] = [];
