function renderCard(room) {
    var card = document.createElement('span');
    card.className = 'room-card';
    card.setAttribute('onclick', `showView(${room._id})`);

    var thumbnail = document.createElement('img');
    thumbnail.className = 'thumbnail';
    thumbnail.src = room.images[0];
    thumbnail.alt = '';
    card.appendChild(thumbnail);

    var textContent = document.createElement('div');
    textContent.className = 'text-content';
    card.appendChild(textContent);

    var top = document.createElement('div');
    top.className = 'top';
    textContent.appendChild(top);

    var title = document.createElement('div');
    title.className = 'title';
    top.appendChild(title);

    var roomName = document.createElement('h1');
    roomName.className = 'room-name';
    roomName.textContent = room.name;
    title.appendChild(roomName);

    var roomType = document.createElement('h1');
    roomType.className = 'room-type';
    roomType.textContent = room.type;
    title.appendChild(roomType);

    var places = document.createElement('div');
    places.className = 'places';
    top.appendChild(places);

    for (var x = 0; x < room.places; x++) {
        var placeImg = document.createElement('img');
        placeImg.src = "../images/user.png";
        placeImg.alt = '';
        places.appendChild(placeImg);
    }

    var bottom = document.createElement('div');
    bottom.className = 'bottom';
    textContent.appendChild(bottom);

    var amenities = document.createElement('div');
    amenities.className = 'amenities';
    bottom.appendChild(amenities);

    room.amenities.forEach(function(amenity) {
        var amenityImg = document.createElement('img');
        amenityImg.src = amenity + ".png";
        amenityImg.alt = amenity;
        amenities.appendChild(amenityImg);
    });

    var price = document.createElement('h1');
    price.className = 'price';
    price.textContent = room.price + '$';
    bottom.appendChild(price);

    return card;
}