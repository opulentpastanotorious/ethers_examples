const promise1 = new Promise((resolve, reject) => {
  reject('reject!');
});

promise1.then((value,) => {
  console.log(".then , "+value);
  // expected output: "Success!"
})
.catch((error) => {
  console.error(".catch , "+error);
});
// .catch((onRejected) => {
//   console.log(onRejected);
//   // expected output: "Success!"
// });