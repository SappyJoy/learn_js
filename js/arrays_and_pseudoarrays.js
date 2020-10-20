'use strict';

const arr = [1, 12, 23, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}

arr.pop();
arr.push(10);
arr.shift();
arr.unshift(4);

console.log(arr);

arr.forEach((item, i, arr) => {
  console.log(`${i}: ${item} in ${arr}`);
});

const str = 'test, hello, friend, snake, ball';
let products = str.split(',');
products = products.map((item) => {
  item = item.replace(/\s+/g, '');
  return item;
});

console.log(products);

products.sort();

const coolStuff = products.join(';\n');
console.log(coolStuff);
