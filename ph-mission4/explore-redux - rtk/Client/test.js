import { produce } from "immer";
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

// mutable function example

const employee = {
  name: "John Doe",
  age: 30,
  address: {
    country: "USA",
    city: "New York",
  },
};

// const employee2 = employee; // point to the same object
// employee.name = "Jane Doe";

// const employee2 = { ...employee, name: "Jane Doe" };

const employee2 = produce(employee, (draft) => {
  draft.name = "Jane Doe";
  draft.address.city = "San Francisco";
});

console.log(employee);
console.log(employee2);

// currying / Function composition

function addCurried(a) {
  return function (b) {
    return a + b;
  };
}

const addCurried2 = (a) => (b) => a + b;

console.log(addCurried(0)(1));
console.log(addCurried2(0)(1));

// const totalPrice = (amount, discount) => {
//   return amount - amount * discount;
// };
// console.log("totalPrice", totalPrice(100, 0.1));

const totalPrice = (discount) => (amount) => amount - amount * discount;
const withDiscount = totalPrice(0.1);

console.log("withDiscount", withDiscount(100));
console.log("withDiscount", withDiscount(200));
console.log("withDiscount", withDiscount(300));
