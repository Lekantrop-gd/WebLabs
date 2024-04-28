function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

Car.prototype.displayInfo = function() {
    console.log("Car Info:");
    console.log("Brand:", this.brand);
    console.log("Model:", this.model);
    console.log("Year:", this.year);
}

Car.prototype.drive = function() {
    console.log("Driving started.");
}

var car1 = new Car("Toyota", "Camry", 2020);
var car2 = new Car("Honda", "Civic", 2018);
var car3 = new Car("Ford", "Mustang", 2022);

car1.displayInfo();
car1.drive();

car2.displayInfo();
car2.drive();

car3.displayInfo();
car3.drive();