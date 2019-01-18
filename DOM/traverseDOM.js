let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes , it counts break the new line
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

//1- Element
//2 - Attribute
//3- Text node
//8-comment
//9- document itself
//10- Doctype

//Get children element nodes
// val = list.children;

console.log(val);