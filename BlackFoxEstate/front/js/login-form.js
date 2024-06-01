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