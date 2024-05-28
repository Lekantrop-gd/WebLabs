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

async function createProduct() {
    showForm();

    document.forms["new-product-form"].addEventListener('submit', async function (event) {
        event.preventDefault();

        const product = getProductFromForm();
        const response = await fetch('/product/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        const result = await response.json();
        addProductToLocal(result);

        hideForm();
    });
}

async function updateProduct(productId) {
    const updatedProduct = getProductFromForm();
    const response = await fetch(`/product/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ price: updatedProduct.price })
    });
    
    const result = await response.json();
    updateProductInLocal(productId, result);
    
    hideForm();
}

async function deleteProduct(productId) {
    if (confirm("Are you sure you want to delete this product?") == false) {
        return;
    }

    const response = await fetch(`/product/${productId}`, {
        method: 'DELETE'
    });
    
    const result = await response.json();
    deleteProductFromLocal(productId);
}

function addProductToLocal(product) {
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    
    refreshProducts();
}

function updateProductInLocal(productId, updatedProduct) {
    const index = products.findIndex(product => product.id === productId);
    
    if (index !== -1) {
        products[index] = updatedProduct;
        localStorage.setItem('products', JSON.stringify(products));
        refreshProducts();
    }
}

function deleteProductFromLocal(productId) {
    products = products.filter(p => p.id !== productId);
    
    localStorage.setItem('products', JSON.stringify(products));
    refreshProducts();
}