'use strict';

const c = 5;
const b = function inc(a) {
  return a;
}(c);

console.dir({ c, b });
