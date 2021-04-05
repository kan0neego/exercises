'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Define function curry that accepts the length of the function
// (amount of function arguments) and the function.

const curry = (length, callback) => (...args) => {
    if (args.length < length) {
        let f = callback.bind(null, ...args);
        return curry(length - args.length, f);
    } else return callback(...args);
};

const press = curry(4, checkPin);

console.log(press(4)(9)(6, 7));
console.log(press(4, 9, 6, 7));
console.log(press(1, 9, 6)(7));
console.log(press(1, 9)(6)(7));
