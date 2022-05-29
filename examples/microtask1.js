console.log('script start');

setTimeout(function () {
  console.log('setTimeout0');
}, 0);

//Any additional microtasks queued during 
//microtasks are added to the end of the queue and also processed.

//promise1 and promise2 are logged before setTimeout,
//as microtasks always happen before the next task.
Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  })
  .then(function () {
      Promise.resolve()
    .then(function () {
      console.log('promise1.1');
      setTimeout(function () {
        console.log('setTimeout1');
      }, 0);
    })
    .then(function () {
      console.log('promise2.1');
      
    });
  })

Promise.resolve()
  .then(function () {
    console.log('promise3');
  })
  .then(function () {
    console.log('promise4');
  })
  .then(function () {
    setTimeout(function () {
      console.log('setTimeout2');
      }, 0);
      Promise.resolve()
    .then(function () {
      console.log('promise3.1');
    })
    .then(function () {
      console.log('promise4.1');
    });
  })
    
setTimeout(function () {
  console.log('setTimeout3');
}, 0);

console.log('script end');


/*
OUTPUT 

script start
script end
promise1
promise3
promise2
promise4
promise1.1
promise3.1
promise2.1
promise4.1
setTimeout
setTimeout1
setTimeout2

*/