'use strict';

const sum = (...args) => {
    let iterDoWhile = 0;

    do {
        iterDoWhile += args.pop();
    } while (args.length > 0);

    return iterDoWhile;
};

console.log(sum(10, -1, -1, -1));
