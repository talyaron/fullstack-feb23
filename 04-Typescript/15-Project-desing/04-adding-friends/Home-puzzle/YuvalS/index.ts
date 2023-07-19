//model
class Product {
    id: string;
    isEdit: boolean = false;
    constructor(public name: string, public image: string, public number: number, id?: string | null) {
        if (id) {
            this.id = id;
        } else {
            this.id = `id-${new Date().getTime()}-${Math.random()}`;
        }
    }

    setEdit(set: boolean) {
        this.isEdit = set;
    }

}

const products: Product[] = [];


// from view to model: view-control-model

function handleAddProduct(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const image = ev.target.elements.image.value;
        const number = ev.target.elements.number.value;

        const newProduct = new Product(name, image, number);
        products.push(newProduct);
        renderAllProducts(products, document.querySelector("#rootProduct"))

        //save to localStorage

        localStorage.setItem("products", JSON.stringify(products))
        ev.target.reset();

    } catch (error) {
        console.error(error)
    }
}

//render list of friends
//model -> controler --> view

function renderAllProducts(products: Product[], htmlElement: HTMLElement | null) {
    try {
        if (!htmlElement) throw new Error("No element");
        const html = products.map(product => renderProductCard(product)).join(' ')

        htmlElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}


function renderProductCard(product: Product) {
    try {
        if (product.isEdit) {
            return `<div class="card">
                    <img src="${product.image}">
                    <form onsubmit="handleSetEditProduct(event)" id="${product.id}">
                        <input type="text" name="name" value="${product.name}">
                        <input type="text" name="url" value="${product.image}">
                        <input type="text" name="number" value="${product.number}">
                        <br>
                        <button onclick="handleDeleteProduct('${product.id}')">Delete</button>
                        <input type="submit" value="SET">
                    </form>
                </div>
                `
        } else {
            return `<div class="card">
        <img src="${product.image}">
        <p>${product.name}</p>
        <p>${product.number}</p>
        <button onclick="handleDeleteProduct('${product.id}')">Delete</button>
        <button onclick="handleEdit('${product.id}')">Edit</button>
    </div>
`
        }
<<<<<<< HEAD
=======
        
>>>>>>> 739c24e868222afd020880edb0b95cbe98262c5d


    } catch (error) {
        console.error(error);
        return ''
    }
}
<<<<<<< HEAD
=======

>>>>>>> 739c24e868222afd020880edb0b95cbe98262c5d
