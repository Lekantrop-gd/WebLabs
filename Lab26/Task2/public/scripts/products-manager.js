var products = [];

document.addEventListener('DOMContentLoaded', refreshProducts());

function refreshProducts() {
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'));

        displayProducts(products);
    }
    else {
        document.getElementById('start-button').style.display = 'block';
    }
}

async function fetchProducts() {
    document.getElementById('start-button').style.display = 'none';
    
    const response = await fetch('https://dummyjson.com/products?limit=100&skip=0');
    const data = await response.json();
    
    localStorage.setItem('products', JSON.stringify(data.products));
    refreshProducts();
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

function editProduct(productTitle) {
    for (var x = 0; x < products.length; x++) {
        if (products[x].title == productTitle) {
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

function deleteProduct(productTitle) {
    if (confirm("Are you sure you want to delete " + productTitle + "?") == false) {
        return;
    }

    for (var x = 0; x < products.length; x++) {
        if (products[x].title == productTitle) {
            products.splice(products.indexOf(products[x]), 1);
            localStorage.setItem('products', JSON.stringify(products));
            refreshProducts();
        }
    }
}