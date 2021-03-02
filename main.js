'use strict';

function upperVar() {
  // Объявление (let = arr;) переменной arr
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Инициализация переменной arr
  // eslint-disable-next-line no-use-before-define
  if (top === undefined) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`Number: ${arr[i]}`);
    };
  }
  let top;
};

upperVar();
