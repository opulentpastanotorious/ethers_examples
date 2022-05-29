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
var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'this is new!';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for (i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}

