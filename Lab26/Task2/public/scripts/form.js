function getProductFromForm() {
    const productTitle = document.getElementById('title').value;
    const productDescription = document.getElementById('description').value;
    const productPrice = parseFloat(document.getElementById('price').value);
    const productDiscount = parseFloat(document.getElementById('discount').value);
    const productInStock = parseInt(document.getElementById('in-stock').value);
    const productBrand = document.getElementById('brand').value;
    const productCategory = document.getElementById('category').value;
    const productImage = document.getElementById('picture').value;

    const product = {
        title: productTitle,
        description: productDescription,
        price: productPrice,
        discountPercentage: productDiscount,
        stock: productInStock,
        brand: productBrand,
        category: productCategory,
        thumbnail: productImage
    };

    return product;
}

function displayProduct(product) {
    document.getElementById('title').value = product.title;
    document.getElementById('description').value = product.description;
    document.getElementById('price').value = product.price;
    document.getElementById('discount').value = product.discountPercentage;
    document.getElementById('in-stock').value = product.stock;
    document.getElementById('brand').value = product.brand;
    document.getElementById('category').value = product.category;
    document.getElementById('picture').value = product.thumbnail;
}

function showForm() {
    document.getElementById("modal").style.display = "flex";
    document.forms["new-product-form"].reset();
}

function hideForm() {
    document.getElementById("modal").style.display = "none";

    var oldElement = document.forms["new-product-form"];
    var newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
}

function createProduct() {
    showForm();

    document.forms["new-product-form"].addEventListener('submit', function (event) {
        event.preventDefault();

        addProduct();
    });
}