'use strict';

const fn = () => {
    const obj1 = { name: 'Tim' };
    let obj2 = { name: 'Tim' };

    obj1.name = 'Artem';
    obj2.name = 'Artem';

    return [obj2, obj1];
};

console.log(fn());
