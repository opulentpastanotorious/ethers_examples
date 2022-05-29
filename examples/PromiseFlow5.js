function sleep(duration) {
    return new Promise(function (resolve, reject) {
      console.log("b");
        console.log(duration);

      setTimeout(function () {
        console.log("ccc");
        console.log(duration);
        // resolve("成功le");
        console.log("bbb");
      }, duration);
    });
  }
  console.log("a");
  
  // not calling resolve doesn't print following
  let c= sleep(5000).then((value) => {
    console.log(value);
    console.log("c");
  });
  
  let d = sleep(1000).catch((value) => {
    console.log(value);
    console.log("c");
  });
  console.log(c);
  console.log(d);

  
/*
CORESPONDING OUTPUT

a
b
5000
b
1000
Promise { <pending> }
Promise { <pending> }
ccc
1000
bbb
ccc
5000
bbb

*/