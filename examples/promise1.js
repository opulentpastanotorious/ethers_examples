const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);



// let countValue2 = new Promise(function (resolve, reject) {
//     if (0) {
//         resolve("RESOLVE");
//     } else {
//         reject("REJECT");
//     }
// });

// console.log(countValue2);
// // countValue2.then(fun = (a,b) => {
// //     console.log("countValue2 promise THEN\t" + a +"\t ||| " + b);
// // })
// let c = countValue2.catch(function f(a,b){
//     console.log("countValue2 promise CATCH\t" + a +"\t ||| " + b);
// })

// console.log("promise recvd\t" +"\t ||| ");
// console.log("promise recvd\t" + c +"\t ||| ");



// returns a promise

let countValue3 = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

countValue3.then(fun = (a,b) => {
    console.log("promise recvd\t" + a +"\t" + b);
})
.then(fun = (a,b) => {
    console.log("promise recvd2\t" + a +"\t" + b);
})
.then(function f(a,b){
    console.log("promise recvd3\t" + a +"\t" + b);
})

