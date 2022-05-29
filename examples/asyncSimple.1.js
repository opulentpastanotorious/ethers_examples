// https://eth-mainnet.alchemyapi.io/v2/hWCb3FL7QO8jFfQMOk3pGYiPVEcjbKNN
// setTimeout()

function f(a,b,c) {}

let f1 = (a,b,c) =>{}


function f9(str) {
  console.log(`f9 START`);
  str = "f9 msg";
  console.log(str);
  console.log(`f9 END`);
}



function f8(a) {
  let msg1;
  console.log("f6 START");

  let intervalId = setTimeout(f9, a*1000);
  // console.log("typeof(intervalId)" + typeof(intervalId));
  console.log('Id: ' + intervalId);   

  console.log('f8 msg: ' + msg1);   

  // msg1  = "f6 END";
  console.log("f6 END");
};




// f8(5);
// console.clear();

// let callAfun3 = (x) => {
//   setTimeout((x) => {
//   console.log(`Delayed for ${x} second.`);
// }, x)
// }

// let afun2  = setTimeout((x) => {
//   console.log("Delayed for ${x} second.");
// }, x)

// const cars = ["Saab", "Volvo", "BMW"];
// let text = cars[2] + "<br>";

// console.log(text);

// for (let i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }

// console.log(text);

let a = (func) => {
    console.log("a() START");
  func();
      console.log("a() END");

}

function b() {
  console.log("b function");
}

a(afun1);
a(b);

// call async function from function 

// let c = () => {  console.log("c function");
//   // const input = prompt();
//   const input = prompt("What's your name?");
//   alert(`Your name is ${input}`);
// }

// c();  