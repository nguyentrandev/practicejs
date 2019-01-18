//Person constructor
function Person(name, dob){
  this.name = name; //function scope
  // this.age = age;
  this.birthday = new Date(dob);
  this.getAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person('Brad', 20);
const Nguyen = new Person('Nguyen', '10/10/1989');
// console.log(Nguyen.birthday);

console.log(Nguyen.getAge());


// Built-in Constructor//
// primitive string, number, boolean, 
// slow down exec speed, more code, confusing ===
//NOT ADVISE to use

const name2 = new String('Jeff');
console.log(typeof name2) //object, not string 

const num1 = 5;
const num2 = new Number(5);
console.log(typeof num2); // object, not number


//Function
const getSum = function(x,y){
  return x + y;
}
console.log(getSum(1,1));

const getSum2 = new Function('x', 'y', 'return 1 + 1');
console.log(getSum2());

//Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john2);

//Array
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr2);

//Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\w+');

console.log(re2);