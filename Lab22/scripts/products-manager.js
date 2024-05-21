var products = [];

document.addEventListener('DOMContentLoaded', refreshProducts());

function refreshProducts() {
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'));

        var productContainer = document.getElementById('product-container');
        productContainer.innerHTML = "";

        products.forEach(function (product) {
            productContainer.appendChild(renderProductCard(product));
        });
    }
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

            document.forms["new-product-form"].addEventListener('submit', function(event) {
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
    products[product].discount = updatedProduct.discount;
    products[product].inStock = updatedProduct.inStock;
    products[product].brand = updatedProduct.brand;
    products[product].category = updatedProduct.category;
    products[product].picture = updatedProduct.picture;
    
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