//Event Listener
//I want to clear tassks.

// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//   console.log('Hello World');
  
//   const li = document.querySelectorAll('li');
  
//   for(let i = 0; i < li.length; i++){
//     li[i].remove();
//   }
  
//   console.log(li);

//   e.preventDefault();
// });


// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//   let val;
//   val = e;

//   //Event target element
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;

//   // e.target.innerText = 'Hello';

//   //Event type
//   val = e.type;

//   //Time Stamp
//   val = e.timeStamp;

//   //Coordinate relative to window
//   val = e.clientY;

//   console.log(val);
//   e.preventDefault();
// }


const clearBtn = document.querySelector('.clear-tasks');
const card = document. querySelector('.card');
const heading = document.querySelector('h5');

//Event handler
function runEvent(e){
  console.log(`EVENT TYPE : ${e.type}`);
  e.preventDefault();
}

// //click
// clearBtn.addEventListener('click', runEvent);

// //Double Click
// clearBtn.addEventListener('dbclick', runEvent);

// //Mouseover
// clearBtn.addEventListener('mouseover', runEvent);

//Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

//Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

//Mouseleave
// clearBtn.addEventListener('mouseleave', runEvent);
