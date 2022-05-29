
let countValue2 = new Promise(function (resolve, reject) {
    if (0) {
        console.log("async1.1 - ");

        resolve("RESOLVE");

    } else {
        console.log("async1.2 - ");

        reject("REJECT");

    }
});

console.log("async1 - " + countValue2);
// countValue2.then(fun = (a,b) => {
//     console.log("countValue2 promise THEN\t" + a +"\t ||| " + b);
// })
let c = countValue2.catch(function f(a,b){
    console.log("async2\t" + a +"\t ||| " + b);
})

console.log("sync1\t" +"\t ||| ");
console.log("sync2\t" + c +"\t ||| ");

//////////////////////////////////////////////////////////////////////////////////////////////////

console.log("\n\n\n" +"\t ||| \n\n\n ");

// returns a promise
let countValue = new Promise(function (resolve, reject) {
    // could be resolved or rejected   
    console.log("async3.1\t");
    resolve('countValue resolved');
    console.log("async3.2\t");


});
 console.log("sync3.1\t" + countValue +"\t ||| ");

let retA = countValue.then(
    function successValue(result) {
        console.log('Async3 : .' +result);
    },
 )
 console.log("sync3.2\t" + retA +"\t ||| ");

// .catch(
//     function errorValue(result) {
//         console.log(result);
//     }
// ); 
let retB =countValue.finally(
    function greet(result) {
        console.log('Async4 : .' + result);
    }
);
 console.log("sync4\t" + retB +"\t ||| ");

//////////////////////////////////////////////////////////////////////////////////////////////////

console.log("\n\n\n" +"\t ||| ||| ||| ||| ||| ||| \n\n\n ");

// returns a promise
// let countValue3 = new Promise(function (resolve, reject) {
//   reject('countValue3 rejected'); 
// });

// // // executes when promise is resolved successfully
// countValue3.then(
//     function successValue(result) {
//         console.log(result);
//     },
//  )

// // // executes if there is an error
// .catch(
//     function errorValue(result) {
//         console.log(result);
//     }
// );

//////////////////////////////////////////////////////////////////////////////////////////////////
