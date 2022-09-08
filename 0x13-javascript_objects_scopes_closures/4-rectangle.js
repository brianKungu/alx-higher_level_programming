#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w && h > 0) {
      this.width = w;
      this.height = h;
    }
  }
  print() {
    let rows = 'X';
    for (let i = 0; i < this.width - 1; i++) {
      rows += 'X';
    }
    for (let j = 0; j < this.height; j++) {
      console.log(rows);
    }
  
  }

  rotate() {
    const wdh = this.w;
    const hgt = this.h;
    this.wdh = h;
    this.hgt = w;
  }

  double() {
    this.hgt *= 2;
    this.wdh *= 2;
  }
}
const r1 = new Rectangle(2, 3);
console.log("normal");
console.log(r1.double);
