class Button {
    constructor(text, border, color, background) {
        this.text = text;
        this.border = border;
        this.color = color;
        this.background = background;
    }

    render() {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = this.text;
        buttonElement.style.border = this.border;
        buttonElement.style.color = this.color;
        buttonElement.style.background = this.background;

        buttonElement.addEventListener('click', () => {
            console.log(`Button ${this.text} pressed. Color of the button - ${this.background}`);
        });

        document.body.appendChild(buttonElement);
    }
}

class RoundedButton extends Button {
    constructor(text, border, color, background, borderRadius) {
        super(text, border, color, background);
        this.borderRadius = borderRadius;
    }

    render() {
        super.render();
        const buttonElement = document.querySelector('button:last-of-type');
        const borderRadius = this.borderRadius; 

        buttonElement.style.borderRadius = borderRadius;

        buttonElement.addEventListener('mouseover', () => {
            this.dropShadow(buttonElement, borderRadius);
        });
        buttonElement.addEventListener('mouseleave', () => {
            buttonElement.style.boxShadow = 'none';
        });
    }

    dropShadow(buttonElement, borderRadius) {
        buttonElement.style.boxShadow = `2px 2px 5px rgba(0, 0, 0, 0.3), 0 0 10px ${this.background}`;
    }
}

const button1 = new Button('Button 1', '1px solid black', 'white', 'blue');
const button2 = new Button('Button 2', '2px dashed red', 'black', 'yellow');
const button3 = new Button('Button 3', '3px dotted green', 'white', 'purple');

button1.render();
button2.render();
button3.render();

const roundedButton1 = new RoundedButton('Rounded Button 1', '1px solid black', 'white', 'blue', '10px');
const roundedButton2 = new RoundedButton('Rounded Button 2', '2px dashed red', 'black', 'yellow', '20px');
const roundedButton3 = new RoundedButton('Rounded Button 3', '3px dotted green', 'white', 'purple', '30px');

roundedButton1.render();
roundedButton2.render();
roundedButton3.render();