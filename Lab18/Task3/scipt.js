class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const circle = new Circle("red", 5);
const rectangle = new Rectangle("blue", 4, 6);

console.log("Circle color:", circle.color);
console.log("Circle area:", circle.calculateArea());

console.log("Rectangle color:", rectangle.color);
console.log("Rectangle area:", rectangle.calculateArea());