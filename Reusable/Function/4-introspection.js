'use strict';

const iframe = {
    m1: x => [x],
    m2(x, y) {
        return [x, y, z];
    },
    m3(x, y) {
        return [x, y, z];
    },
    m41: 'string',
    m4(x, y, z, i, k) {
        return [x, y, z];
    },
    m4(x, y, z, i, k) {
        return [x, y, z];
    },
};

const introspection = obj => {
    let amountArg = [];
    for (let objName of Object.keys(obj)) {
        if (typeof(obj[objName]) === 'function') {
            let length = obj[objName].length;
            amountArg.push(length);
        } else {
            console.log(`${objName} not't a function!\n`);
        };
    };

    return amountArg;
};

console.log(introspection(iframe));
