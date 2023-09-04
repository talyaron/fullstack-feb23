// this class used to create and define expence entitie
class Expence {
  expenseId: string;
  constructor(
    public name: string,
    public category: string | undefined,
    public categoryId: string,
    public amount: number
  ) {
    this.expenseId = `id-${this.id()}`;
  }
  id() {
    const expenseId = Math.round(Math.random() * 1000000);
    return expenseId;
    // const categoryId = userCategories.find(
    //   (category) => category.categoryName === this.category
    // )?.categoryId;
    // return categoryId;

    // delete() {}
  }
}
//   // these array contains all user expences
//   const expences: Expence[] = [];
