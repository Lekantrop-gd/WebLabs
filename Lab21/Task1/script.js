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

function renderProductCard(product) {
    var card = document.createElement('div');
    card.classList.add('product-card');

    var discount = document.createElement('p');
    discount.classList.add('product-discount');
    discount.textContent = product.discount + '%';
    card.appendChild(discount);

    var image = document.createElement('div');
    image.classList.add('product-image');
    image.style.backgroundImage = `url(${product.picture})`;
    card.appendChild(image);

    var category = document.createElement('p');
    category.classList.add('product-category');
    category.textContent = product.category;
    card.appendChild(category);

    var title = document.createElement('h1');
    title.classList.add('product-title');
    title.textContent = product.title;
    card.appendChild(title);

    var description = document.createElement('p');
    description.classList.add('product-description');
    description.textContent = product.description;
    card.appendChild(description);

    var footer = document.createElement('div');
    footer.classList.add('product-footer');
    card.appendChild(footer);

    var price = document.createElement('div');
    price.classList.add('product-price');
    price.textContent = `$${product.price}`;
    footer.appendChild(price);

    var buttons = document.createElement('div');
    buttons.classList.add('product-buttons');
    footer.appendChild(buttons);
    
    var cart = document.createElement('div');
    cart.classList.add('product-cart');
    cart.setAttribute('onclick', `editProduct('${product.title}')`);
    buttons.appendChild(cart);

    var bin = document.createElement('div');
    bin.classList.add('product-bin');
    bin.setAttribute('onclick', `deleteProduct('${product.title}')`);
    buttons.appendChild(bin);

    return card;
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

function addProduct() {
    showForm();

    document.forms["new-product-form"].addEventListener('submit', function(event) {
        event.preventDefault();

        addNewProduct();
    });
}

function addNewProduct() {
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
        discount: productDiscount,
        inStock: productInStock,
        brand: productBrand,
        category: productCategory,
        picture: productImage
    };

    return product;
}

function displayProduct(product) {
    document.getElementById('title').value = product.title;
    document.getElementById('description').value = product.description;
    document.getElementById('price').value = product.price;
    document.getElementById('discount').value = product.discount;
    document.getElementById('in-stock').value = product.inStock;
    document.getElementById('brand').value = product.brand;
    document.getElementById('category').value = product.category;
    document.getElementById('picture').value = product.picture;
}