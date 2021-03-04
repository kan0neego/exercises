'use strict';

const types = [
    true, 'hello', 5, 12,
    -200, false, false, 'word',
    undefined, [1, 'hey', 5, 7], { n: 5, b: 3, c: 8 }
];

const countOfTypes = {
    number: 0, string: 0, boolean: 0,
    undefined: 0, null: 0, object: 0
};

const countTypes = arr => {
    for (const typesArr in arr) {
        const nameOfTypes = typeof arr[typesArr];
        if (nameOfTypes in countOfTypes) countOfTypes[nameOfTypes]++;
        if (nameOfTypes === 'object') countTypes(arr[typesArr]);
    };
};

countTypes(types);
console.log(countOfTypes);
