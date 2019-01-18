//Object.prototype
//Person.prototype
//Use prototype because info not storing in object


//Person constructor
function Person(firstName, lastName, dob){
  this.firstName = firstName; //function scope
  this.lastName = lastName;
  // this.age = age;
  this.birthday = new Date(dob);
  // this.getAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);

  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

//Calculate age function in prototype
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

//Ge Married
Person.prototype.getMarried = function(newLastName){
  this.lastName = newLastName;
}


const John = new Person('John', 'Tran', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);
console.log(John.calculateAge());
console.log(John.getFullName());

mary.getMarried('Nguyen');
console.log(mary.getFullName());
