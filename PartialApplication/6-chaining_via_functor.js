'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';

const checkPin = (...code) => code.join('') === EXPECTED_PIN;

const press = (...args) => ({
    number: args,
    press(value) {
        this.number.push(value);
        if (this.number.length >= 4) return checkPin(...this.number);
        return this; // Ссылка на тот-же самый объект
    }
});

console.log(press(4).press(2).press(6).press(7));

