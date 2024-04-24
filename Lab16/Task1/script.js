document.getElementById('addButton').addEventListener('click', function () {
    var newDiv = document.createElement('div');

    newDiv.textContent = 'New document';

    newDiv.classList.add('newElement');

    newDiv.style.backgroundColor = 'lightblue';
    newDiv.style.color = 'white';
    newDiv.style.padding = '10px';

    var container = document.querySelector('.container');

    container.appendChild(newDiv);
});
