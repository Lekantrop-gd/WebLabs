var products = [];

document.addEventListener('DOMContentLoaded', refreshProducts());

async function fetchProducts() {
    document.getElementById('start-button').style.display = 'none';

    const response = await fetch('/product/list');
    const data = await response.json();

    localStorage.setItem('products', JSON.stringify(data));
    refreshProducts();
}

function refreshProducts() {
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'));

        displayProducts(products);
    }
    else {
        document.getElementById('start-button').style.display = 'block';
    }
}

function displayProducts(products) {
    var productContainer = document.getElementById('product-container');
    productContainer.innerHTML = "";

    products.forEach(function (product) {
        productContainer.appendChild(renderProductCard(product));
    });
}

function addProduct() {
    products.push(getProductFromForm());
    localStorage.setItem('products', JSON.stringify(products));

    refreshProducts();

    hideForm();
}

function editProduct(productId) {
    for (var x = 0; x < products.length; x++) {
        if (products[x].id == productId) {
            showForm();
            displayProduct(products[x]);

            const productId = x;

            document.forms["new-product-form"].addEventListener('submit', function (event) {
                event.preventDefault();

                updateProduct(productId);
            });
        }
    }
}

function updateProduct(product) {
    var updatedProduct = getProductFromForm();

    products[product].title = updatedProduct.title;
    products[product].description = updatedProduct.description;
    products[product].price = updatedProduct.price;
    products[product].discountPercentage = updatedProduct.discountPercentage;
    products[product].stock = updatedProduct.stock;
    products[product].brand = updatedProduct.brand;
    products[product].category = updatedProduct.category;
    products[product].thumbnail = updatedProduct.thumbnail;

    localStorage.setItem('products', JSON.stringify(products));

    refreshProducts();
    hideForm();
}

function deleteProduct(productId) {
    if (confirm("Are you sure you want to delete this product?") == false) {
        return;
    }

    for (var x = 0; x < products.length; x++) {
        if (products[x].id == productId) {
            products.splice(products.indexOf(products[x]), 1);
            localStorage.setItem('products', JSON.stringify(products));
            refreshProducts();
        }
    }
}