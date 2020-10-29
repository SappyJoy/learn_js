'use strict';

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red',
  },
  makeTest: function () {
    console.log('Test');
  },
};

// console.log(options.name);

// for (let key in options) {
//   console.log(`${key}: ${options[key]}`);
// }
logObj(options);

/*
 *   Функция для полного вывода объекта в коносоль
 * */
function logObj(obj, tab = 0) {
  let tabs = '';
  for (let i = 0; i < tab; i++) {
    tabs += '  ';
  }
  console.log(tabs + '{');
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      console.log(tabs + '  ' + `${key}:`);
      logObj(obj[key], tab + 1);
    } else {
      console.log(tabs + '  ' + `${key}: ${obj[key]},`);
    }
  }
  console.log(tabs + '}');
}

console.log(Object.keys(options));

const { border, bg } = options.colors;
console.log(bg);
