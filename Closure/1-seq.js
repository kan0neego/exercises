'use strict';

const seq = (...func) => value => {
    if (typeof value === 'number') {
        let num = value;
        for (let fn of func) {
            num = fn(num);
        }
        return num;

    } else {
        func.push(value);
        return seq(...func);
    };
};

console.log(seq(x => x * 2)(x => x + 7)(x => x + 3)(5));

// eslint-disable-next-line max-len
// const seq = f => g => (typeof g === 'number' ? f(g) : seq(x => f(g(x)))); // Альтернативное решение
