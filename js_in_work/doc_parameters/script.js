'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');
const processBar = document.querySelector('.process');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.offsetWidth;
const height = box.offsetHeight;

console.log(width, height);

box.addEventListener('scroll', evt => {
  processBar.style.width =
    (box.scrollTop / (box.scrollHeight - box.clientHeight)) * 100 + '%';
});

btn.addEventListener('click', () => {
  console.log(box.scrollTop);
});

const style = window.getComputedStyle(box);
console.log(style);
