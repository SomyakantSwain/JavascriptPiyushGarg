// Arrow Function

//  1.Syntax --------------
// function sayhello() { // Normal function
//   console.log(hello);
// }

// const sayHello = () => { //Arrow function
//   console.log("hey");
// };

// const add = (a, b) => {
//   return a + b;
// };

// const addv2 = (a, b) => a + b; // one linear fucntion
// console.log(addv2(3, 3));
// console.log(add(2, 3));
// sayHello();

// --------------------------

// 2. NO'arguements' keyword in Arrow Function only Spread operator

// Imp-- there is no "arguements" key word in arrow function you can only use spred opearator
// const sum = (...num) => {
//   console.log(num);
// };
// sum(2, 3, 4);

// 3. Hoisting
// in below we can see that function defined after function call, it is called hoisting ,it is just for normal function not for arrow function
// sayHello();
// function sayHello() {
//   console.log("hey");
// }
//-----------
//4.this keyword
// this is a global scoped for arrow function ,but local scoped for normal function
const obj = {
  value: 20,
  myFunction: function () {
    console.log("Value is " + this.value);
  },
};
obj.myFunction();
