document.addEventListener('DOMContentLoaded', assignHandlers);

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

function assignHandlers() {
    document.forms['room-edit-form'].addEventListener('submit', async function(event) {
        event.preventDefault();
    
        const formData = new FormData(this);
    
        try {
            const response = await fetch('/room', {
                method: 'POST',
                body: formData,
            });
    
            const result = await response.json();
            if (response.ok) {
                console.log('Room created/updated successfully:', result);
            } else {
                console.error('Operation failed:', result.error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    });
}