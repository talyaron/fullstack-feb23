class Tables {
  constructor(public tableNumber: number, public amuntOfGuests: number) {}
}
class Order {
  constructor(
    public orderNumber: number,
    public dishesArray: string[],
    sum: Function
  ) {}
  sum(dishesArray: [], dishes: Dishes[]): number | undefined {
    try {
      let sum = 0;
      dishesArray.forEach((dish) => {
        sum += dishes.dishPrice;
      });
      return sum;
    } catch (error) {
      console.error(error);
      return;
    }
  }
}
class Dishes {
  constructor(
    public dishName: string,
    public dishPrice: number,
    public dishDescription: string,
    public dishImage: string
  ) {}
}
