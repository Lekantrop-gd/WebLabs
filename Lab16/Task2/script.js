function editContent() {
    var newText = prompt('Введіть новий текст:');

    var editableDiv = document.getElementById('editableDiv');

    if (newText !== null) {
        editableDiv.textContent = newText;
    }
}
