'use strict';

const sum = (...args) => {
    let iterWhile = 0;
    while (args.length > 0) {
        iterWhile += args.pop();
    }
    return iterWhile;
};

console.log(sum(10, -1, -1, -1));
