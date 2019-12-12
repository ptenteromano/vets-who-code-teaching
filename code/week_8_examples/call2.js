// sandwich outputs

function A(n) {
  console.log("A");
  return B(n);
}

function B(n) {
  console.log("B");
  return n ** 2;
}

console.log(A(5));
