// CONSTANTS
/* Store DOM elements */
const operands = Array.prototype.slice.call(document.querySelectorAll('.operand'));
const operators = Array.prototype.slice.call(document.querySelectorAll('.operator'));
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalsButton = document.getElementById('equals');
const previousOperandElement = document.getElementById('previous-operand');
const currentOperandElement = document.getElementById('current-operand');

//CALCULATOR
/* @Object Constructor Function
/* Stores calculator object properties */
function Calculator(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.previousOperand = '';
    this.currentOperand = '';
    this.operations = undefined;
}

// CLEAR
/* @Object Prototype
/* Handles functionality of the 'All Clear' (i.e. AC) button */
Calculator.prototype.clear = function() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.operation = undefined;
}

// DELETE
/* @Object Prototype
/* Handles functionality of the 'Delete' (i.e. DEL) button */
Calculator.prototype.delete = function() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
}

// APPEND
/* @Object Prototype
/* Handles functionality of the 'Operand' (i.e. number) buttons */
Calculator.prototype.append = function(number) {
    if (number === '.' && this.currentOperand.includes('.')) { // Set fractioning model
        return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
}

// OPERATE
/* @Object prototype
/* Handles functionality of the 'operator' buttons */
Calculator.prototype.operate = function(operation) {
    if (this.currentOperand === '') {
        return;
    }
    if (this.previousOperand !== '') {
        this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
}

// COMPUTE
/* @Object prototype
/* Computes single value to be display */
Calculator.prototype.compute = function() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const crnt = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(crnt)) {
        return;
    }
    if (crnt === 0 && this.operation == '÷') {
        alert('Yes. But why?');
        this.currentOperand = '';
        this.previousOperand = '';
        operation = undefined;
        return;      
    }
    switch (this.operation) {
        case '+':
            computation = prev + crnt;
            break;
        case '-':
            computation = prev - crnt;
            break;
        case '*':
            computation = crnt * crnt;
            break;
        case '÷':
            computation = prev / crnt;
            break;
        default:
            return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
}

// ** SEPARATE
/* @Object prototype
/* Splices numbers every 3 digits */
Calculator.prototype.separate = function(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
        integerDisplay = '';
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
    } else {
        return integerDisplay; 
    }
}

// ** UPDATE
/* @Object prototype
/* Displays alpha(previous calculation) and omega (latest calculation) results */
Calculator.prototype.update = function() {
    this.currentOperandElement.innerText = this.separate(this.currentOperand);
    if (this.operation != null) {
        this.previousOperandElement.innerText = `${this.separate(this.previousOperand)} ${this.operation}`;
    } else {
        this.previousOperandElement.innerText = '';
    }
}

// Create new instance of CALCULATOR object
const calculator = new Calculator(previousOperandElement, currentOperandElement);

// Add event listeners to OPERANDS buttons
operands.forEach(operand => {
    operand.addEventListener('click', () => {
        calculator.append(operand.innerText);
        calculator.update();
    })
});

// Add event listeners to OPERATORS buttons
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        calculator.operate(operator.innerText);
        calculator.update();
    })
});

// Add event listener to EQUALS button
equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.update();
});

// Add event listener to ALL CLEAR button
clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.update();
});

// Add event listener to DELETE button
deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.update();
});