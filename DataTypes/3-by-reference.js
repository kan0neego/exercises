'use strict';

const Num = { n: 5 };

const inc = obj => {
    if (typeof obj === 'object') {
        obj.n++;
    }
};

inc(Num);

console.dir(Num);
