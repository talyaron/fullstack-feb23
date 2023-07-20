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
<<<<<<< HEAD
    new Product("Ampoule Anti-flea & Tick", 5, "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS7ER1AcRiMl6jrJDpnzzxlipIEYWPDK6ywuVhv9bLcBTlNiSi7ZgryJO6yd-_0_cyXhioq_tCVyNKi616y0dxBwgyNfKsRZO11tjigZPd1ND_J1FPPP3fUNA&usqp=CAc", 179),
    new Product("seringe", 2, "https://cdn.pixabay.com/photo/2023/06/11/19/09/fruit-8056663_1280.jpg", 10),
    new Product("Anti-flea & Tick tablets", 11, "https://www.gag-lachayot.co.il/wp-content/uploads/2020/12/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%9B%D7%95%D7%9C%D7%9C%D7%AA-%D7%A1%D7%98%D7%A8%D7%95%D7%A0%D7%92%D7%94%D7%95%D7%9C%D7%93-%D7%97%D7%AA%D7%95%D7%9C.jpg", 189),
    new Product("Ear & eye drops", 11, "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_gi6ZjmjE7NZQ4rig15PDbSPwy-oXu6tykhosqgx10dKbBJkNw6skcYje9p6zXtGxY8YWNyJVMcnM90I2_Z1I42bp7rr-xrv67OKhUqfIiEWV000cSp07&usqp=CAc", 38),
