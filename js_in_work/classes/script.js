'use strict';

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showProps() {
    console.log(
      `Text: ${this.text}\nBackground color: ${this.bgColor}\nHeight: ${this.height}\nWidth: ${this.width}`,
    );
  }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());

const div = new ColoredRectangleWithText(100, 250, 'Smile', 'Green');
div.showProps();
