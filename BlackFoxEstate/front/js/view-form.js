function showView(id) {
    document.getElementById("room-view").style.display = "flex";
    displayRoom();
}

function hideView() {
    document.getElementById("room-view").style.display = "none";

    var oldElement = document.forms["room-view-form"];
    var newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
}

async function displayRoom(id) {
    const response = await fetch(`/product/find/${productId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    fillRoom(data);
}

function fillRoom(room) {
    // var images = document["view-form"]["images"];
    // images.innerHTML = "";
    // room.images.forEach(function(image) {
    //     var roomImg = document.createElement('img');
    //     roomImg.src = "../";
    //     amenityImg.alt = amenity;
    //     amenities.appendChild(amenityImg);
    // });
    console.log(room);
}