const products = [];

function showForm() {
    document.forms["new-product-form"].style.display = "block";
}

function hideForm() {
    document.forms["new-product-form"].style.display = "none";
}

document.forms["new-product-form"].addEventListener('submit', function (event) {
    event.preventDefault();

    const productName = document.getElementById('title').value;
    const productDescription = document.getElementById('description').value;
    const productPrice = parseFloat(document.getElementById('price').value);
    const productDiscount = parseFloat(document.getElementById('discount').value);
    const productInStock = parseInt(document.getElementById('in-stock').value);
    const productBrand = document.getElementById('brand').value;
    const productCategory = document.getElementById('category').value;
    const productPicture = document.getElementById('picture').value;

    const product = {
        title: productName,
        description: productDescription,
        price: productPrice,
        discount: productDiscount,
        inStock: productInStock,
        brand: productBrand,
        category: productCategory,
        picture: productPicture
    };

    products.push(product);
    console.log(products);
    hideForm();
    document.forms["new-product-form"].reset();
});