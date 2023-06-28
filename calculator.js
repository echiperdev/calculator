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