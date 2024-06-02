function showEdit() {
    document.getElementById("room-edit").style.display = "flex";
    assignFilesChanger();
}

function hideEdit() {
    document.getElementById("room-edit").style.display = "none";
    
    document.forms["room-edit-form"].reset();
    var imagesContainer = document.getElementById('images');
    imagesContainer.innerHTML = "";

    var oldElement = document.forms["room-edit-form"];
    var newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
}

function createRoom() {
    showEdit();

    document.forms['room-edit-form'].addEventListener('submit', async function(event) {
        event.preventDefault();
    
        const formData = new FormData(this);
    
        try {
            const response = await fetch('/room/create', {
                method: 'POST',
                body: formData,
            });
    
            const result = await response.json();
            if (response.ok) {
                console.log('Room created successfully:', result);
            } else {
                console.error('Operation failed:', result.error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }

        fetchRooms();
        hideEdit();
    });
}

async function updateRoom(room) {
    const response = await fetch(`/room/find/${room}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const data = await response.json();

    fillEdit(data);
    showEdit();

    document.forms['room-edit-form'].addEventListener('submit', async function(event) {
        event.preventDefault();
    
        const formData = new FormData(this);
    
        try {
            const response = await fetch(`/room/update/${ data._id }`, {
                method: 'PUT',
                body: formData,
            });
    
            const result = await response.json();
            if (response.ok) {
                console.log('Room updated successfully!');
            } else {
                console.error('Operation failed:', result.error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        
        fetchRooms();
        hideView();
        hideEdit();
    });
}

function fillEdit(room) {
    var imagesContainer = document.getElementById('images');
    imagesContainer.innerHTML = "";
    room.images.forEach(function(image) {
        var roomImg = document.createElement('img');
        roomImg.src = image;
        roomImg.alt = "Room image couldn't load";
        imagesContainer.appendChild(roomImg);
    });

    document.getElementById('title').value = room.title;

    document.getElementById('type').value = room.type;
    
    document.getElementById('places').value = room.places;

    document.getElementById('price').value = room.price;

    room.amenities.forEach(amenity => {
        const checkbox = document.querySelector(`input[type="checkbox"][value="${amenity}"]`);
        
        if (checkbox) {
            checkbox.checked = true;
        }
    });

    document.getElementById("room-edit").style.display = "flex";
}

function assignFilesChanger() {
    document.getElementById('files').addEventListener('change', function(event) {
        console.log(123);
        const files = event.target.files;
        const imagesContainer = document.getElementById('images');
        imagesContainer.innerHTML = '';
    
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    imagesContainer.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    });
}