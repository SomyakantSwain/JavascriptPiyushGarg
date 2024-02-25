// composition
function add(a, b) {
  return a + b;
}
function square(val) {
  return val * val;
}
function multiply(a, b) {
  return a * b;
}

// function composeTwoFunction(fn1, fn2) { // composing two function
//   return function (a, b) {
//     return fn2(fn1(a, b));
//   };
// }
//const composeTwoFunction = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

function compose(...fns) {
  return function (...value) {
    return fns.reduceRight((a, b) => b(a), values);
  };
}

const task = composeTwoFunction(multiply, square);
console.log(task(2, 4));
