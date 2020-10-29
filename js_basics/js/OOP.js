'use strict';

const soldier = {
  health: 400,
  armor: 100,
  sayHello: () => {
    console.log('Hello');
  },
};

const john = {
  health: 100,
};

/* Устаревший формат */
john.__proto__ = soldier;
console.log(john.armor);
john.sayHello();

// Динамический способ
const bob = {
  health: 50,
};

Object.setPrototypeOf(bob, soldier);
bob.sayHello();

// Современный способ
const rachel = Object.create(soldier);
