function createProductCard(product) {
    var card = document.createElement('div');
    card.classList.add('product-card');

    var discount = document.createElement('div');
    discount.classList.add('product-discount');
    discount.textContent = product.discountPercentage + '%';
    card.appendChild(discount);

    var image = document.createElement('div');
    image.classList.add('product-image');
    image.style.backgroundImage = `url(${product.thumbnail})`;
    card.appendChild(image);

    var category = document.createElement('div');
    category.classList.add('product-category');
    category.textContent = product.category;
    card.appendChild(category); 

    var title = document.createElement('div');
    title.classList.add('product-title');
    title.textContent = product.title;
    card.appendChild(title);

    var description = document.createElement('div');
    description.classList.add('product-description');
    description.textContent = product.description;
    card.appendChild(description);

    var price = document.createElement('div');
    price.classList.add('product-price');
    price.textContent = `$${product.price}`;
    card.appendChild(price);

    var cartIcon = document.createElement('div');
    cartIcon.classList.add('product-cart');
    cartIcon.setAttribute('onclick', `addToCart(${product.id})`);
    card.appendChild(cartIcon);

    return card;
}

function addToCart(productId) {
    console.log(`Product added to cart with ID: ${productId}`);
}

var productContainer = document.getElementById('product-container');

products.forEach(product => {
    var card = createProductCard(product);
    productContainer.appendChild(card);
});