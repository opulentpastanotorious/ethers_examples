// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
    console.log('Hello world2');

}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 10000, 'John', sayName);

for (let i = 1; i < 11; i++) {
//   sleep(5000).then(() => { console.log(`${i} sec`); });
  console.log(`${i} sec`);
  sleepBlock(1000);
//   .then(() => console.log('world!'))
//   .then(() => sleepBlock(2000))
//   .then(() => console.log('Goodbye!'))
  
}


function sleepNonblock(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function sleepBlock(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


/*
    output?
    ~ 2 sec wait
    Hello world
    Hello John
    Hello world2
*/