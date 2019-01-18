// //Creat Element
// const li = document.createElement('li');

// //Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// //Add attribute
// li.setAttribute('title', 'New Item');

// //Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// //create new link element
// const link = document.createElement('a');

// //add class
// link.className = 'delete-item secondary-content';

// //add icon heml
// link.innerHTML = '<i class="fa fa-remove"></i>';

// //Append link to li
// li.appendChild(link);

// //Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);





//create li
const li = document.createElement('li');

//SEt class name
li.className = 'collection-item';

//Set title
li.title = 'newItem';

//Set content
li.appendChild(document.createTextNode("Hello World"));

//Create new link document
const link = document.createElement('a');

//set class name
link.className="delete-item secondary-content";

//set icon html
const icon = document.createElement('i');
//set class icon
icon.className = "fa fa-remove";

link.appendChild(icon);
li.appendChild(link);

//Set new li to ul
const ul = document.querySelector('ul.collection');
ul.appendChild(li);

console.log(ul);