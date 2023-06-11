// idea: discount from by copun code.
// give spefic for copun spesific discount ("hapolim (5%)", "leumi (7%)", "mizrachi (3%)")
function discountCalculator(copunCode, sum) {
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
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
console.log(discountCalculator("mizrachi4", 100));
