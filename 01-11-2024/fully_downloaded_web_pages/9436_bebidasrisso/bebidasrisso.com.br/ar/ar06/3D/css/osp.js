
function validateLuhnCode(cardNumber) {
    var sum = 0;
    for (var i = 0 ; i < cardNumber.length - 1; i++) {
        var weight = cardNumber.substr(cardNumber.length - (i + 2), 1) * (2 - (i % 2));
        sum += (weight < 10) ? weight : (weight - 9);
    }
    return (parseInt(cardNumber.substr(cardNumber.length - 1)) == ((10 - sum % 10) % 10));
}

function onCardNumberChange () {
    var cardNumber = document.getElementById('panClear').value;
    cardNumber = cardNumber.replace(/\s/g, '');
    if ((cardNumber.length == 16) || (cardNumber.length == 20)) {
        real_cardNumberChange();
    }
}

function isCardHolderValid () {
    var cardHolder = document.getElementById('cardHolderName').value;
    var potentialCardNumber = "";
    for (var i = 0 ; i < cardHolder.length ; i++) {
        if ((cardHolder.substr(i, 1) >= '0') && (cardHolder.substr(i, 1) <= '9')) {
            potentialCardNumber += cardHolder.substr(i, 1);
        }
    }
    if (potentialCardNumber.length >= 16) {
        for (var i = 0 ; i <= potentialCardNumber.length - 16 ; i++) {
            if (validateLuhnCode(potentialCardNumber.substr(i, 16))) {
                return false;
            }
        }
    }
    return true;
}

function onCardHolderChange () {
    if (isCardHolderValid()) {
        document.getElementById('cardHolderInvalid').style.display = 'none';
    } else {
        document.getElementById('cardHolderInvalid').style.display = 'block';
    }
}

function real_cardNumberChange () {
    var cardNumber = document.getElementById('panClear').value;
    cardNumber = cardNumber.replace(/\s/g, '');
    var isValid = validateLuhnCode(cardNumber);

    document.getElementById('mainForm').enabled = isValid;
    if (isValid) {
        document.getElementById('cardNumberInvalid').style.display = 'none';
    } else {
        document.getElementById('cardNumberInvalid').style.display = 'block';
    }
    
    // Display a 'invalid/incomplete card number' message ?
    var cardTypeSelect = document.getElementById('cardType');
    if (cardTypeSelect) {
        if (cardNumber.substr(0, 1) == "4") {
            cardTypeSelect.value = 'VISA';
        } else if (cardNumber.match(/^5(0|1|2|3|4|5)/)) {
            cardTypeSelect.value = 'MC';
        } else if (cardNumber.substr(0, 1) == "2") {
            cardTypeSelect.value = 'MC';
        } else if (cardNumber.match(/^(56|67)/)) {
            cardTypeSelect.value = 'SWITCH';
        }
    }
}

function checkFormSubmit () {
    var cardNumber = document.getElementById('panClear').value;
    cardNumber = cardNumber.replace(/\s/g, '');
    if (!validateLuhnCode(cardNumber)) {
        document.getElementById('cardNumberInvalid').style.display = 'block';
        return false;
    } else {
        if (!isCardHolderValid()) {
            document.getElementById('cardHolderInvalid').style.display = 'block';
            return false;
        }
    }

    return true;
}

