// -- function s--
// function sayhello() {
//   console.log("hello Somya");
// }
// sayhello(); // calling of function

// parameters

// function add(a, b) {
//   console.log(a + b);
// }
// add(3, 5);
//////////////////////////

// function mul(a, b) {
//   return a * b; // returning the value
// }
// let c = mul(4, 3);
// console.log(c);

// Unlimited arguments
// function add() {
//   console.log(arguments); // "arguements" is a object in js which take unlimited arguements from the function
// }
// add(1, 2, 3, 4);

// function add() {
//   let ans = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     ans = ans + arguments[i];
//   }
//   return ans;
// }
// let res = add(1, 2, 3, 4, 5, 6, 7);
// console.log(res);

function addNumber(...numbers) {
  // Spread operator  it is very benificial
  // here instead of "numbers" you can  use any other name like Somya,Hero,Akash ,Dogg Etc
  let ans = 0;
  for (let i = 0; i < numbers.length; i++) {
    ans = ans + numbers[i];
  }
  return ans;
}

let res = addNumber(1, 2, 3, 4, 45);
console.log(res);
