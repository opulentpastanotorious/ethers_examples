function sleep(duration, flag) {
    return new Promise(function (resolve, reject) {
      console.log("b");
      console.log(duration);
        if (flag)
        {
          resolve("成功le");
          resolve("成功le2");
        }

      setTimeout(function () {
        console.log("ccc");
        console.log(duration);
        if (!flag) {
          reject("yay2");
        }
        console.log("bbb");
      }, duration);
    });
  }
  console.log("a");
  
  // not calling resolve doesn't print following
  let c= sleep(5000,true).then((value) => {
    console.log(value);
    console.log("c");
  });
  console.log(c);

  let d = sleep(1000,false).catch((value) => {
    console.log(value);
    console.log("d");
  });
  console.log(d);

  
/*
CORESPONDING OUTPUT

a
b
5000
promise
b
1000
promise


*/