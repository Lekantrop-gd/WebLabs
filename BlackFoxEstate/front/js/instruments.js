document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('type-filter').onchange = handleFiltersChange;
    document.getElementById('places-filter').onchange = handleFiltersChange;
    document.getElementById('key-word-filter').oninput = handleFiltersChange;
    document.getElementById('price-sort-filter').onchange = handleFiltersChange;
});

function handleFiltersChange() {
    fetchRooms(1);
}