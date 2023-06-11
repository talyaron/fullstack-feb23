// idea: discount from by copun code.
// give spefic for copun spesific discount ("hapolim (5%)", "leumi (7%)", "mizrachi (3%)")
//VIEW
//enter copun
//MODEL
//copun
var CopunNew = /** @class */ (function () {
    function CopunNew(name, discount) {
        this.discount = discount;
        this.name = name;
    }
    // getStaffDisount(staffDiscount: number) {
    //   //
    // }
    CopunNew.prototype.getLowerCasesCopunNew = function () {
        return this.name.toLowerCase();
    };
    return CopunNew;
}());
var CopunNews = [];
CopunNews.push(new CopunNew("Leumi", 5));
CopunNews.push(new CopunNew("Mizrachi", 3));
CopunNews.push(new CopunNew("Poalim", 7));
CopunNews.push(new CopunNew("binleumi", 12));
console.log(CopunNews);
function discountCalculator(copunCode, sum, copuns) {
    try {
        // calculate accourding to copun
        //find copun
        var copun = copuns.find(function (copun) { return copun.getLowerCasesCopunNew() === copunCode.toLowerCase(); });
        //return sum after discount, and discount percentage
        if (!copun || !copun.discount) {
            return { price: sum, discount: "0%" };
        }
        return { price: sum * (1 - copun.discount * .01), discount: copun.discount + "%" };
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
console.log(discountCalculator("binleumi", 100, CopunNews));
