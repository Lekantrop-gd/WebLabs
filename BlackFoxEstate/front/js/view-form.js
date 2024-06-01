function showView() {
    document.getElementById("room-view").style.display = "flex";
    document.forms["room-view-form"].reset();
}

function hideView() {
    document.getElementById("room-view").style.display = "none";

    var oldElement = document.forms["room-view-form"];
    var newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
}