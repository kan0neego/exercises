'use strict';

const contact = [
    { name: 'Tim', number: '+2312354213213' },
    { name: 'Roman', number: '+0353333435' },
    { name: 'Kim', number: '+0964435345345' },
    { name: 'Badik', number: '+5632423492349' },
];

const findPhoneByName = name => {
    if (typeof name !== 'string') throw new Error('It isn\'t string');
    for (let obj of contact) {
        if (obj.name === name) return [obj.number];
    };
    throw new Error(`${obj.name} don't exist!`);
};

console.log(findPhoneByName());
