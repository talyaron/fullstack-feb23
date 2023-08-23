import { Product } from "../products/productsModel";

export class Order {
  id : string;
  constructor(public company: string, public phone: string, public totalPrice: number, public cart: Product[]) {
    this.id = Math.random().toString();
  }
}