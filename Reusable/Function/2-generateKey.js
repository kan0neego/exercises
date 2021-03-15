'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, characters) => {
    let arrayRandomValue = '';
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * characters.length);
        arrayRandomValue += characters[random];
    };

    return arrayRandomValue;
};

console.log(generateKey(14, characters));
