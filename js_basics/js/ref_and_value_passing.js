'use strict';

/* Примитивные типы данных */
let a = 5,
  b = a;

b = b + 5;

console.log(a);
console.log(b);

/* Передача данных по ссылке в объектах */
const obj = {
  a: 5,
  b: 1,
};

const copy = obj;

copy.a = 10;
console.log(obj.a);
console.log(copy.a);

/* Поверхностное копирование */
function copyObj(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copyObj(numbers);
newNumbers.a = 7;
newNumbers.c.x = 10;
console.log(numbers);
console.log(newNumbers);

/* Глубокое копирование */
function deepCopyObj(obj) {
  let objCopy = {};

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      objCopy[key] = deepCopyObj(obj[key]);
    } else {
      objCopy[key] = obj[key];
    }
  }
  return objCopy;
}

const deepNumbers = deepCopyObj(numbers);
deepNumbers.c.x = 20;
console.log(numbers);
console.log(deepNumbers);

/* Копирование свойств в объект */
const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(numbers, add));

/* Копирование массивов */
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdlkfj';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
  blogs = ['wordpress', 'livejournal', 'blogger'],
  internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const arrayCopy = [...array];

const q = {
  one: 1,
  two: 2,
  three: {
    hey: 5,
    buy: 10,
  },
};

const newObj = { ...q };
newObj.three.buy = 20;
console.log(q);
console.log(newObj);
