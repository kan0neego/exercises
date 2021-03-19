'use strict';

const sum = (...args) => {
    let iterForOf = 0;
    for (let b of args) iterForOf += b;

    return iterForOf;
};

console.log(sum(10, -1, -1, -1));
