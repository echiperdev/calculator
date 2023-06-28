// CONSTANTS
/* Store DOM elements */
const operands = Array.prototype.slice.call(document.querySelectorAll('.operand'));
const operators = Array.prototype.slice.call(document.querySelectorAll('.operator'));
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalsButton = document.getElementById('.equals');
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
    // Some code;
}

// DELETE
/* @Object Prototype
/* Handles functionality of the 'Delete' (i.e. DEL) button */
Calculator.prototype.delete = function() {
    // Some code;
}

// APPEND
/* @Object Prototype
/* Handles functionality of the 'Operand' (i.e. number) buttons */
Calculator.prototype.append = function(number) {
    // Some code;
}

// OPERATE
/* @Object prototype
/* Handles functionality of the 'operator' buttons */
Calculator.prototype.operate = function(operation) {
    // Some code;
}

// COMPUTE
/* @Object prototype
/* Computes single value to be display */
Calculator.prototype.compute = function() {
    // Some code;
}

// ** UPDATE
/* @Object prototype
/* Displays alpha(previous calculation) and omega (latest calculation) results */
Calculator.prototype.update = function() {
    // Some code
}

// Create new instance of CALCULATOR object
const calculator = new Calculator(previousOperandElement, currentOperandElement);