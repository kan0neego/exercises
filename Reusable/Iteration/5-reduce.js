'use strict';

const sum = (...args) => {
    let iterDoWhile = args.reduce((x, y) => x + y);

    return iterDoWhile;
};

console.log(sum(10, -1, -1, -1));
