function showView(id) {
    displayRoom(id);
}

function hideView() {
    document.getElementById('room-view').style.display = 'none';
    var images = document.getElementById('view-images');
    images.innerHTML = '';

    var oldElement = document.forms['room-view-form'];
    var newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
}

async function displayRoom(id) {
    const response = await fetch(`/room/find/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    var isAdmin = false;
    const user = localStorage.getItem('user');
    if (user) {
        const response = await fetch(`/login/check/${user}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        isAdmin = await response.json();
    }

    fillView(data, isAdmin);
}

function fillView(room, isAdmin) {
    var images = document.getElementById('view-images');
    images.innerHTML = '';
    room.images.forEach(function(image) {
        var roomImg = document.createElement('img');
        roomImg.src = image;
        roomImg.alt = 'Room image couldn\'t load';
        images.appendChild(roomImg);
    });

    document.getElementById('view-title').textContent = room.title;
    document.getElementById('view-type').textContent = room.type;
    
    document.getElementById('view-places').innerHTML = '';
    for (var x = 0; x < room.places; x++) {
        var placeImage = document.createElement('img');
        placeImage.src = '../images/user.png';
        placeImage.alt = 'place';
        document.getElementById('view-places').appendChild(placeImage);
    }

    document.getElementById('view-amenities').innerHTML = '';
    room.amenities.forEach(function(amenity) {
        var amenityImage = document.createElement('img');
        amenityImage.src = '../images/' + amenity + '.png';
        amenityImage.alt = amenity;
        document.getElementById('view-amenities').appendChild(amenityImage);
    });

    document.getElementById('view-price').textContent = room.price + '$/night';

    if (isAdmin) {
        document.getElementById('edit').setAttribute('onclick', `updateRoom('${ room._id }')`);
        document.getElementById('edit').style.display = 'block';

        document.getElementById('delete').setAttribute('onclick', `deleteRoom('${ room._id }')`);
        document.getElementById('delete').style.display = 'block';
    }

    document.getElementById('room-view').style.display = 'flex';
}

function deleteRoom(id) {
    asyncDelete(id);
}

async function asyncDelete(id) {
    if (confirm('Are you sure you want to delete this product?') == false) {
        return;
    }

    await fetch(`/room/delete/${id}`, {
        method: 'DELETE'
    });

    fetchRooms();
    hideView();
}