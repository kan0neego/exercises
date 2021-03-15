'use strict';

const fnRandom = (max, min = 0) => {
    if (max === undefined) max = min;
    const count = Math.floor(Math.random() * (max - min) + min);
    return count;
};

console.log(fnRandom(25));
