// Task 1.1
console.log("Task 1.1")

const student = {
    name: 'John',
    age: 20,
    gender: 'male'
};

const { name: studentName, age: studentAge, gender: studentGender } = student;

console.log(studentName);
console.log(studentAge);
console.log(studentGender);

// Task 1.2
console.log("")
console.log("Task 1.2")

const car = {
    engine: {
        cylinders: 4,
        horsepower: 200
    }
};

const { engine: { cylinders: engineCylinders, horsepower: engineHorsepower } } = car;

console.log(engineCylinders);
console.log(engineHorsepower);

// Task 1.3
console.log("")
console.log("Task 1.3")

const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
};

const { title: bookTitle, author: bookAuthor } = book;

console.log(bookTitle);
console.log(bookAuthor);