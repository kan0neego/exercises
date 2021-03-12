'use strict';

const createUser = (name, city) => {
    const obj1 = { name: null, city: null };
    obj1.name = name;
    obj1.city = city;

    return obj1;
};

console.log(createUser('Tim', 'Russia'));
