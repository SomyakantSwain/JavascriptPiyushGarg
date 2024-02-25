// High order function and callback
// function  accept function as  arguements are called high order function
function add(a, b, cb) {
  let res = a + b;
  cb(res);

  return () => console.log(res);
}
let resultFunction = add(2, 4, () => {});
resultFunction();
