'use strict';

const box = document.getElementById('box'),
  buttons = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart');

console.dir(box);

box.style.background = '#36aaa5';

buttons[1].style.borderRadius = '100%';

box.style.cssText = 'background: pink; width: 10';

// for (let i = 0; i < circles.length; i++) {
//   circles.item(i).style.background = 'blue';
// }

// hearts.forEach(item => {
//   item.style.color = 'yellow';
// });
//
const div = document.createElement('div');
// const text = document.createTextNode('YOU WIN');
//
div.classList.add('black');
//
// document.body.append(div);
//
document.querySelector('.wrapper').append(div);

// document.body.prepend(div);
//
// circles[0].remove();
//
// hearts[0].replaceWith(circles[1]);

div.innerHTML = '<h1>HELLO WORLD</h1>';

// div.textContent = 'Hello';

div.insertAdjacentHTML('beforeend', '<i>Hello</i>');
