let sideA = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
let sideB = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
let sideC = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));

if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
    console.log('Неправильно введені дані :(');
} else {
    let semiPerimeter = (sideA + sideB + sideC) / 2;

    let triangleArea = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));

    console.log("Площа трикутника: " + triangleArea.toFixed(3));

    let isRightTriangle = (sideA * sideA + sideB * sideB === sideC * sideC) ||
        (sideA * sideA + sideC * sideC === sideB * sideB) ||
        (sideB * sideB + sideC * sideC === sideA * sideA);

    console.log(isRightTriangle ? "Трикутник є прямокутним." : "Трикутник не є прямокутним.");
}
