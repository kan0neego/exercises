'use strict';

// let esp = 'espresso';

const coffee = (type, sugar) =>
    `Order: Coffe. Type: ${type} Sugar: ${sugar}`;

const defineTypeCoffee = type => sugar => coffee(type, sugar);

const espresso = defineTypeCoffee('Espresso');

console.log(espresso(46));
