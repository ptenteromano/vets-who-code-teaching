// Pass by reference
// vs.
// Pass by value

// O(n^2)
// Do not manipulate the current array!
// Return a new, sorted array
const bubbleSort = (arr) => {
  // Make a copy of array, NEW memory address
  const sortedArr = [...arr]; // pass by value

  const len = arr.length;
  let totalSwaps = 0;

  let leftValue, rightValue;

  for (let idx = 0; idx < len; idx++) {
    let singleTraversalSwap = 0;

    // "Bubble"
    for (let bubble = 0; bubble < len - 1; bubble++) {
      leftValue = sortedArr[bubble];
      rightValue = sortedArr[bubble + 1];

      if (leftValue > rightValue) {
        // Swap the values
        sortedArr[bubble] = rightValue;
        sortedArr[bubble + 1] = leftValue;

        singleTraversalSwap++;
      }
    }

    totalSwaps += singleTraversalSwap;

    console.log("Traversing..", singleTraversalSwap);

    if (singleTraversalSwap === 0) break;
  }

  console.log("Total # of bubbles", totalSwaps);
  return sortedArr;
};

const orig = [99, 2, 1, 8, 3, 10];

const sorted = bubbleSort(orig);

console.log("original", orig);
console.log("sorted", sorted);



// ----------------------------------------------------------------

/**
 *
 * Matching Brackets
 *
 * function - take Any string
 *
 * Iterate over the string
 *
 * Return whether the string is a valid string with correct matching brackets
 * string w/ no brackets is fine
 *
 * Use a stack!
 * const stack = [];
 *
 * stack.push('{')
 *
 * stack.pop();
 *
 * // for loop up here w/ idx iterator
 * let char = str.charAt(idx);
 * str[idx]
 *
 *
 *
 *
 */


 []
 {}
 ()

 ["hi"[{
 }]][ } ]
