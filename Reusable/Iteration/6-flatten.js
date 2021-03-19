'use strict';

let doubleArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flatt = x => {
    let flatten = x.flat();
    let count = 0;
    for (let i of flatten) {
        if (i > count) count = i;
    };

    return count;
};


console.log(flatt(doubleArray));
