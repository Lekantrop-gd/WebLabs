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