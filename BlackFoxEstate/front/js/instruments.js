let currentFetchController = null;

async function getRooms() {
    if (currentFetchController) {
        currentFetchController.abort();
    }
    currentFetchController = new AbortController();
    const response = await fetch('/room/list', { signal: currentFetchController.signal });
    const data = await response.json();
    currentFetchController = null;
    return data.rooms;
}

function filterByType(rooms, type) {
    return type && type !== "all-types"
        ? rooms.filter(room => room.type === type)
        : rooms;
}

function filterByPlaces(rooms, places) {
    return places
        ? rooms.filter(room => room.places >= places)
        : rooms;
}

function filterByKeyword(rooms, keyword) {
    const lowercasedKeyword = keyword.toLowerCase();
    return keyword
        ? rooms.filter(room =>
            room.title.toLowerCase().includes(lowercasedKeyword) ||
            room.amenities.some(amenity => amenity.toLowerCase().includes(lowercasedKeyword))
        )
        : rooms;
}

function sortRooms(rooms, sortKey) {
    const sortedRooms = [...rooms];
    if (sortKey === 'price-ascending') {
        sortedRooms.sort((a, b) => a.price - b.price);
    } else if (sortKey === 'price-descending') {
        sortedRooms.sort((a, b) => b.price - a.price);
    }
    return sortedRooms;
}

async function filterSearchAndSort(type, places, keyword, sortKey) {
    try {
        const rooms = await getRooms();
        let filteredRooms = filterByType(rooms, type);
        filteredRooms = filterByPlaces(filteredRooms, places);
        filteredRooms = filterByKeyword(filteredRooms, keyword);
        const sortedRooms = sortRooms(filteredRooms, sortKey);
        refreshRooms(sortedRooms);
    } catch (error) {
        if (error.name !== 'AbortError') {
            console.error(error);
        }
    }
}

function handleFiltersChange() {
    const selectedType = document.getElementById('type-filter').value;
    const selectedPlaces = document.getElementById('places-filter').value;
    const searchTerm = document.getElementById('key-word-filter').value;
    const sortKey = document.getElementById('price-sort-filter').value;

    filterSearchAndSort(selectedType, selectedPlaces, searchTerm, sortKey);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('type-filter').onchange = handleFiltersChange;
    document.getElementById('places-filter').onchange = handleFiltersChange;
    document.getElementById('key-word-filter').oninput = handleFiltersChange;
    document.getElementById('price-sort-filter').onchange = handleFiltersChange;
});