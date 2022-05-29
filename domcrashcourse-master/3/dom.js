// Examine the document object
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// // document.title = 'New title!';
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// getElementById
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'New title!';
// headerTitle.innerText = 'Another new title!';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Yet another title!</h3>'
// header.style.borderBottom = 'solid 3px #000';

// getElementsByClassName
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'New text!';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // change the style of all list items
// for (i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'green';
// }

// // getElementsTagName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'New text!';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // change the style of all list items
// for (i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'green';
// }

// querySelector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// querySelectorAll
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'this is new!';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for (i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// Traversing the DOM
// var itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement.parentElement);

// childNodes (firstChild will show line breaks as text nodes)
// console.log(itemList.childNodes);
// children doesn't!
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild (firstChild will show line breaks as text nodes)
// console.log(itemList.firstChild);
// // firstElementChild doesn't!
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'New text!';

// // lastChild (lastChild will show line breaks as text nodes)
// console.log(itemList.lastChild);
// // lastElementChild doesn't!
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'New text!';

// nextSibling (nextSibling will show line breaks as text nodes)
// console.log(itemList.nextSibling);
// // nextElementSibling doesn't
// console.log(itemList.nextElementSibling);

// // previousSibling (previousSibling will show line breaks as text nodes)
// console.log(itemList.previousSibling);
// // previousElementSibling doesn't
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// create a div
// var newDiv = document.createElement('div');
// // add a class
// newDiv.className = 'hello';
// // add id
// newDiv.id = 'hello1';
// // add attribute
// newDiv.setAttribute('title', 'Hello Div');
// // create text node
// var newDivText = document.createTextNode('Hello world');
// // add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// Events

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>';
//     // console.log(e.type);
//     // // from the window
//     // console.log(e.clientX);
//     // console.log(e.clientY);
//     // // from the element
//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// }

var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);


function runEvent(e) {
    e.preventDefault();
    console.log('Event type: ' + e.type);

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';
    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>';
    // document.body.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 40)';
}