function validateCreditCardNumber(cardNumber) {
    var regex = /^(4|5)\d{15}$/;
    
    return regex.test(cardNumber);
}

var cardNumber = "4539123456789012";
console.log(validateCreditCardNumber(cardNumber));

cardNumber = "378282246310005";
console.log(validateCreditCardNumber(cardNumber));