'use strict';

// Не верное решение задачи
const array = (arr = []) => ({
    push(value) { arr.push(value); },
    pop() { return arr.pop(); },
    toString() { return arr.join(', '); },
});

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(`${arr}`);
console.log(arr.pop());
console.log(`${arr}`);
console.log(arr.pop());
