'use strict';

const sum = (...args) => {
    let iterFor = 0;
    for (let i = 0; i < args.length; i++) iterFor += args[i];

    return iterFor;
};

console.log(sum(1, 2, 3, 4));
