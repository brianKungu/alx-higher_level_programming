#!/usr/bin/node
// function factorial(n) {
//   if (n < 0) {
//     return -1;
//   }
//   if (n === 0 || isNaN(n)) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(Number(process.argv[2])));

function Factorial(num) {
  var factors;
  if (num === 0) {
    return 1;
  } else {
    return num * Factorial(num - 1);
  }
}

console.log(Factorial(10));
