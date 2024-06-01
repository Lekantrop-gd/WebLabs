document.addEventListener('DOMContentLoaded', fetchRooms);

async function fetchRooms() {
    const response = await fetch('/room/list');
    const data = await response.json();
    
    refreshRooms(data);
}

async function refreshRooms(rooms) {
    var roomsContainer = document.getElementById('rooms-container');
    roomsContainer.innerHTML = "";

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

    //document.getElementById('create-room').style.display = isAdmin ? "block" : "none";

    rooms.forEach(async function (room) {
        roomsContainer.appendChild(renderCard(room));
    });
}