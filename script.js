document.getElementById('convert-btn').addEventListener('click', function() {
    const inputNumber = document.getElementById('number').value;
    const outputElement = document.getElementById('output');
    let outputText = '';

    // Check if the input is empty or not a number
    if (inputNumber === '' || isNaN(inputNumber)) {
        outputText = 'Please enter a valid number';
    } else {
        const number = parseInt(inputNumber);

        // Check for conditions
        if (number <= 0) {
            outputText = 'Please enter a number greater than or equal to 1';
        } else if (number >= 4000) {
            outputText = 'Please enter a number less than or equal to 3999';
        } else {
            outputText = convertToRoman(number);
        }
    }

    outputElement.textContent = outputText;
});

// Function to convert Arabic numeral to Roman numeral
function convertToRoman(num) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = '';

    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            roman += key;
            num -= romanNumerals[key];
        }
    }

    return roman;
}
