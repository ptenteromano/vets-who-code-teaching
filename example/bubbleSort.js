// Teach:
// - Pass by reference vs pass by value
// - "Swap"
//

// O(n^2)
const bubbleSort = (arr) => {
  const sortedArr = [...arr];
  const len = arr.length;
  let temp;

  for (let idx = 0; idx < len; idx++) {
    let singleSwapTraversals = 0;

    // "Bubble" 
    for (let bubble = 0; bubble < len - 1; bubble++) {
      if (sortedArr[bubble] > sortedArr[bubble + 1]) {
        // Perform an in-place swap
        temp = sortedArr[bubble];
        sortedArr[bubble] = sortedArr[bubble + 1];
        sortedArr[bubble + 1] = temp;

        singleSwapTraversals++;
      }
    }

    // done early if no swaps were made on any single traversal
    if (singleSwapTraversals === 0) break;
  }

  return sortedArr;
};

const original = [5, 8, 10, 2];
const sorted = bubbleSort(original);

console.log("original", original);
console.log("sorted", sorted);