=======
    new Product("seringe", 2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dhOyNhKG8M8QceV3CSYEODWFfZyxNBb42A&usqp=CAU", 10),
    new Product("Anti-flea & Tick tablets", 11, "https://www.gag-lachayot.co.il/wp-content/uploads/2020/12/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%9B%D7%95%D7%9C%D7%9C%D7%AA-%D7%A1%D7%98%D7%A8%D7%95%D7%A0%D7%92%D7%94%D7%95%D7%9C%D7%93-%D7%97%D7%AA%D7%95%D7%9C.jpg", 189),
    new Product("Ear & eye drops", 11, "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_gi6ZjmjE7NZQ4rig15PDbSPwy-oXu6tykhosqgx10dKbBJkNw6skcYje9p6zXtGxY8YWNyJVMcnM90I2_Z1I42bp7rr-xrv67OKhUqfIiEWV000cSp07&usqp=CAc", 38),
    new Product("Medicine dispenser", 5, "data:image/jpeg;base64,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", 12),
    new Product("Anti-anxiety 45 tablets", 20, "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/eur/eur02024/v/32.jpg", 100),
    new Product("PROTECTION", 15, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAiQzIT3G-b0z6Bsr1bVkSMHlOBM4lKxw70MiRkres5DGVNiigWbRnWcNNfRpEVu-mXyY&usqp=CAU", 65),
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
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
<<<<<<< HEAD
                return new Product(pro.name, pro.amount, pro.imgSrc);
=======
                return new Product(pro.name, pro.amount, pro.imgSrc, pro.price);
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
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
<<<<<<< HEAD
            return "\n      <div class=\"productItem " + product.id + "\" name=\"" + product.name + "\">\n      <button id=\"deleteBtn\" onclick=\"deleteProduct('" + product.id + "')\" >\n      <span class=\"material-symbols-outlined\"> delete </span></button>\n      <button id=\"editBtn\" onclick=\"editProduct(event, '" + product.id + "')\"> <span class=\"material-symbols-outlined\"> edit </span></button>\n      <img src=\"" + product.imgSrc + "\" alt=\"\">\n      <h3 id=\"productName\">" + product.name + "</h3>\n      <button onclick=\"addToProduct('" + product.id + "')\"> + </button>\n      <h4 id=\"productAmount\">" + product.amount + "</h4>\n      <button onclick=\"reduceFromProduct('" + product.id + "')\"> - </button>\n      </div>\n      ";
        else
            return "\n      <div class=\"productItem\" name=\"" + product.name + "\">\n      <button id=\"deleteBtn\" onclick=\"deleteProduct('" + product.id + "')\" > <span class=\"material-symbols-outlined\"> delete </span></button>\n      <button id=\"editBtn\" onclick=\"editProduct(event, '" + product.id + "')\"> <span class=\"material-symbols-outlined\"> edit </span></button>\n  \n      <img src=\"" + product.imgSrc + "\" alt=\"\">\n      <h3 id=\"productName\">" + product.name + "</h3>\n      <button onclick=\"addToProduct('" + product.id + "')\"> + </button>\n      <input type=\"number\" value = " + product.amount + " id=\"editProductAmount\"></input>\n      <button onclick=\"reduceFromProduct('" + product.id + "')\"> - </button>\n      </div>\n      ";
=======
            return "\n      <div class=\"productItem " + product.id + "\" name=\"" + product.name + "\">\n      <button id=\"deleteBtn\" onclick=\"deleteProduct('" + product.id + "')\" >\n      <span class=\"material-symbols-outlined\"> delete </span></button>\n      <button id=\"editBtn\" onclick=\"editProduct(event, '" + product.id + "')\"> <span class=\"material-symbols-outlined\"> edit </span></button>\n      <img src=\"" + product.imgSrc + "\" alt=\"\">\n      <h3 id=\"productName\">" + product.name + "<br>" + product.price + "\u20AA per unit</h3>\n      <button onclick=\"addToProduct('" + product.id + "')\"> + </button>\n      <h4 id=\"productAmount\">" + product.amount + "</h4>\n      <button onclick=\"reduceFromProduct('" + product.id + "')\"> - </button>\n      </div>\n      ";
        else
            return "\n      <div class=\"productItem\" name=\"" + product.name + "\">\n      <button id=\"deleteBtn\" onclick=\"deleteProduct('" + product.id + "')\" > <span class=\"material-symbols-outlined\"> delete </span></button>\n      <button id=\"editBtn\" onclick=\"editProduct(event, '" + product.id + "')\"> <span class=\"material-symbols-outlined\"> edit </span></button>\n  \n      <img src=\"" + product.imgSrc + "\" alt=\"\">\n      <h3 id=\"productName\">" + product.name + "<br>" + product.price + "\u20AA</h3>\n      <button onclick=\"addToProduct('" + product.id + "')\"> + </button>\n      <input type=\"number\" value = " + product.amount + " id=\"editProductAmount\"></input>\n      \n      <button onclick=\"reduceFromProduct('" + product.id + "')\"> - </button>\n      </div>\n      ";
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
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
<<<<<<< HEAD
    root.innerHTML = "\n      <form id=\"addProductForm\" onsubmit=\"handelNewProduct(event)\">\n      <label for=\"newName\"> name of product: </label>\n      <input type=\"text\" id=\"newName\" required><br>\n      <label for=\"newImgSrc\"> Image source of product: </label>\n      <input type=\"url\" id=\"newImgSrc\" required><br>\n      <label for=\"newAmount\"> Image source of product: </label>\n      <input type=\"number\" id=\"newAmount\" value=\"0\" min=\"0\"><br>\n      <button type=\"submit\">ADD</button>\n      </form>";
=======
    root.innerHTML = "\n      <form id=\"addProductForm\" onsubmit=\"handelNewProduct(event)\">\n      <label for=\"newName\"> name of product: </label>\n      <input type=\"text\" id=\"newName\" required><br>\n      <label for=\"newImgSrc\"> Image source of product: </label>\n      <input type=\"url\" id=\"newImgSrc\" required><br>\n      <label for=\"newAmount\"> Image address: </label>\n      <input type=\"number\" id=\"newAmount\" value=\"0\" min=\"0\"><br>\n      <label for=\"newPrice\"> Price: </label><br>\n      <input type=\"text\" id=\"newPrice\" required>\n      <br><button type=\"submit\">ADD</button>\n      </form>";
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
}
function handelNewProduct(ev) {
    ev.preventDefault();
    var newName = ev.target.newName.value;
    var newAmount = ev.target.newAmount.value;
    var newImgSrc = ev.target.newImgSrc.value;
<<<<<<< HEAD
    products = getProductsFromLocalStorage();
    products.push(new Product(newName, newAmount, newImgSrc));
    renderProducts();
=======
    var newPrice = ev.target.newPrice.value;
    products = getProductsFromLocalStorage();
    products.push(new Product(newName, newAmount, newImgSrc, newPrice));
    renderProducts();
    updateInLocalStorage();
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
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
