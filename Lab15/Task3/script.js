function capitalizeFirstLetter(str) {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const result = capitalizedWords.join(' ');

    return result;
}

const inputString = 'i love game development';
const outputString = capitalizeFirstLetter(inputString);
console.log(outputString);