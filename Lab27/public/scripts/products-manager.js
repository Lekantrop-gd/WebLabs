document.addEventListener('DOMContentLoaded', fetchProducts());

async function fetchProducts() {
    const response = await fetch('/product/list');
    const data = await response.json();

    refreshProducts(data);
}

function refreshProducts(products) {
    var productContainer = document.getElementById('product-container');
    productContainer.innerHTML = "";

    products.forEach(function (product) {
        productContainer.appendChild(renderProductCard(product));
    });
}