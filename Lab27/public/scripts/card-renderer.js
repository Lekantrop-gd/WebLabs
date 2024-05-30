function renderProductCard(product) {
    var $card = $('<div>').addClass('product-card');

    var $discount = $('<p>').addClass('product-discount').text(product.discountPercentage + '%');
    $card.append($discount);

    var $image = $('<div>').addClass('product-image').css('background-image', `url(${product.thumbnail})`);
    $card.append($image);

    var $category = $('<p>').addClass('product-category').text(product.category);
    $card.append($category);

    var $title = $('<h1>').addClass('product-title').text(product.title);
    $card.append($title);

    var $description = $('<p>').addClass('product-description').text(product.description);
    $card.append($description);

    var $footer = $('<div>').addClass('product-footer');
    $card.append($footer);

    var $price = $('<div>').addClass('product-price').text(`$${product.price}`);
    $footer.append($price);

    var $buttons = $('<div>').addClass('product-buttons');
    $footer.append($buttons);

    var $cart = $('<div>').addClass('product-cart').attr('onclick', `editProduct('${product._id}')`);
    $buttons.append($cart);

    var $bin = $('<div>').addClass('product-bin').attr('onclick', `deleteProduct('${product._id}')`);
    $buttons.append($bin);

    return $card.get(0);
}