class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying. Age: ${this.age}, Grade: ${this.grade}`);
    }
}

const student1 = new Student("John", 20, "A");
const student2 = new Student("Alice", 21, "B");
const student3 = new Student("Bob", 19, "C");

student1.study();
student2.study();
student3.study();