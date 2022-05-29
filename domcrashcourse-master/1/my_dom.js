
////////////////////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function (event) {

    let htmlCollection_list = document.getElementsByClassName('list-group-item')
    let item1 = htmlCollection_list.item(1);
    let listlen = htmlCollection_list.length;


    for (let i = 0; i < listlen; i++) {
        const node = document.createElement("li");
        node.innerText = `node${i + 1}`
        htmlCollection_list[i].append(node)
    }
});


////////////////////////////////////////////////////////////////////////


h2List = document.getElementsByTagName('h2');
console.log("h2List.length: " + h2List.length);

// querySelector selects 1st matching html tags ie h2 
document.querySelector('h2').length

// querySelectorAll selects all matching html tags ie h2 
/* 
{
    "0": {},
    "1": {}
}
*/
document.querySelectorAll('h2').length


// # selects by the element ID ie 
/* {
    "0": {}
    }
 */
document.querySelectorAll('#items')

// . selects by class name
document.querySelectorAll('.list-group-item')

/* 
{
    "0": {},
    "1": {},
    "2": {},
    "3": {}
}
 */


document.querySelectorAll('.list-group')[0].children
// HTMLCollection(4) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]

document.querySelectorAll('.list-group')[0].childNodes
// NodeList(9) [text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text]0: text1: li.list-group-item2: text3: li.list-group-item4: text5: li.list-group-item6: text7: li.list-group-item8: textlength: 9[[Prototype]]: NodeList

// removing the whitespace gets rid of the text node
// NodeList(8) [li.list-group-item, text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text]0: li.list-group-item1: text2: li.list-group-item3: text4: li.list-group-item5: text6: li.list-group-item7: textlength: 8[[Prototype]]: NodeList


////////////////////////////////////////////////////////////////////////

// iterate over children and siblings

let mainEle = document.getElementById('main');

// mainEle.children
// HTMLCollection(4) [h2.title, form.form-inline.mb-3, h2.title, ul#items.list-group, items: ul#items.list-group]
mainEle.children

// mainEle.childNodes shows all nodes including whitespace and inner text 
// NodeList(9) [text, h2.title, text, form.form-inline.mb-3, text, h2.title, text, ul#items.list-group, text]0: text1: h2.title2: text3: form.form-inline.mb-34: text5: h2.title6: text7: ul#items.list-group8: textlength: 9[[Prototype]]: NodeList
mainEle.childNodes


mainEle.parentElement // div.container

mainEle.parentNode // div.container



////////////////////////////////////////////////////////////////////////

// append to container div a copy of itself

let containerNodes = document.querySelectorAll('.container')

let containerClone = containerNodes[0].cloneNode(true);

// containerNodes

let firstContainer = containerNodes[0];

console.log(containerClone)

const node = document.createElement("li");
node.innerText = `NEW NODE`
console.log(node)

// document.insertBefore(node , containerNodes[containerNodes.length-1] );

// document.querySelector('.title').insertBefore(node)


document.getElementById('items').insertBefore(node, document.getElementById('items').firstElementChild)


////////////////////////////////////////////////////////////////////////

// insert before first node of list

