'use strict';

const power = base => exp => Math.pow(base, exp);
const cube = power.bind(null, 3);

const sqr = power(2);
const cb = cube(3);

console.log(sqr(8));
console.log(cb(3));
