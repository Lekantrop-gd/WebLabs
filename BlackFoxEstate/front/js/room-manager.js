document.addEventListener('DOMContentLoaded', fetchRooms(1));

async function fetchRooms(page) {
    const limit = 1;
    const response = await fetch(`/room/list?page=${page}&limit=${limit}`);
    const data = await response.json();
    
    refreshRooms(data.rooms);
    setupPagination(data.totalPages, data.currentPage);
}

async function setupPagination(totalPages, currentPage) {
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.disabled = i === currentPage;
        pageButton.setAttribute("onclick", `fetchRooms(${ i })`);
        paginationContainer.appendChild(pageButton);
    }
}

async function refreshRooms(rooms) {
    const roomsContainer = document.getElementById('rooms-container');
    roomsContainer.innerHTML = "";
    
    rooms.forEach(room => {
        roomsContainer.appendChild(renderCard(room));
    });
    
    var isAdmin = false;
    const user = localStorage.getItem("user");
    if (user) {
        const response = await fetch(`/login/check/${user}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        isAdmin = await response.json();
    }
    
    document.getElementById('create-room').style.display = isAdmin ? "block" : "none";
}
