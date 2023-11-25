function appendValue(val) {
    document.getElementById('result').value += val;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        const expression = document.getElementById('result').value;
        const result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
