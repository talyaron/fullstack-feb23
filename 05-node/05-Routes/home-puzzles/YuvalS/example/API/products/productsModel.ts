export class Product {
    title: string;
    price: number;
    imgUrl: string;
    id: string;
    constructor({ title, price, imgUrl }: {title:string, price:number, imgUrl:string}) {
      this.title = title;
      this.price = price;
      this.imgUrl = imgUrl;
      this.id = Math.random().toString();
    }
  };

  //how to creat new instance
//   const prd = new Product({title:"hi", price:5, imgUrl:"dgdfg"})