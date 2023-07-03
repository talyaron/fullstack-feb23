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
var products = [];
// from view to model: view-control-model
function handleAddProduct(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var image = ev.target.elements.image.value;
        var number = ev.target.elements.number.value;
        var newProduct = new Product(name, image, number);
        products.push(newProduct);
        renderAllProducts(products, document.querySelector("#rootProduct"));
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
            return "<div class=\"card\">\n                    <img src=\"" + product.image + "\">\n                    <form onsubmit=\"handleSetEditProduct(event)\" id=\"" + product.id + "\">\n                        <input type=\"text\" name=\"name\" value=\"" + product.name + "\">\n                        <input type=\"text\" name=\"phoneNumber\" value=\"" + product.number + "\">\n                        <br>\n                        <button onclick=\"handleDeleteProduct('" + product.id + "')\">Delete</button>\n                        <input type=\"submit\" value=\"SET\">\n                    </form>\n                </div>\n                ";
        }
        else {
            return "<div class=\"card\">\n        <img src=\"" + product.image + "\">\n        <p>" + product.name + "</p>\n        <p>" + product.number + "</p>\n        <button onclick=\"handleDeleteProduct('" + product.id + "')\">Delete</button>\n        <button onclick=\"handleEdit('" + product.id + "')\">Edit</button>\n    </div>\n";
        }
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
