var Product = /** @class */ (function () {
    function Product(name, amount, imgSrc, id) {
        if (amount === void 0) { amount = 0; }
        if (id === void 0) { id = createId(); }
        this.name = name;
        this.amount = amount;
        this.imgSrc = imgSrc;
        this.id = id;
    }
    return Product;
}());
function createId() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
}
var firstProducts = [
    new Product("carrot", 6, "https://cdn.pixabay.com/photo/2016/11/23/00/22/carrots-1851424_1280.jpg"),
    new Product("tomato", 12, "https://cdn.pixabay.com/photo/2022/09/05/09/50/tomatoes-7433786_1280.jpg"),
    new Product("stawberry", 4, "https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_1280.jpg"),
    new Product("pineapplw", 2, "https://cdn.pixabay.com/photo/2023/06/11/19/09/fruit-8056663_1280.jpg"),
    new Product("cucumber", 11, "https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269_1280.jpg"),
    new Product("lemon", 11, "https://cdn.pixabay.com/photo/2017/02/05/12/31/lemons-2039830_1280.jpg"),
    new Product("lettuce", 1, "https://cdn.pixabay.com/photo/2015/05/17/14/29/salad-771056_1280.jpg"),
    new Product("celery", 2, "https://cdn.pixabay.com/photo/2015/07/31/12/07/soup-greens-869075_1280.jpg"),
    new Product("mushroom", 1, "https://media.istockphoto.com/id/1290604185/photo/shiitake-mushrooms-set-on-black-background-side-view-space-for-text.jpg?s=612x612&w=0&k=20&c=wR8fSeaARySoHGD2rdm0AoZRtS8rjZdKzXQSrEm-QyI="),
    new Product("avocado", 5, "https://cdn.pixabay.com/photo/2015/09/09/20/17/avocado-933060_1280.jpg"),
    new Product("apple", 7, "https://cdn.pixabay.com/photo/2016/08/14/11/56/apples-1592588_1280.jpg"),
    new Product("orange", 9, "https://cdn.pixabay.com/photo/2016/03/29/01/06/cilantro-1287301_1280.jpg"),
];
var products = getProductsFromLocalStorage();
function getProductsFromLocalStorage() {
    try {
        var productsString = localStorage.getItem("products");
        if (!productsString) {
            localStorage.setItem("products", JSON.stringify(firstProducts));
            return firstProducts;
        }
        else {
            var productsArray = JSON.parse(productsString);
            var products_1 = productsArray.map(function (pro) {
                return new Product(pro.name, pro.amount, pro.imgSrc);
            });
            return products_1;
        }
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function renderProducts() {
    var html = products
        .map(function (product) { return "\n    <div class=\"productItem\" name=\"" + product.name + "\">\n    <img src=\"" + product.imgSrc + "\" alt=\"\">\n    <h3 id=\"productName\">" + product.name + "</h3>\n    <button onclick=\"addToProduct('" + product.id + "')\"> + </button>\n    <h4 id=\"productAmount\">" + product.amount + "</h4>\n    <button onclick=\"reduceFromProduct('" + product.id + "')\"> - </button>\n    </div>\n    "; })
        .join(" ");
    var root = document.querySelector("#productGallery");
    root.innerHTML = html;
}
function addToProduct(productId) {
    var chosenPro = products.find(function (pro) { return pro.id === productId; });
    if (chosenPro) {
        chosenPro.amount++;
        renderProducts();
        updateInLocalStorage();
    }
}
function reduceFromProduct(productId) {
    var chosenPro = products.find(function (pro) { return pro.id === productId; });
    if (chosenPro && chosenPro.amount > 0) {
        chosenPro.amount--;
        renderProducts();
        updateInLocalStorage();
    }
}
function updateInLocalStorage() {
    localStorage.setItem("products", JSON.stringify(products));
}
