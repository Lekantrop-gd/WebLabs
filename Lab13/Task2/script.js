let userInput = prompt("Будь ласка, введіть число: ");

if (userInput === null || userInput === "" || isNaN(userInput)) {
    console.log("Неправильне введення. Будь ласка, введіть інше число.");
}
else {
    let number = parseFloat(userInput);

    if (number > 0 && number % 2 === 0) {
        console.log("Введене число є парним і додатним.");
    } else {
        console.log("Введене число не є парним і додатним.");
    }

    if (number % 7 === 0) {
        console.log("Введене число кратне 7.");
    } else {
        console.log("Введене число не кратне 7.");
    }
}