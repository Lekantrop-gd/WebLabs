let isAdult = prompt("Введіть, будь ласка, свій вік: ");

if (isAdult !== null) {
    console.log(isAdult >= 18 ? "Ви досягли повноліття." : "Ви ще надто молоді.");
}
else {
    console.log("Скасовано користувачем.");
}