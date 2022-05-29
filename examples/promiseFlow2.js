function sleep(duration) {
  return new Promise(function (resolve, reject) {
    console.log("b");
    setTimeout(function () {
      console.log("ccc");
      // resolve("成功le");
        reject('reject!');
      console.log("bbb");
    }, duration);
  });
}
console.log("a");

sleep(5000).then((value) => {
   console.log(value);
  console.log(".then end");
})
.catch((err) => {
   console.log(err);
  console.log(".catch end");

});


/*
a
b
~ 5 sec pass
ccc
bbb
undefined
成功le
c
*/