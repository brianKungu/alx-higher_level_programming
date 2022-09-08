#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w && h > 0) {
      this.w = width;
      this.h = height;
    }
  }

  print() {
    console.log(
      ("X".repeat(this.width) + "\n").repeat(this.height - 1) +
        "X".repeat(this.width)
    );
  }
};
