function showLoginForm() {
    document.getElementById("login").style.display = "flex";
    document.forms["login-form"].reset();
}

function hideLoginForm() {
    document.getElementById("login").style.display = "none";

    var oldElement = document.forms["login-form"];
    var newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
}

function getUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = {
        username: username,
        password: password
    }

    return user;
}

function login() {
    showLoginForm();

    document.forms["login-form"].addEventListener('submit', async function (event) {
        event.preventDefault();
    
        const user = getUser();
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            localStorage.setItem("user", user.username);
            fetchProducts();
            hideLoginForm();
        } else {
            alert("Something went wrong. Try again.")
        }
    });
}