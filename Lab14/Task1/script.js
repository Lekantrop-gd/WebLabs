let cities = ["Velen", "Skellige", "Vizima"];

let citiesString = cities[0];
for (let i = 1; i < cities.length; i++) {
    citiesString += "*" + cities[i];
}
console.log(citiesString);

//Вирішив ще додати простіший спосіб, не через цикл
let result = cities.join("*");
console.log(result);