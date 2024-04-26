let currentDate = new Date();
let currentHour = currentDate.getHours();

let greetingElement = document.getElementById("greetingIF");

if (currentHour >= 23 || currentHour < 5) {
    greetingElement.textContent = "Доброї ночі";
} else if (currentHour >= 5 && currentHour < 11) {
    greetingElement.textContent = "Доброго ранку";
} else if (currentHour >= 11 && currentHour < 17) {
    greetingElement.textContent = "Доброго дня";
} else {
    greetingElement.textContent = "Доброго вечора";
}

greetingElement = document.getElementById("greetingSWITCH");
switch (true) {
    case (currentHour >= 23 || currentHour < 5):
        greetingElement.textContent = "Доброї ночі";
        break;
    case (currentHour >= 5 && currentHour < 11):
        greetingElement.textContent = "Доброго ранку";
        break;
    case (currentHour >= 11 && currentHour < 17):
        greetingElement.textContent = "Доброго дня";
        break;
    default:
        greetingElement.textContent = "Доброго вечора";
        break;
}