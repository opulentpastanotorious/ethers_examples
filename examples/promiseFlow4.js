function sleep(duration) {
    return new Promise(function (resolve, reject) {
      console.log("b");
      setTimeout(function () {
        console.log("ccc");
        // resolve("成功le");
        console.log("bbb");
      }, duration);
    });
  }
  console.log("a");
  
  // not calling resolve doesn't print following
  sleep(5000).then((value) => {
    console.log(value);
    console.log("c");
  });
  
  sleep(5000).catch((value) => {
    console.log(value);
    console.log("c");
  });
  
/*
CORESPONDING OUTPUT

a
b
b
ccc
bbb
ccc
bbb
*/