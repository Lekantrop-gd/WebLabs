async function filterByCategory(category) {
    const filteredProducts = category && category !== "all-categories"
        ? products.filter(product => product.category === category)
        : products;
    return filteredProducts;
}

async function searchProducts(products, term) {
    const lowercasedTerm = term.toLowerCase();
    const searchedProducts = term
        ? products.filter(product =>
            product.title.toLowerCase().includes(lowercasedTerm) ||
            product.description.toLowerCase().includes(lowercasedTerm)
        )
        : products;
    return searchedProducts;
}

async function sortProducts(products, key) {
    const sortedProducts = [...products];
    if (key === 'price-increase') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (key === 'price-decrease') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (key === 'newest-first') {
        sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else if (key === 'oldest-first') {
        sortedProducts.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
    }
    return sortedProducts;
}

async function filterSearchAndSort(category, term, key) {
    try {
        const filteredProducts = await filterByCategory(category);
        const searchedProducts = await searchProducts(filteredProducts, term);
        const finalProducts = await sortProducts(searchedProducts, key);
        displayProducts(finalProducts);
    } catch (error) {
        console.error(error);
    }
}

function handleCategoryChange() {
    const selectedCategory = document.getElementById('category-filter').value;
    const searchTerm = document.getElementById('search-filter').value;
    const sortKey = document.getElementById('sort-filter').value;
    filterSearchAndSort(selectedCategory, searchTerm, sortKey);
}

document.getElementById('category-filter').onchange = handleCategoryChange;
document.getElementById('search-filter').oninput = handleCategoryChange;
document.getElementById('sort-filter').onchange = handleCategoryChange;