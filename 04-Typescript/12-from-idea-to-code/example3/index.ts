// idea: discount from by copun code.
// give spefic for copun spesific discount ("hapolim (5%)", "leumi (7%)", "mizrachi (3%)")


//VIEW
//enter copun

//MODEL
//copun
class Copun{
  discount:number;
  name:string;
  constructor( name:string,discount:number){
    this.discount = discount;
    this.name = name
  }
  getStaffDisount(staffDiscount:number){
    //
  }
}

const copuns:Copun[]=[];
copuns.push(new Copun("Leumi",5));
copuns.push(new Copun("Mizrachi",3));
copuns.push(new Copun("Poalim",7));


console.log(copuns);



//CONTROLER
//input text (copun code), original price.

interface DiscountCalculator {
  price: number;
  discount: string;
}

function discountCalculator(
  copunCode: string,
  sum: number
): DiscountCalculator | false {
  try {
    // calculate accourding to copun
  
    switch (copunCode) {
      case "leumi":
        return { price: sum * (1 - 0.07), discount: "7%" };
      case "hapolim":
        return { price: sum * (1 - 0.05), discount: "5%" };
      case "mizrachi":
        return { price: sum * (1 - 0.03), discount: "3%" };
      default:
        return { price: sum, discount: "0%" };
    }
    //?
    //return sum after discount, and discount percentage
  } catch (error) {
    console.error(error);
    return false;
  }
}

console.log(discountCalculator("mizrachi4", 100));
