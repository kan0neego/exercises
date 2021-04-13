'use strict';

const rangeArray = function(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        throw new Error('It isn\'t number');
    };
};

rangeArray(1, 2);
