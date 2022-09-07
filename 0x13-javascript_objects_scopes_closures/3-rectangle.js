#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w && h > 0) {
      this.w = width;
      this.h = height;
    }
  }

  print() {
    let rows = "X";
    for (let i = 0; i < this.width - 1; i++) {
      rows += "X";
    }
    for (let j = 0; j < this.height; j++) {
      console.log(rows);
    }
  }
}
