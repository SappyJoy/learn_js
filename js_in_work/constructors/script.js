'use strict';

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

User.prototype.exit = function (name) {
  console.log(`${this.name} logging out...`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.exit();
