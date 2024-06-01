function showLogin() {
    document.getElementById("login").style.display = "flex";
}

function hideLogin() {
    document.getElementById("login").style.display = "none";
    document.forms["login-form"].reset();

    var oldElement = document.forms["login-form"];
    var newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
}