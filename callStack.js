// Day 2
// Part 1
// Simple Call Stack example

// Implement nested functions to test js call stack

function Outer() {
  Inner(10);
  console.log("Calling Outer!");
}

function Inner(num) {
  console.log(num * num);
  console.log("Inside!");
}

Outer();

// Back in global
console.log("Just calling inner...\n");

Inner(2);
