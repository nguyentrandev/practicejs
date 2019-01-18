//I want to change the Tasks Title to task listsss

const newHeading = document.createElement('h2');

//Add id
newHeading.id = 'task-title'; 

//Add text title
newHeading.appendChild(document.createTextNode("Tasks Lists"));

//Get the old heading
const oldHeading = document.getElementById('task-title');

//Select parent
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading);

////REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
lis[0].remove();

//Remove child element
list.removeChild(lis[3]);

//CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

// console.log(link);

let val;

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://gooogle.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title'); // check if it has href
link.removeAttribute('title');
val = link;


console.log(val);




