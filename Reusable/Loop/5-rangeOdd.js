'use strict';

const rangeArray = function(start, end) {

    if (typeof start !== 'number' || typeof end !== 'number') {
        throw new Error('It isn\'t number');
    };

    const aRange = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) aRange.push(i);
    };

    return aRange.slice(15, 30);
};

console.log(rangeArray(1, 56));
