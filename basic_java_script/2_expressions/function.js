/**
 * Function Expressions vs Function Declarations:
*/

// A function expression. We assign a function to the variable num and use it to call the function.
var num = function message(x) {
    return x + x;
}
console.log("Function expression1: ", num(7)); // returns 14

// An anonymous function expression. Behaves exactly like a named function expression.
var num = function (x) {
    return x + x;
}
num(7); // returns 14
console.log("Function expression2: ", num(7)); // returns 14

// An Immediately Invoked Function Expression
(function () {
    console.log('Immediately Invoked Function Expression.');
})();

// Example of a function declaration. Function declarations always start with the function keyword.
function greet(message) {
    return "Hi " + message;
}
console.log("Function declaration: ", greet("Tung Nguyen"))