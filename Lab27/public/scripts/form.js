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

function getProduct() {
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

async function createProduct() {
    showForm();

    document.forms["new-product-form"].addEventListener('submit', async function (event) {
        event.preventDefault();

        const product = getProduct();
        await fetch('/product/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        fetchProducts();
        hideForm();
    });
}

async function editProduct(productId) {
    showForm();

    const response = await fetch(`/product/find/${productId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const data = await response.json();

    displayProduct(data);

    document.forms["new-product-form"].addEventListener('submit', async function (event) {
        event.preventDefault();

        await fetch(`/product/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( getProduct() )
        });

        fetchProducts();
        hideForm();
    });
}

async function deleteProduct(productId) {
    if (confirm("Are you sure you want to delete this product?") == false) {
        return;
    }

    await fetch(`/product/${productId}`, {
        method: 'DELETE'
    });

    fetchProducts();
    hideForm();
}