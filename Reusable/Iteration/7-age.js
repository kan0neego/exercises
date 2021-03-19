'use strict';

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

const age = x => {
    const age = {};
    for (let i in x) {
        age[i] = x[i].died - x[i].born;
    }

    return age;
};

console.log(age(persons));
