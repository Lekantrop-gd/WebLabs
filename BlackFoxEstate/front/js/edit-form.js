function showEdit() {
    document.getElementById("room-edit").style.display = "flex";
    document.forms["room-edit-form"].reset();
}

function hideEdit() {
    document.getElementById("room-edit").style.display = "none";

    var oldElement = document.forms["room-edit-form"];
    var newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
}