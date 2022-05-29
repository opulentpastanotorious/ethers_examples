/*
Promise objects ALWAYS RETURN BEFORE then, catch, finally are executed.
Thus  then, catch, finally CAN ONLY EXECUTE after all sync event loop tasks
are finished. 
*/

let countValue2 = new Promise(function (resolve, reject) {
    if (0) {
        console.log("async1.1 - ");

        resolve("RESOLVE");

    } else {
        console.log("async1.2 - ");

        reject("REJECT");

    }
});
let c1 = countValue2.then(function f(a,b){
    console.log("async111\t" + a +"\t ||| " + b);
})
.catch(function f(a,b){
    console.log("async222\t" + a +"\t ||| " + b);
})
 
console.log("async1 - " + countValue2);
 
console.log("sync1\t"  + c1 + "\t ||| ");
// console.log("sync2\t" + c +"\t ||| ");

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


// returns a promise
let countValue3 = new Promise(function (resolve, reject) {
  reject('countValue3 rejected'); 
});

 console.log("sync4.1\t" + countValue3 +"\t ||| ");
console.log("\n\n\n" +"\t ||| ||| ||| ||| ||| ||| \n\n\n ");

// // // executes when promise is resolved successfully
countValue3.then(
    function successValue(result) {
        console.log("async 5.1" +result);
    },
 )

// // // executes if there is an error
.catch(
    function errorValue(result) {
        console.log("async 5.2" +result);
    }
);

//////////////////////////////////////////////////////////////////////////////////////////////////
