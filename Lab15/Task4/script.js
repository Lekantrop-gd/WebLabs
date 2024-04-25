function convertToCamelCase(cssStyle) {
    const words = cssStyle.split('-');

    const camelCaseWords = words.map((word, index) => {
        if (index === 0) {
            return word;
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    });

    const camelCaseStyle = camelCaseWords.join('');

    return camelCaseStyle;
}

const cssStyle = 'background-color';
const camelCaseStyle = convertToCamelCase(cssStyle);
console.log(camelCaseStyle);