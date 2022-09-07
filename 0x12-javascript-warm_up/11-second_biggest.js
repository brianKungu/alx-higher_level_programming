#!/usr/bin/node

// script that finds the second biggest integer in list of arguments passed to it.

if (process.argv.length < 4) {
  console.log("0");
} else {
  const args = [];

  for (let i = 2; i < process.argv.length; i++) {
    args[i - 2] = process.argv[i];
  }
  args.sort(function (a, b) {
    return b - a;
  });
  console.log(args[1]);
}

// function myFunction(a) {
//   console.log(a);
// }

// const number = 12;
// myFunction(number);

// let b = 1;

// function myFunction(a) {
//     console.log(a + b);
//     b = a;
// }
// myFunction(3);

// myFunction(4);
