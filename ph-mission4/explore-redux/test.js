// Pure function example
function add(a, b) {
  return a + b;
}

console.log(add(0, 1));
console.log(add(1, 1));

// Impure function example

const total = 0;
function addTotal(amount) {
  return total + amount;
}

console.log(addTotal(0));
console.log(addTotal(1));
