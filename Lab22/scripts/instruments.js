function filterByCategory(event) {
    const selectedCategory = event.target.value;
    if (!selectedCategory || selectedCategory === "all-categories") {
        displayProducts(products);
    } 
    else {
        displayProducts(products.filter(product => product.category === selectedCategory));
    }
}

function searchProducts(event) {
    console.log(123);
    const searchTerm = event.target.value;
    if (!searchTerm) {
        displayProducts(products);
    } 
    else {
        const lowercasedTerm = searchTerm.toLowerCase();
        displayProducts(products.filter(product =>
            product.title.toLowerCase().includes(lowercasedTerm) ||
            product.description.toLowerCase().includes(lowercasedTerm)
        ));
    }
}

function sortProducts(event) {
    const key = event.target.value;
    const sortedProducts = [...products];
    if (key === 'price-increase') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } 
    else if (key === 'price-decrease') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } 
    else if (key === 'newest-first') {
        sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } 
    else if (key === 'oldest-first') {
        sortedProducts.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
    }
    displayProducts(sortedProducts);
}

document.getElementById('category').onchange = filterByCategory;
document.getElementById('search').oninput = searchProducts;
document.getElementById('sort').onchange = sortProducts;