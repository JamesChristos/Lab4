  // Mapping for numbers 0 to 19 and tens multiples
  const numberToWordsMap = {
    0: 'ZERO',
    1: 'ONE',
    2: 'TWO',
    3: 'THREE',
    4: 'FOUR',
    5: 'FIVE',
    6: 'SIX',
    7: 'SEVEN',
    8: 'EIGHT',
    9: 'NINE',
    10: 'TEN',
    11: 'ELEVEN',
    12: 'TWELVE',
    13: 'THIRTEEN',
    14: 'FOURTEEN',
    15: 'FIFTEEN',
    16: 'SIXTEEN',
    17: 'SEVENTEEN',
    18: 'EIGHTEEN',
    19: 'NINETEEN',
    20: 'TWENTY',
    30: 'THIRTY',
    40: 'FORTY',
    50: 'FIFTY',
    60: 'SIXTY',
    70: 'SEVENTY',
    80: 'EIGHTY',
    90: 'NINETY',
};

// Function to convert a number to words
function convertToWords(number) {
    if (number === 0) {
        return 'ZERO';
    }

    if (numberToWordsMap.hasOwnProperty(number)) {
        return numberToWordsMap[number];
    }

    if (number < 100) {
        const tens = Math.floor(number / 10) * 10;
        const ones = number % 10;
        return numberToWordsMap[tens] + ' ' + numberToWordsMap[ones];
    }

    if (number < 1000) {
        const hundreds = Math.floor(number / 100);
        const remainder = number % 100;
        return numberToWordsMap[hundreds] + ' HUNDRED ' + convertToWords(remainder);
    }

    if (number < 1000000) {
        const thousands = Math.floor(number / 1000);
        const remainder = number % 1000;
        return convertToWords(thousands) + ' THOUSAND ' + convertToWords(remainder);
    }

    if (number < 1000000000) {
        const millions = Math.floor(number / 1000000);
        const remainder = number % 1000000;
        return convertToWords(millions) + ' MILLION ' + convertToWords(remainder);
    }

    return 'Number too large';
}

// Function to handle the number input
function convertNumberToWords() {
    const numberInput = document.getElementById('numberInput');
    const wordOutput = document.getElementById('wordOutput');

    const number = parseInt(numberInput.value);
    if (!isNaN(number)) {
        if (convertToWords(number) === 'Number too large') {
            wordOutput.value = 'Number too large';
        } else {
            const words = convertToWords(number) + ' DOLLARS';
            wordOutput.value = words;
        }
    } else {
        wordOutput.value = '';
    }
}

// Event listener for "Convert to Words" button click
const convertButton = document.getElementById('convertButton');
convertButton.addEventListener('click', convertNumberToWords);