let x = 1;
let y = 2;

let res1 = `${x}${y}`;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = `${x === 1}${y}`;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x != y;
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x / "y";
console.log(res4); // NaN
console.log(typeof res4); // "number"