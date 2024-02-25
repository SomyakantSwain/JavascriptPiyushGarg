let age = 22;
//  if (age>=18) {
//     console.log('yes you can vote');
//  } else{
//     console.log('no you cant');
//  }
//  age = 90
//  if (age>=18) {
//     console.log('yes  are an adult ');
//  }
//   else if(age >= 80){
//     console.log(' you are old now ');
//  } else{
//  console.log( ' you are not an adult');
//  }

// Ternary Opearator

// age>=18 ?console.log("yes you are an adult"):console.log('you are not');

// ------------------Switch Case --------------

// const opt = 3;
// switch (opt) {
//   case 1:
//     console.log("Namaste");
//     break;
//   case 2:
//     console.log("Hello");
//     break;
//   case 3:
//     console.log("Bonjor");
//     break;
//   default:
//     console.log("Invalid opt ");
// }

let a = 30;
let opt = "+";
let b = 40;

switch (opt) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  default:
    console.log("IDK");
}
