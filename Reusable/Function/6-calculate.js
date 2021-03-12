'use strict';

const average = (a, b) => (a + b) / 2;

const mFunc = x => y => Math.pow(x, y);


const calculate = () => {
    const arrayCount = [];
    for (let i = 0; i < 10; i++) {
        const square = mFunc(i)(2);
        const cube = mFunc(i)(3);
        arrayCount.push(average(square, cube));
    };
    return arrayCount;
};

console.log(calculate());
