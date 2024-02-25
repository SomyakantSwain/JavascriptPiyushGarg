const students = ["Somya", "Jin", "John"];
// for (let index = 0; index < students.length; index++) {
//   const element = students[index];
//   console.log(element);
// }

// students.forEach((val) => { // for each
//   console.log(val);
// });
// students.forEach((val) => console.log(val)); // one liner function
// students.map((val) => console.log(val)); // map function

const numb = [1, 2, 3, 4, 5];
// let newArr = [];
// num.forEach((val) => newArr.push(val * 2));
// console.log(newArr);
// function double(n) {
//   return n * 2;
// }s
// let n = num.map(double);
// console.log(n);
// let ans = numb.find((num) => num === 4);
// console.log(numb[ans]);
// let ans = students.findIndex((val) => val === "Jin");
// console.log(students[ans]);
// console.log(numb.includes(3));

// const newArr = numb.filter((num) => num % 2 == 0);
// console.log(newArr);
// let newArr = numb.slice(1, 4);
// console.log(newArr);
let newArr = numb.splice(1, 4);
console.log(newArr);
console.log(numb);
