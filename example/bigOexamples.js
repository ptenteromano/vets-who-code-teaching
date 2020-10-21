greets = ["hi", "hello", "hey"];

function circularArray(arr, numLoops) {
  let len = arr.length;
  let i = 0;

  // "i" can grow to infinity,
  // but "index" will always be bounded by the array length
  while (i < len * numLoops) {
    const index = i % len;

    console.log(arr[index]);
    i++;

    if (index === len - 1) console.log("---------");
  }
}

circularArray(greets, 4);

// A calls B, but A cannot finish until B finishes
// This is the "call stack", with "sychronous" javascript
// A is placed on the call stack, then B is called within A.
// B is placed ontop of the call stack and is allowed to finish.
// B then then pops off the call stack, now A is at back at the top
// A is now allowed to finish.

// Try to guess what the output will be in order.
function A(k) {
  console.log("A");
  const result = B(k);

  return result - 1;
}

function B(k) {
  console.log("B");
  return k ** 2;
}

console.log(A(5));

console.log("hi" === 3);
