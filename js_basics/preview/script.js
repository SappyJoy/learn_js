'use strict';

const btn = document.querySelector('button'),
  overlay = document.querySelector('.overlay');

/* Не использовать */
// btn.onclick = () => {
//   alert('click');
// };

// btn.addEventListener('click', () => {
//   alert('PROIGRAL');
// });

// btn.addEventListener('mouseenter', event => {
//   // btn.remove();
//   event.target.remove();
// });

let i = 0;
const deleteElement = e => {
  console.log(e.currentTarget);
  console.log(e.type);
  // i++;
  // if (i == 5) {
  //   btn.removeEventListener('click', deleteElement);
  // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', event => {
  event.preventDefault();
  console.log(event.target + ': Он нажал на меня');
});
