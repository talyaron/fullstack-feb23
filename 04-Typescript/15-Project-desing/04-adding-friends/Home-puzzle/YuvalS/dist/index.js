//model
var Product = /** @class */ (function () {
    function Product(name, image, number, id) {
        this.name = name;
        this.image = image;
        this.number = number;
        this.isEdit = false;
        if (id) {
            this.id = id;
        }
        else {
            this.id = "id-" + new Date().getTime() + "-" + Math.random();
        }
    }
    Product.prototype.setEdit = function (set) {
        this.isEdit = set;
    };
    return Product;
}());
<<<<<<< HEAD
var products = [];
=======
var products = getProductsFromStorage();
renderAllProducts(products, document.querySelector("#rootProducts"));
function getProductsFromStorage() {
    try {
        //get producta from locastorage (string)
        var producstString = localStorage.getItem("products");
        if (!producstString)
            return [];
        //convert string to array of objects
        var productsArray = JSON.parse(producstString);
        //convert array of objects to array of product
        var products_1 = productsArray.map(function (product) {
            return new Product(product.name, product.image, product.number, product.id);
        });
        return products_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
// from view to model: view-control-model
function handleAddProduct(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var image = ev.target.elements.image.value;
        var number = ev.target.elements.number.value;
        var newProduct = new Product(name, image, number);
        products.push(newProduct);
<<<<<<< HEAD
        renderAllProducts(products, document.querySelector("#rootProduct"));
=======
        renderAllProducts(products, document.querySelector("#rootProducts"));
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
        //save to localStorage
        localStorage.setItem("products", JSON.stringify(products));
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
//render list of friends
//model -> controler --> view
function renderAllProducts(products, htmlElement) {
    try {
        if (!htmlElement)
            throw new Error("No element");
        var html = products.map(function (product) { return renderProductCard(product); }).join(' ');
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderProductCard(product) {
    try {
        if (product.isEdit) {
<<<<<<< HEAD
            return "<div class=\"card\">\n                    <img src=\"" + product.image + "\">\n                    <form onsubmit=\"handleSetEditProduct(event)\" id=\"" + product.id + "\">\n                        <input type=\"text\" name=\"name\" value=\"" + product.name + "\">\n                        <input type=\"text\" name=\"url\" value=\"" + product.image + "\">\n                        <input type=\"text\" name=\"number\" value=\"" + product.number + "\">\n                        <br>\n                        <button onclick=\"handleDeleteProduct('" + product.id + "')\">Delete</button>\n                        <input type=\"submit\" value=\"SET\">\n                    </form>\n                </div>\n                ";
        }
        else {
            return "<div class=\"card\">\n        <img src=\"" + product.image + "\">\n        <p>" + product.name + "</p>\n        <p>" + product.number + "</p>\n        <button onclick=\"handleDeleteProduct('" + product.id + "')\">Delete</button>\n        <button onclick=\"handleEdit('" + product.id + "')\">Edit</button>\n    </div>\n";
=======
            return "<div class=\"card\">\n                    <img src=\"" + product.image + "\">\n                    <form onsubmit=\"handleSetEditProduct(event)\" id=\"" + product.id + "\">\n                        <input type=\"text\" name=\"name\" value=\"" + product.name + "\">\n                        <input type=\"url\" name=\"image\" value=\"" + product.image + "\">\n                        <input type=\"number\" name=\"number\" value=\"" + product.number + "\">\n                        <br>\n                        <button onclick=\"handleDeleteProduct('" + product.id + "')\">Delete</button>\n                        <input type=\"submit\" value=\"SET\">\n                    </form>\n                </div>\n                ";
        }
        else {
            return "<div class=\"card\">\n        <img src=\"" + product.image + "\">\n        <p>" + product.name + "</p>\n        <p>" + product.number + "</p>\n        <button onclick=\"handleDeleteProduct('" + product.id + "')\">Delete</button>\n        <button onclick=\"handle_Edit('" + product.id + "')\">Edit</button>\n    </div>\n";
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
        }
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
<<<<<<< HEAD
=======
//delete
function handleDeleteProduct(productId) {
    try {
        var index = products.findIndex(function (product) { return product.id === productId; });
        if (index === -1)
            throw new Error("Could not find product");
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        renderAllProducts(products, document.querySelector("#rootProducts"));
    }
    catch (error) {
        console.error(error);
    }
}
// enable editing
function handle_Edit(productId) {
    try {
        var product = products.find(function (product) { return product.id === productId; });
        if (!product)
            throw new Error("couldnt find product");
        product.setEdit(true);
        renderAllProducts(products, document.querySelector("#rootProducts"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleSetEditProduct(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var image = ev.target.image.value;
        var number = ev.target.number.value;
        var productId_1 = ev.target.id;
        var product = products.find(function (product) { return product.id === productId_1; });
        if (!product)
            throw new Error("couldnt find product");
        product.name = name;
        product.image = image;
        product.number = number;
        product.setEdit(false);
        console.log(products);
        localStorage.setItem("products", JSON.stringify(products));
        renderAllProducts(products, document.querySelector("#rootProducts"));
    }
    catch (error) {
        console.error(error);
    }
}
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
