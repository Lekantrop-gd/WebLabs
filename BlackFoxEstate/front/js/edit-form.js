window.addEventListener("DOMContentLoaded", assignFilesListener);

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

function assignFilesListener() {
    document.getElementById('files').addEventListener('change', function(event) {
        const files = event.target.files;
        const imagesContainer = document.getElementById('images');
        imagesContainer.innerHTML = '';
    
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    imagesContainer.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    });
}