# PROJECT: CALCULATOR

This constitutes the final task of the **FOUNDATIONS** track of **THE ODIN PROJECT**. It was built using the **OBJECT PROTOTYPE** design pattern.

## FUNCTIONALITY

**Constants** store all responsive elements.

The **OBJECT CONSTRUCTOR** of the CALCULATOR object is a function which takes two arguments: the previous operand element and the current operand element, which it sets to emtpty strings alongside an undefined operation.

The **OBJECT PROTOTYPE** of the CALCULATOR object contains several methods:
* clear;
* delete;
* append;
* operate;
* compute;
* round;
* separate;
* update;

***CLEAR***

This method handles the functionality of the 'ALL CLEAR' (AC) button on the calculator's GUI. It is a function which resets the previous and current operands, as well as the operation to their initial state (i.e. the one specified in the constructor).

***DELETE***

This method handles the functionality of the 'DELETE' (DEL) button on the calculator's GUI. It is a function which converts teh current operand to a string and slices the last character.

***APPEND***

This method handles the functionality of the 'OPERAND' (number) buttons on the calculator's GUI. It is a function which takes a *number* as an argument, and appends it as a string to the current operand. If the operand is a '.' and if the current operand contains a '.' character, the function returns, thus allowing a single '.' (decimal) marker to be appended to the string.

***OPERATE***

This method handles the functionality of the 'OPERATOR' (mathematical notation signs) buttons on the calculator's GUI. It takes an 'operation' as an argument. It returns if the current operand is an empty string. If the previous operand is not emty, it employs the calculator's *COMPUTE* method.
Otherwise, it sets the previous operand value to the current operand's value when an operator button is pressed, and the current operand to an empty string.

***COMPUTE***

This method is employed when either an operator button or the 'EQUALS' ('=') buttons is clicked. Both previous and current operand strings are converted to float numbers. The function returns if either is not a number. If the current value is null and the operation is division, the function triggers an alert and resets the current and previous operands and the operation to the initial state prior to returning. Otherwise, a switch statement relative to the current operation is employed. The cases are basic arithmetic operations. Finally, the current operand is set to the value of the computation, the operation itself becomes undefined and the previous operand is an empty string.

***ROUND***

This method is employed when the number of decimals in the final result of the calculation exceeds 3 characters. It is invoked in the *COMPUTE* method.

***SEPARATE***

This method separates the integer part of a string every 3 characters, aiding in large number visualisation. It is invoked in the following method.

***UPDATE***

This method updates the calculator's display whenever a button is clicked.

**Event listeners** are attached to each button from the calculator's GUI.

**LIVE VERSION** https://echiperdev.github.io/calculator