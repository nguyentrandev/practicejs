// https://www.youtube.com/watch?v=rJesac0_Ftw

//Person constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;

}

//Person greeting
Person.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName}`;
}

//Person getFullName
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Nguyen', 'Tran');

console.log(person1.getFullName());

//Customer constructor
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

//INHERIT THE PERSON PROTOTYPE METHOD
Customer.prototype = Object.create(Person.prototype);

//MAKE customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer('John', 'Smith', '123-456-7899', 'Standard');

console.log(customer1);

//Customer greeting OVERRIDE function
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}
  Welcome to the company.`;
}

console.log(customer1.getFullName());

// Reset an Inherited Constructor Property
// Bird.prototype should be an instance of Animal.
// duck.constructor should return Bird.
// Dog.prototype should be an instance of Animal.
// beagle.constructor should return Dog.

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();

// Add Methods After Inheritance
// Animal should not respond to the bark() method.
// Passed
// Dog should inherit the eat() method from Animal.
// Passed
// Dog should have the bark() method as an own property.
// Passed
// beagle should be an instanceof Animal.
// Passed
// The constructor for beagle should be set to Dog.
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log("Woof");
}

// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

// If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:
// 1. duck => Is eat() defined here? No.
// 2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.
// 3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
// 4. Object => JavaScript stopped searching before reaching this level.


// Override Inherited Methods
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line



// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());










