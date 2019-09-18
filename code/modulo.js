// Day 3
// Part 1

// Circular array
// Using one loop, print contents of an array four times

greets = ["hi", "hello", "hey"];

function circularArray(arr, numLoops) {
  let len = arr.length;
  let i = 0;

  while (i < len * numLoops) {
    let index = i % len;

    console.log(arr[index]);
    i++;

    // little extra for readability
    if (i % len == 0) {
      console.log("Iteration Done");
    }
  }
}

circularArray(greets, 4);

// The big O!?
// O(4n) == O(n)

// O(m * n)

// Since the second parameter is just a scaling "constant",
// it does not have a large effect and we can ignore it
