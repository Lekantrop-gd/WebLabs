function showLogin() {
    document.getElementById('login').style.display = 'flex';
}

function hideLogin() {
    document.getElementById('login').style.display = 'none';
    document.forms['login-form'].reset();

    var oldElement = document.forms['login-form'];
    var newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
}

function getUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = {
        username: username,
        password: password
    }

    return user;
}

function login() {
    showLogin();

    document.forms['login-form'].addEventListener('submit', async function (event) {
        event.preventDefault();

        const user = getUser();
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            localStorage.setItem('user', user.username);
            location.reload();
            hideLogin();
        } else {
            alert('Something went wrong. Try again.')
        }
    });
}