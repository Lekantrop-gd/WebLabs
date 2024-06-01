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

function showLogin() {
    document.getElementById("login").style.display = "flex";
    document.forms["login-form"].reset();
}

function hideLogin() {
    document.getElementById("login").style.display = "none";

    var oldElement = document.forms["login-form"];
    var newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
}