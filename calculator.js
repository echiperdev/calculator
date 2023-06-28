// CONSTANTS
/* Store DOM elements */
const operands = Array.prototype.slice.call(document.querySelectorAll('.operand'));
const operators = Array.prototype.slice.call(document.querySelectorAll('.operator'));
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalsButton = document.getElementById('.equals');
const previousOperandElement = document.getElementById('previous-operand');
const currentOperandElement = document.getElementById('current-operand');