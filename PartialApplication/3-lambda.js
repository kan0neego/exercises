'use strict';

let dateNew = new Date(), dateString = dateNew.toISOString().substring(0, 10);

const tagged = pref => str => `[${pref}] ${str}`;

const tagDate = tagged(dateString);

console.log(dateString);
console.log(tagDate('My String'));
