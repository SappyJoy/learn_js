'use strict';

const btns = document.querySelectorAll('button');
//
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
//
// if (btns[1].classList.contains('red')) {
//   console.log('red');
// }

const colors = ['red', 'blue', 'green', 'purple'];

btns.forEach(e => {
  e.addEventListener('click', () => {
    let color = colors[getRandomInt(colors.length)];
    const button = btns[getRandomInt(btns.length)];
    while (button.className == color) {
      color = colors[getRandomInt(colors.length)];
    }
    button.className = color;
  });

  e.addEventListener('hover', () => {});
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
