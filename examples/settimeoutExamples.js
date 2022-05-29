function f9(str) {
  console.log(`f9 START`);
  console.log(str);
  str = "f9 msg";
  console.log('f9 msg: ' + str); 
  // console.log(str);
  console.log(`f9 END`);
}



function f8(a) {
  let msg1;
  console.log("f6 START");

  let intervalId = setTimeout(function() {f9(msg1)}, a*1000);
  // console.log("typeof(intervalId)" + typeof(intervalId));
  console.log('Id: ' + intervalId);   
  console.log('f8 msg: ' + msg1);   
  
  let intervalId2 = setTimeout(f9.bind(msg1), a*1000);
  console.log('Id: ' + intervalId);   
  console.log('f8 msg: ' + msg1); 

  // msg1  = "f6 END";
  console.log("f6 END");
};



// let intervalId = setTimeout(function() {f9("param")}, a*1000);

