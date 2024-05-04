function showForm() {
    document.forms["registration"].style.display = "block";
    document.getElementById("overlay").style.display = "block"
}

function hideForm() {
    document.forms["registration"].style.display = "none";
    document.getElementById("overlay").style.display = "none"
}

document.forms["registration"].addEventListener('submit', function (event) {
    event.preventDefault();

    var form = event.target;
    var email = form.elements['email'].value;
    var password = form.elements['password'].value;
    var confirm_password = form.elements['password-confirmation'].value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("That's wrong email pattern!");
        return
    }

    if (password !== confirm_password) {
        alert('Passwords aren\'t the same');
        return
    }

    console.log("User inputed all the date correctly")

    hideForm();
    document.forms["registration"].reset();
});