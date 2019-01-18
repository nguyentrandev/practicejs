// I want to do with form
//everything i input new task add task
//it will print out

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

//Clear input
taskInput.value = '';

// taskInput.addEventListener('keyup', event);
// taskInput.addEventListener('keydown', event);
// taskInput.addEventListener('keypress', event);
// taskInput.addEventListener('blur', event);
// taskInput.addEventListener('focus', event);
// taskInput.addEventListener('cut', event);
// taskInput.addEventListener('paste', event);


function event(e){
  console.log(e.target.value);

  heading.innerText = e.target.value;
  // e.preventDefault();
}


console.log(taskInput.value);