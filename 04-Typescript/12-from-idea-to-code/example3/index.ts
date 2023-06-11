// idea: discount from by copun code.
// give spefic for copun spesific discount ("hapolim (5%)", "leumi (7%)", "mizrachi (3%)")

//VIEW
//enter copun

//MODEL
//copun
class CopunNew {
  discount: number;
  name: string;
  constructor(name: string, discount: number) {
    this.discount = discount;
    this.name = name;
  }
  // getStaffDisount(staffDiscount: number) {
  //   //
  // }

  getLowerCasesCopunNew(){
    return this.name.toLowerCase();
  }
}

const CopunNews: CopunNew[] = [];
CopunNews.push(new CopunNew("Leumi", 5));
CopunNews.push(new CopunNew("Mizrachi", 3));
CopunNews.push(new CopunNew("Poalim", 7));
CopunNews.push(new CopunNew("binleumi", 12));

console.log(CopunNews);

//CONTROLER
//input text (copun code), original price.

interface DiscountCalculator {
  price: number;
  discount: string;
}

function discountCalculator(copunCode: string, sum: number, copuns: CopunNew[]) {
  try {
    // calculate accourding to copun

    //find copun
    const copun = copuns.find((copun) => copun.getLowerCasesCopunNew() === copunCode.toLowerCase());
    
     //return sum after discount, and discount percentage
    if(!copun || !copun.discount){
      return { price: sum, discount: "0%" };
    } 

    return { price: sum * (1 - copun.discount*.01), discount: `${copun.discount}%` };
   
   
  } catch (error) {
    console.error(error);
    return false;
  }
}

console.log(discountCalculator("binleumi", 100, CopunNews));
