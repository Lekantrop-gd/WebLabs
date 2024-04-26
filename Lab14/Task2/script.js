function findProductFor(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;
}

const array = [2, 3, 4, 5];
const productFor = findProductFor(array);
console.log("Product of array elements using for loop:", productFor);

function findProductWhile(array) {
    let product = 1;
    let index = 0;
    while (index < array.length) {
        product *= array[index];
        index++;
    }
    return product;
}

const productWhile = findProductWhile(array);
console.log("Product of array elements using while loop:", productWhile);