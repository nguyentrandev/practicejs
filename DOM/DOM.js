//Document Object Model
// Tree of nodes/elements created by the browser
//Js can be used to write/read/manipulate to the DOM
//Object oriented representation


let val;
val = document;
//get HTML collection
val = document.all;
val = document.all[2];
val = document.all.length; // length of elements
val = document.body;
val = document.URL;


val = document.forms;
val = document.forms[0].method;
val = document.forms[0].id;

val = document.links;
val = document.links[0].id;
val = document.links[0].classList[0];
val = document.links[0].className;

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

//
// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
//   console.log(script.getAttribute('src'));
// });

// console.log(val);

// console.log(document.getElementById('task-title'));

// //Get things from element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');


// //Change styling
// taskTitle.style.background = '#333'
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';

// //Change content
// taskTitle.textContent = "Task List";
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red"> Task List<span>';

// //document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// //Query selector select css styling
// document.querySelector('li').style.color = 'red';
// document.querySelector('li:last-child').style.color = 'blue';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').style.color = 'blue';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#ccc';


//document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';


// //find exact collection-item class in <ul>
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems.length); //5

//document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// //Convert HTML collection into array.
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

//document.querySelectorAll
const liOdd = document.querySelectorAll('li:nth-child(odd)');
console.log(liOdd);

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

const liEven = document.querySelectorAll('li:nth-child(even)');
console.log(liEven);
