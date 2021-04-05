/* eslint-disable max-len */
'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';

const checkPin = (...code) => code.join('') === EXPECTED_PIN;

const Pre = function(number) {
    this.value = number;
};

Pre.prototype.press = function(numberPlus) {
    this.value += numberPlus;
    if (this.value.split('').length < 4) {
        return this;
    } else return checkPin(this.value);
};

const press = new Pre('4')
    .press('9')
    .press('6')
    .press('7');

console.log(press);
