var Product = /** @class */ (function () {
    function Product(name, amount, imgSrc, price, id, isEdit) {
        if (amount === void 0) { amount = 0; }
        if (id === void 0) { id = createId(); }
        if (isEdit === void 0) { isEdit = false; }
        this.name = name;
        this.amount = amount;
        this.imgSrc = imgSrc;
        this.price = price;
        this.id = id;
        this.isEdit = isEdit;
    }
    Product.prototype.setEdit = function (set) {
        this.isEdit = set;
    };
    return Product;
}());
function createId() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
}
var firstProducts = [
    new Product("Medical food can", 6, "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTAyzAhgyuBcL3IL0VlfGbcEesqxNKcqFoSWISCb2jEdiTBKBpKYPU2Eh3EvdIITjim8fqfx8m2N79dyQXIp8gTPeS0S0sQfPLs2dwfvtwJU5WAD4US89Fd&usqp=CAc", 17),
    new Product("Ampoule Anti-flea & Tick", 5, "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS7ER1AcRiMl6jrJDpnzzxlipIEYWPDK6ywuVhv9bLcBTlNiSi7ZgryJO6yd-_0_cyXhioq_tCVyNKi616y0dxBwgyNfKsRZO11tjigZPd1ND_J1FPPP3fUNA&usqp=CAc", 179),
    new Product("Ampoule Anti-flea & Tick", 5, "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS7ER1AcRiMl6jrJDpnzzxlipIEYWPDK6ywuVhv9bLcBTlNiSi7ZgryJO6yd-_0_cyXhioq_tCVyNKi616y0dxBwgyNfKsRZO11tjigZPd1ND_J1FPPP3fUNA&usqp=CAc", 179),
    new Product("seringe", 2, "https://cdn.pixabay.com/photo/2023/06/11/19/09/fruit-8056663_1280.jpg", 10),
    new Product("Anti-flea & Tick tablets", 11, "https://www.gag-lachayot.co.il/wp-content/uploads/2020/12/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%9B%D7%95%D7%9C%D7%9C%D7%AA-%D7%A1%D7%98%D7%A8%D7%95%D7%A0%D7%92%D7%94%D7%95%D7%9C%D7%93-%D7%97%D7%AA%D7%95%D7%9C.jpg", 189),
    new Product("Ear & eye drops", 11, "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_gi6ZjmjE7NZQ4rig15PDbSPwy-oXu6tykhosqgx10dKbBJkNw6skcYje9p6zXtGxY8YWNyJVMcnM90I2_Z1I42bp7rr-xrv67OKhUqfIiEWV000cSp07&usqp=CAc", 38),
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
        .map(function (product) {
        if (!product.isEdit)
            return "\n      <div class=\"productItem " + product.id + "\" name=\"" + product.name + "\">\n      <button id=\"deleteBtn\" onclick=\"deleteProduct('" + product.id + "')\" >\n      <span class=\"material-symbols-outlined\"> delete </span></button>\n      <button id=\"editBtn\" onclick=\"editProduct(event, '" + product.id + "')\"> <span class=\"material-symbols-outlined\"> edit </span></button>\n      <img src=\"" + product.imgSrc + "\" alt=\"\">\n      <h3 id=\"productName\">" + product.name + "</h3>\n      <button onclick=\"addToProduct('" + product.id + "')\"> + </button>\n      <h4 id=\"productAmount\">" + product.amount + "</h4>\n      <button onclick=\"reduceFromProduct('" + product.id + "')\"> - </button>\n      </div>\n      ";
        else
            return "\n      <div class=\"productItem\" name=\"" + product.name + "\">\n      <button id=\"deleteBtn\" onclick=\"deleteProduct('" + product.id + "')\" > <span class=\"material-symbols-outlined\"> delete </span></button>\n      <button id=\"editBtn\" onclick=\"editProduct(event, '" + product.id + "')\"> <span class=\"material-symbols-outlined\"> edit </span></button>\n  \n      <img src=\"" + product.imgSrc + "\" alt=\"\">\n      <h3 id=\"productName\">" + product.name + "</h3>\n      <button onclick=\"addToProduct('" + product.id + "')\"> + </button>\n      <input type=\"number\" value = " + product.amount + " id=\"editProductAmount\"></input>\n      <button onclick=\"reduceFromProduct('" + product.id + "')\"> - </button>\n      </div>\n      ";
    })
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
function deleteProduct(productId) {
    var indexToRemoved = products.findIndex(function (pro) { return pro.id === productId; });
    products.splice(indexToRemoved, 1);
    updateInLocalStorage();
    renderProducts();
}
function editProduct(event, productId) {
    try {
        var productToEdit = products.find(function (pro) { return pro.id === productId; });
        if (!productToEdit)
            throw new Error("couldn't fined productToEdit ");
        if (productToEdit.isEdit == true) {
            var amountValue = event.target.parentNode.parentNode.querySelector("input").value;
            productToEdit.amount = amountValue;
            productToEdit.setEdit(false);
            renderProducts();
        }
        else {
            productToEdit.setEdit(true);
            renderProducts();
        }
        updateInLocalStorage();
        renderProducts();
    }
    catch (error) {
        console.error(error);
    }
}
function updateInLocalStorage() {
    localStorage.setItem("products", JSON.stringify(products));
}
function renderAddProductForm() {
    var root = document.querySelector(".addProductForm");
    root.classList.toggle("active");
    if (root.classList.contains("active")) {
        var btn = document.querySelector("#addProductBtn");
        btn.innerHTML = " x ";
    }
    else {
        var btn = document.querySelector("#addProductBtn");
        btn.innerHTML = "+";
    }
    root.innerHTML = "\n      <form id=\"addProductForm\" onsubmit=\"handelNewProduct(event)\">\n      <label for=\"newName\"> name of product: </label>\n      <input type=\"text\" id=\"newName\" required><br>\n      <label for=\"newImgSrc\"> Image source of product: </label>\n      <input type=\"url\" id=\"newImgSrc\" required><br>\n      <label for=\"newAmount\"> Image source of product: </label>\n      <input type=\"number\" id=\"newAmount\" value=\"0\" min=\"0\"><br>\n      <button type=\"submit\">ADD</button>\n      </form>";
}
function handelNewProduct(ev) {
    ev.preventDefault();
    var newName = ev.target.newName.value;
    var newAmount = ev.target.newAmount.value;
    var newImgSrc = ev.target.newImgSrc.value;
    products = getProductsFromLocalStorage();
    products.push(new Product(newName, newAmount, newImgSrc));
    renderProducts();
    var root = document.querySelector(".addProductForm");
    root.innerHTML = "";
    root.classList.toggle("active");
    var btn = document.querySelector("#addProductBtn");
    btn.innerHTML = "+";
}
function searchProducts(event) {
    var textToSearch = event.target.value.toLowerCase();
    products.forEach(function (product) {
        var element = document.querySelector("[name= \"" + product.name + "\" ]");
        if (!product.name.toLowerCase().includes(textToSearch))
            element.classList.add("isntFound");
        else
            element.classList.remove("isntFound");
    });
}
