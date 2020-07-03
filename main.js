// Number Analyzer

// HTML Elements
let numEl = document.getElementById('numInput');

// Add Event Listener
numEl.addEventListener('change', analyzeNumber);

// Event Function
function analyzeNumber() {
    // Get Number from Input Element
    let numInput = Number(numEl.value);

    // Analyze Number and display results
    document.getElementById('sign').innerHTML = getSign(numInput);
    document.getElementById('even-odd').innerHTML = evenOrOdd(numInput);
    document.getElementById('multiple').innerHTML = multipleOf10(numInput);
}


// Analyze Functions
function getSign(num) {
    if (num > 0) {
        return 'pos';
    } else if (num < 0) {
        return 'neg';
    } else {
        return 'zero';
    }
}

function evenOrOdd(num) {
    if (num % 2 == 0) {
        return 'even';
    } else if ((num % 2 == 1) || (num % 2 == -1)) {
        return 'odd';
    } else {
        return 'n/a'
    }
}

function multipleOf10(num) {
    if (num % 10 == 0) {
        return true;
    } else {
        return false;
    }
}