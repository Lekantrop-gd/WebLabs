document.addEventListener('DOMContentLoaded', fetchProducts());

async function fetchProducts() {
    const response = await fetch('/product/list');
    const data = await response.json();

    refreshProducts(data);
}

async function refreshProducts(products) {
    var productContainer = document.getElementById('product-container');
    productContainer.innerHTML = "";

    var isAdmin = false;
    const user = localStorage.getItem("user");
    if (user) {
        const response = await fetch(`/auth/check/${user}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        isAdmin = await response.json();
    }

    document.getElementById('create-product').style.display = isAdmin ? "block" : "none";

    products.forEach(async function (product) {
        productContainer.appendChild(renderProductCard(product, isAdmin));
    });
}