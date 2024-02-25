// JS Currying
// It is benifical when you want to make a function and want run the function
// when all the parameter are available

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
//const n = add(2)(0)(5);
// console.log(n);

// function sendAutoEmail(to) {
//   // this   code is not using es6 concept foro the es6 concept see below
//   return function (subject) {
//     return function (body) {
//       console.log(`sending email to ${to} with subject ${subject}:${body}`);
//     };
//   };
// }

// this code is written using using es6
const sendAutoEmail = (to) => (subject) => (body) =>
  `sending email to ${to} with ${subject}:${body}`;
let result = sendAutoEmail("somya@gmail.com");
let result2 = result("new order confirmation");
const res = result2("hey somya soomething is for you ");
console.log(res);
