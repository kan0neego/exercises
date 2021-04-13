'use strict';

const array = (data = []) => {
    const get = i => data[i];
    get.push = x => data.push(x);
    get.pop = () => data.pop();
    return get;
};

const arr = array();

console.log(arr.push('first'));
console.log(arr.push('second'));
console.log(arr.pop());
console.log(arr(0));
