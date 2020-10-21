// Close form
function sumFirstNClosed(n) {
  const numerator = n * (n + 1);

  return numerator / 2;
}

const sumFirstNIterative = (n) => {
  let sum = 0;

  for (let int = 1; int <= n; int++) {
    sum += int;
  }

  return sum;
};


function sumFirstNRecursive(n) {
  // base case
  if (n === 1) {
    return 1;
  }

  // recursive case - look back
  let recurse = sumFirstNRecursive(n - 1);

  // add to current value
  recurse += n;

  return recurse;

  // recursive case
  return sumFirstNRecursive(n - 1) + n;
}

const num = 55;
const closed = sumFirstNClosed(num);
const recursive = sumFirstNRecursive(num);
const test = closed === recursive;

console.log(closed);
console.log(recursive);
console.log(test);
