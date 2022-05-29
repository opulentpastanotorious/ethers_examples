//javascript pass by reference
function callByReference(varObj) {

    console.log("Inside Call by Reference Method");

    varObj.a = 100;

    console.log(varObj);

}

let varObj = {
    a: 1,
    b:2
};

console.log("Before Call by Reference Method");

console.log(varObj);

callByReference(varObj)

console.log("After Call by Reference Method");

console.log(varObj);
