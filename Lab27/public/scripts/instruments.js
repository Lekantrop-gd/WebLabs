let currentFetchController = null;

async function fetchProducts() {
    if (currentFetchController) {
        currentFetchController.abort();
    }
    currentFetchController = new AbortController();
    const response = await fetch('/product/list', { signal: currentFetchController.signal });
    const data = await response.json();
    currentFetchController = null;
    return data;
}

function filterByCategory(products, category) {
    return category && category !== "all-categories"
        ? products.filter(product => product.category === category)
        : products;
}

function searchProducts(products, term) {
    const lowercasedTerm = term.toLowerCase();
    return term
        ? products.filter(product =>
            product.title.toLowerCase().includes(lowercasedTerm) ||
            product.description.toLowerCase().includes(lowercasedTerm)
        )
        : products;
}

function sortProducts(products, key) {
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
        const products = await fetchProducts();
        const filteredProducts = filterByCategory(products, category);
        const searchedProducts = searchProducts(filteredProducts, term);
        const finalProducts = sortProducts(searchedProducts, key);
        refreshProducts(finalProducts);
    } catch (error) {
        if (error.name !== 'AbortError') {
            console.error(error);
        }
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