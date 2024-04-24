function createBlock(headerText, paragraphText) {
    const block = document.createElement('div');
    block.classList.add('block');

    const header = document.createElement('h2');
    header.textContent = headerText;
    block.appendChild(header);

    const paragraph = document.createElement('p');
    paragraph.textContent = paragraphText;
    block.appendChild(paragraph);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.addEventListener('click', () => {
        block.remove();
    });
    block.appendChild(closeButton);

    return block;
}

const container = document.querySelector('.container');
for (let i = 1; i <= 3; i++) {
    const block = createBlock(`Title ${i}`, `Lorem ipsum dolor sit amet consectetur adipiscing elit.`);
    container.appendChild(block);
}

const addBlockButton = document.getElementById('addBlockButton');
addBlockButton.addEventListener('click', () => {
    const block = createBlock('New title', 'New article');
    container.appendChild(block);
});