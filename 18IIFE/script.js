//An IIFE (Immediately Invoked Function Expression) is a JavaScript
//function that runs as soon as it is defined

// (function add(a, b) {
//   let age = 10;
//   console.log(a + b);
// })(2, 3);

// (function say() {
//   console.log("hey");
// })();

// //es6
// (() => console.log("I am es6"))();
// const value = (() => 100)();
// console.log(value);

//Execute  an async function
// const data =(async ()=>  await fetch ())();

const atm = function (intisalBalance) {
  let balance = intisalBalance;
  function withDraw(amt) {
    if (amt > balance) {
      return "are you kidding ";
    } else {
      balance -= amt;
      return balance;
    }
  }
  return { withDraw };
};
const Somya = atm(1000);
console.log(Somya.withDraw(100));
console.log(Somya.withDraw(1000));
