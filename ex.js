const myArray = ['zero', 'one', 'two'];
const myBoundMethod = (function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
}).bind(myArray);

myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
myBoundMethod(1); // prints "one"
setTimeout(myBoundMethod, 1.0 * 1000); // still prints "zero,one,two" after 1 second because of the binding
setTimeout(myBoundMethod, 1.5 * 1000, "1"); // prints "one" after 1.5 seconds



////////////////////////////////////////////////////////////////////////


// returns htmlCollection list

let htmlCollection_list = document.getElementsByClassName('list-group-item')
let item1 = htmlCollection_list.item(1);


////////////////////////////////////////////////////////////////////////

const node = document.createElement("li");

document.addEventListener("DOMContentLoaded", function (event) {
    for (let i = 1; i < (htmlCollection_list.length) + 1; i++) {
        node.innerText = `node${i}`
        htmlCollection_list[i].append(node)
    }
});

