document.addEventListener('DOMContentLoaded', () => {
    fetchRooms(1);
});

async function fetchRooms(page) {
    const limit = 1;

    const typeFilter = document.getElementById('type-filter');
    const placesFilter = document.getElementById('places-filter');
    const keywordFilter = document.getElementById('key-word-filter');
    const sortFilter = document.getElementById('price-sort-filter');

    const selectedType = typeFilter ? typeFilter.value : 'all-types';
    const selectedPlaces = placesFilter ? placesFilter.value : '';
    const searchTerm = keywordFilter ? keywordFilter.value : '';
    const sortKey = sortFilter ? sortFilter.value : '';

    try {
        const response = await fetch(`/room/list?page=${page}&limit=${limit}&type=${selectedType}&places=${selectedPlaces}&keyword=${searchTerm}&sort=${sortKey}`);
        const data = await response.json();

        refreshRooms(data.rooms);
        setupPagination(data.totalPages, data.currentPage);
    } catch (error) {
        console.error('Failed to fetch rooms:', error);
    }
}

async function setupPagination(totalPages, currentPage) {
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.disabled = i === currentPage;
        pageButton.setAttribute('onclick', `fetchRooms(${i})`);
        paginationContainer.appendChild(pageButton);
    }
}

async function refreshRooms(rooms) {
    const roomsContainer = document.getElementById('rooms-container');
    roomsContainer.innerHTML = '';

    rooms.forEach(room => {
        roomsContainer.appendChild(renderCard(room));
    });

    const user = localStorage.getItem('user');
    let isAdmin = false;

    if (user) {
        try {
            const response = await fetch(`/login/check/${user}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            isAdmin = await response.json();
        } catch (error) {
            console.error('Failed to check admin status:', error);
        }
    }

    document.getElementById('create-room').style.display = isAdmin ? 'block' : 'none';
}