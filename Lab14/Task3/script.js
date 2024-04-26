function findMin() {
    if (arguments.length === 0) {
        return undefined; // На випадок, якщо хтось додумається викликати функцію без аргументів)
    }
    
    let min = arguments[0];
    
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    
    return min;
}

const min = findMin(12, 14, 4, -4, 0.2);
console.log("Найменше значення:", min);